<template>
    <div>
        <!-- Operator Header -->
        <OperatorHeader
            :repo-count="repos.length"
            :lang-count="languageStats.length"
            :total-stars="totalStars"
        />

        <!-- Experience Timeline -->
        <ExperienceTimeline />

        <!-- Programming Languages Panel -->
        <div class="px-4 sm:px-8 pb-4">
            <div class="max-w-6xl mx-auto">
                <div class="border border-gray-700/60 bg-gray-900/20 overflow-hidden">
                    <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/20">
                        <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
                                {{ $t('sections.programmingLanguages') }}
                            </span>
                        </div>
                        <span class="text-xs font-mono text-gray-600 border border-gray-700/50 bg-gray-800/60 px-2 py-0.5">CORE SKILLS</span>
                    </div>
                    <div class="p-6 sm:p-8">
                        <TagCard />
                    </div>
                </div>
            </div>
        </div>

        <!-- Technology Stack Panel -->
        <div class="px-4 sm:px-8 pb-4">
            <div class="max-w-6xl mx-auto">
                <div class="border border-gray-700/60 bg-gray-900/20 overflow-hidden">
                    <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/20">
                        <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
                                {{ $t('sections.technologyStack') }}
                            </span>
                        </div>
                        <span class="text-xs font-mono text-gray-600 border border-gray-700/50 bg-gray-800/60 px-2 py-0.5">CORE TOOLS</span>
                    </div>
                    <div class="p-6 sm:p-8">
                        <TagCardTech />
                    </div>
                </div>
            </div>
        </div>

        <!-- GitHub Projects Panel -->
        <div id="projects" class="px-4 sm:px-8 pb-4 scroll-mt-4">
            <div class="max-w-6xl mx-auto">
                <div class="border border-gray-700/60 bg-gray-900/20 overflow-hidden">
                    <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/20">
                        <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
                                {{ $t('sections.myProjects') }}
                            </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span v-if="loading" class="text-xs font-mono text-gray-600 flex items-center gap-1.5">
                                <i class="fa-solid fa-spinner fa-spin text-green-400"></i> {{ $t('github.loading') }}
                            </span>
                            <span v-else class="text-xs font-mono text-gray-600 border border-gray-700/50 bg-gray-800/60 px-2 py-0.5">
                                {{ pinnedRepos.length }} REPOS
                            </span>
                        </div>
                    </div>
                    <div class="p-4 sm:p-6">
                        <!-- Error state -->
                        <div v-if="error && pinnedRepos.length === 0" class="text-center py-8">
                            <i class="fa-solid fa-triangle-exclamation text-2xl text-yellow-400 mb-3"></i>
                            <p class="text-gray-500 text-sm mb-3 font-mono">{{ error }}</p>
                            <button @click="fetchRepos"
                                class="text-xs font-mono border border-green-500/40 text-green-400 px-4 py-1.5 hover:bg-green-500/10 transition-colors">
                                {{ $t('github.retry') }}
                            </button>
                        </div>
                        <!-- Project Cards -->
                        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <PinnedProjectCard v-for="repo in pinnedRepos" :key="repo.id" :repo="repo" />
                        </div>
                        <!-- Language Stats -->
                        <div v-if="languageStats.length" class="mt-8 border-t border-gray-700/30 pt-6">
                            <div class="flex items-center gap-2 mb-4">
                                <div class="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                <span class="text-xs font-mono text-gray-500 tracking-widest uppercase">{{ $t('sections.languageUsage') }}</span>
                            </div>
                            <div class="max-w-xl">
                                <LanguageStats :stats="languageStats" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact & Digital Presence Panel -->
        <div id="contact" class="px-4 sm:px-8 pb-8 scroll-mt-4">
            <div class="max-w-6xl mx-auto">
                <div class="border border-gray-700/60 bg-gray-900/20 overflow-hidden">
                    <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/20">
                        <div class="flex items-center gap-2">
                            <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
                                {{ $t('contact.title') }}
                            </span>
                        </div>
                        <span class="text-xs font-mono text-gray-600 border border-gray-700/50 bg-gray-800/60 px-2 py-0.5">DIGITAL PRESENCE</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700/40">
                        <!-- Email -->
                        <a href="mailto:framnaver@gmail.com"
                            class="group flex items-center gap-4 px-6 py-5 hover:bg-gray-800/20 transition-colors duration-200">
                            <div class="w-9 h-9 border border-green-500/30 bg-green-500/5 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/60 transition-colors">
                                <i class="fa-solid fa-envelope text-green-400 text-sm"></i>
                            </div>
                            <div class="min-w-0">
                                <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{{ $t('contact.email') }}</p>
                                <p class="text-white text-sm font-mono truncate group-hover:text-green-300 transition-colors">framnaver@gmail.com</p>
                            </div>
                        </a>

                        <!-- GitHub -->
                        <a href="https://github.com/FramNaVer" target="_blank"
                            class="group flex items-center gap-4 px-6 py-5 hover:bg-gray-800/20 transition-colors duration-200">
                            <div class="w-9 h-9 border border-gray-600/30 bg-gray-600/5 flex items-center justify-center flex-shrink-0 group-hover:border-gray-400/60 transition-colors">
                                <i class="fa-brands fa-github text-gray-300 text-sm"></i>
                            </div>
                            <div>
                                <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">GitHub</p>
                                <p class="text-white text-sm font-mono group-hover:text-gray-200 transition-colors">@FramNaVer</p>
                            </div>
                        </a>

                        <!-- Location -->
                        <div class="flex items-center gap-4 px-6 py-5">
                            <div class="w-9 h-9 border border-blue-500/30 bg-blue-500/5 flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-location-dot text-blue-400 text-sm"></i>
                            </div>
                            <div>
                                <p class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{{ $t('contact.location') }}</p>
                                <p class="text-white text-sm font-mono">{{ $t('contact.locationValue') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

onMounted(() => {
    fetchRepos()
})
</script>
