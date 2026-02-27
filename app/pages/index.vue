<template>
    <div>
        <!-- Hero Section -->
        <section class="px-8 py-16 text-center">
            <div class="max-w-4xl mx-auto">
                <h1
                    class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {{ $t('hero.title') }}
                </h1>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    {{ $t('hero.description') }}
                </p>
                <div class="flex justify-center gap-4">
                    <a href="https://github.com/FramNaVer" target="_blank"
                        class="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        {{ $t('hero.viewWork') }}
                    </a>
                    <a href="mailto:framnaver@gmail.com"
                        class="border border-gray-600 hover:border-green-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-500/10">
                        {{ $t('hero.contactMe') }}
                    </a>
                </div>
            </div>
        </section>

        <!-- Tags Section -->
        <section class="px-8 py-12">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-extrabold text-center mb-8 text-white">
                    <span
                        class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        {{ $t('sections.programmingLanguages') }}
                    </span>
                </h2>
                <TagCard />
            </div>
        </section>

        <section class="px-8 py-12">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-extrabold text-center mb-8 text-white">
                    <span
                        class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        {{ $t('sections.technologyStack') }}
                    </span>
                </h2>
                <TagCardTech />
            </div>
        </section>

        <!-- GitHub Projects Section -->
        <section id="projects" class="px-8 py-16 bg-gray-800/30 scroll-mt-24">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-extrabold text-center mb-8 text-white">
                    <span
                        class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                        {{ $t('sections.myProjects') }}
                    </span>
                </h2>

                <!-- Loading -->
                <div v-if="loading" class="text-center py-12">
                    <i class="fa-solid fa-spinner fa-spin text-3xl text-green-400 mb-4"></i>
                    <p class="text-gray-400">{{ $t('github.loading') }}</p>
                </div>

                <!-- Error -->
                <div v-else-if="error && pinnedRepos.length === 0" class="text-center py-12">
                    <i class="fa-solid fa-triangle-exclamation text-3xl text-yellow-400 mb-4"></i>
                    <p class="text-gray-400 mb-4">{{ error }}</p>
                    <button @click="fetchRepos"
                        class="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-6 py-2 rounded-full transition-colors">
                        {{ $t('github.retry') }}
                    </button>
                </div>

                <!-- Pinned Project Cards -->
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PinnedProjectCard v-for="repo in pinnedRepos" :key="repo.id" :repo="repo" />
                </div>

                <!-- Language Stats -->
                <div v-if="languageStats.length" class="mt-16 max-w-2xl mx-auto">
                    <h3 class="text-2xl font-bold text-center mb-8 text-gray-200">{{ $t('sections.languageUsage') }}</h3>
                    <LanguageStats :stats="languageStats" />
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="px-8 py-16 bg-gray-800/30">
            <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="p-6">
                        <div class="text-4xl font-bold text-green-400 mb-2">{{ repos.length || '—' }}</div>
                        <div class="text-gray-400">{{ $t('github.publicRepos') }}</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-blue-400 mb-2">{{ totalStars }}</div>
                        <div class="text-gray-400">{{ $t('github.totalStars') }}</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-purple-400 mb-2">{{ languageStats.length }}</div>
                        <div class="text-gray-400">{{ $t('github.languages') }}</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-yellow-400 mb-2">{{ totalForks }}</div>
                        <div class="text-gray-400">{{ $t('github.totalForks') }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="px-8 py-20 scroll-mt-24">
            <div class="max-w-4xl mx-auto text-center">
                <h2
                    class="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {{ $t('contact.title') }}
                </h2>
                <p class="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                    {{ $t('contact.description') }}
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <!-- Email -->
                    <a href="mailto:framnaver@gmail.com"
                        class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                        <i
                            class="fa-solid fa-envelope text-3xl text-green-400 mb-3 group-hover:scale-110 transition-transform"></i>
                        <h3 class="text-white font-semibold mb-1">{{ $t('contact.email') }}</h3>
                        <p class="text-gray-400 text-sm">framnaver@gmail.com</p>
                    </a>

                    <!-- GitHub -->
                    <a href="https://github.com/FramNaVer" target="_blank"
                        class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-gray-400/50 hover:shadow-xl hover:shadow-gray-400/10 transition-all duration-300">
                        <i
                            class="fa-brands fa-github text-3xl text-gray-300 mb-3 group-hover:scale-110 transition-transform"></i>
                        <h3 class="text-white font-semibold mb-1">GitHub</h3>
                        <p class="text-gray-400 text-sm">@FramNaVer</p>
                    </a>

                    <!-- Location -->
                    <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                        <i class="fa-solid fa-location-dot text-3xl text-blue-400 mb-3"></i>
                        <h3 class="text-white font-semibold mb-1">{{ $t('contact.location') }}</h3>
                        <p class="text-gray-400 text-sm">{{ $t('contact.locationValue') }}</p>
                    </div>
                </div>
            </div>
        </section>
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

const { repos, pinnedRepos, languageStats, loading, error, fetchRepos } = useGitHub()

const totalStars = computed(() =>
    repos.value.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
)
const totalForks = computed(() =>
    repos.value.reduce((sum, r) => sum + (r.forks_count || 0), 0)
)

onMounted(() => {
    fetchRepos()
})
</script>
