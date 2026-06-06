export const useGitHub = () => {
  const { data, pending, error, refresh } = useAsyncData(
    'github-repos',
    () => $fetch('/api/github'),
    {
      default: () => [],
      server: true,
      lazy: false
    }
  )

  const repos = computed(() => data.value ?? [])

  const pinnedRepos = computed(() =>
    repos.value
      .filter((r) => !r.fork)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
  )

  const languageStats = computed(() => {
    const counts = {}
    repos.value.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
    })
    const total = Object.values(counts).reduce((s, v) => s + v, 0) || 1
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count)
  })

  return { repos, pinnedRepos, languageStats, loading: pending, error, fetchRepos: refresh }
}
