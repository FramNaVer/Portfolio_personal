<template>
    <div>
        <OperatorHeader
            :repo-count="repos.length"
            :lang-count="languageStats.length"
            :total-stars="totalStars"
        />
    </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
    title: () => t('seo.homeTitle'),
    meta: [
        { name: 'description', content: () => t('seo.homeDescription') }
    ]
})

const { repos, languageStats, fetchRepos } = useGitHub()

const totalStars = computed(() =>
    repos.value.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
)

onMounted(() => {
    fetchRepos()
})
</script>
