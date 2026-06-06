async function fetchFromGitHub(token?: string) {
  return await $fetch<any[]>('https://api.github.com/users/FramNaVer/repos', {
    params: { sort: 'updated', per_page: 30, type: 'owner' },
    headers: {
      Accept: 'application/vnd.github.v3+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  })
}

export default defineCachedEventHandler(async () => {
  const token = process.env.GITHUB_TOKEN
  try {
    return await fetchFromGitHub(token)
  } catch (e: any) {
    if ((e?.status === 401 || e?.status === 403) && token) {
      // Token invalid — fallback to unauthenticated (60 req/hr)
      return await fetchFromGitHub()
    }
    throw createError({
      statusCode: e?.status ?? 500,
      message: e?.data?.message ?? 'Failed to fetch GitHub repos'
    })
  }
}, {
  maxAge: 60 * 30, // 30 min
  swr: true,       // serve stale while revalidating in background
  name: 'github-repos'
})
