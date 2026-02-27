// GitHub API composable with caching to avoid rate limiting
const GITHUB_USERNAME = 'FramNaVer'
const CACHE_KEY = 'github_repos_cache'
const CACHE_DURATION = 1000 * 60 * 30 // 30 minutes

function getCache() {
  if (import.meta.server) return null
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const cached = JSON.parse(raw)
    if (Date.now() - cached.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }
    return cached.data
  } catch {
    return null
  }
}

function setCache(data) {
  if (import.meta.server) return
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
  } catch {
    // localStorage full or unavailable — ignore
  }
}

export const useGitHub = () => {
  const repos = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchRepos() {
    // 1) Try cache first
    const cached = getCache()
    if (cached) {
      repos.value = cached
      return
    }

    loading.value = true
    error.value = null

    try {
      const data = await $fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        {
          params: {
            sort: 'updated',
            per_page: 30,
            type: 'owner',
          },
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      )

      repos.value = data
      setCache(data)
    } catch (e) {
      console.error('GitHub API error:', e)
      error.value = e?.data?.message || e.message || 'Failed to fetch repos'

      // Fallback: use expired cache if available
      const fallback = getCache()
      if (fallback) repos.value = fallback
    } finally {
      loading.value = false
    }
  }

  // Derived data
  const pinnedRepos = computed(() =>
    repos.value
      .filter((r) => !r.fork)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
  )

  const languageStats = computed(() => {
    const counts = {}
    repos.value.forEach((r) => {
      if (r.language) {
        counts[r.language] = (counts[r.language] || 0) + 1
      }
    })
    const total = Object.values(counts).reduce((s, v) => s + v, 0) || 1
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count)
  })

  return { repos, pinnedRepos, languageStats, loading, error, fetchRepos }
}