const CACHE_TTL = 30 * 60 * 1000
let cache: { data: any; at: number } | null = null

export default defineEventHandler(async () => {
  if (cache && Date.now() - cache.at < CACHE_TTL) {
    return cache.data
  }

  const token = process.env.GITHUB_TOKEN
  const data = await $fetch('https://api.github.com/users/FramNaVer/repos', {
    params: { sort: 'updated', per_page: 30, type: 'owner' },
    headers: {
      Accept: 'application/vnd.github.v3+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  })

  cache = { data, at: Date.now() }
  return data
})
