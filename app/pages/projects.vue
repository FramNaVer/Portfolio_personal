<template>
  <div class="px-4 sm:px-8 py-8">
    <div class="max-w-6xl mx-auto space-y-4">

      <!-- Page Header Panel -->
      <div class="reveal border border-slate-200/80 bg-white/80 dark:border-gray-700/60 dark:bg-gray-900/40 overflow-hidden">
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/80 dark:border-gray-700/50 dark:bg-gray-800/30">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span class="text-xs font-mono text-slate-600 dark:text-gray-400 tracking-widest uppercase">
              {{ $t('sections.myProjects') }}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <a href="https://github.com/FramNaVer" target="_blank"
              class="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors">
              <i class="fa-brands fa-github text-sm"></i>
              FramNaVer
            </a>
            <div class="flex items-center gap-1.5">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span class="text-xs font-mono text-green-500 dark:text-green-400">LIVE</span>
            </div>
          </div>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-3 divide-x divide-slate-200/80 dark:divide-gray-700/50">
          <div class="px-5 py-3 text-center">
            <div class="text-xl font-bold text-green-500 dark:text-green-400 font-mono tabular-nums">{{ repoReady ? repoCountUp : '—' }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-0.5">{{ $t('github.publicRepos') }}</div>
          </div>
          <div class="px-5 py-3 text-center">
            <div class="text-xl font-bold text-yellow-500 dark:text-yellow-400 font-mono tabular-nums">{{ starCountUp }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-0.5">{{ $t('github.totalStars') }}</div>
          </div>
          <div class="px-5 py-3 text-center">
            <div class="text-xl font-bold text-blue-500 dark:text-blue-400 font-mono tabular-nums">{{ langReady ? langCountUp : '—' }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-0.5">{{ $t('github.languages') }}</div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="border border-slate-200/80 bg-white/60 dark:border-gray-700/60 dark:bg-gray-900/20 px-6 py-12 text-center">
        <i class="fa-solid fa-spinner fa-spin text-2xl text-green-400 mb-3"></i>
        <p class="text-slate-500 dark:text-gray-500 text-sm font-mono">{{ $t('github.loading') }}</p>
      </div>

      <!-- Error -->
      <div v-else-if="error && repos.length === 0"
        class="border border-slate-200/80 bg-white/60 dark:border-gray-700/60 dark:bg-gray-900/20 px-6 py-12 text-center">
        <i class="fa-solid fa-triangle-exclamation text-2xl text-yellow-400 mb-3"></i>
        <p class="text-slate-500 dark:text-gray-500 text-sm font-mono mb-4">{{ error }}</p>
        <button @click="fetchRepos"
          class="text-xs font-mono border border-blue-500/40 text-blue-600 dark:border-green-500/40 dark:text-green-400 px-4 py-1.5 hover:bg-blue-500/10 dark:hover:bg-green-500/10 transition-colors">
          {{ $t('github.retry') }}
        </button>
      </div>

      <!-- Repository List -->
      <div v-else class="reveal border border-slate-200/80 bg-white/60 dark:border-gray-700/60 dark:bg-gray-900/20 overflow-hidden" style="animation-delay: 100ms">

        <!-- Panel header -->
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/60 dark:border-gray-700/50 dark:bg-gray-800/20">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-gray-500"></div>
            <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">Repositories</span>
          </div>
          <div class="flex items-center gap-3">
            <!-- Column labels (desktop only) -->
            <div class="hidden sm:flex items-center gap-6 text-xs font-mono text-slate-300 dark:text-gray-700 tracking-wider uppercase mr-2">
              <span class="w-16 text-center">Lang</span>
              <span class="w-6 text-center">★</span>
              <span class="w-6 text-center">⑂</span>
              <span class="w-14 text-right">Updated</span>
              <span class="w-4"></span>
            </div>
            <span class="text-xs font-mono text-slate-400 dark:text-gray-600 border border-slate-200/80 dark:border-gray-700/50 bg-slate-100/60 dark:bg-gray-800/60 px-2 py-0.5">
              {{ repos.length }} FILES
            </span>
          </div>
        </div>

        <!-- Rows -->
        <div>
          <PinnedProjectCard v-for="(repo, i) in repos" :key="repo.id" :repo="repo" :index="i" />
        </div>

      </div>

      <!-- Language Usage Panel -->
      <div v-if="languageStats.length" class="reveal border border-slate-200/80 bg-white/60 dark:border-gray-700/60 dark:bg-gray-900/20 overflow-hidden" style="animation-delay: 200ms">
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/60 dark:border-gray-700/50 dark:bg-gray-800/20">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
            <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">{{ $t('sections.languageUsage') }}</span>
          </div>
        </div>
        <div class="p-6 max-w-lg">
          <LanguageStats :stats="languageStats" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: () => `${t('nav.projects')} | Tanadon Inmano`,
  meta: [
    { name: 'description', content: 'GitHub projects by Tanadon Inmano — Full Stack Developer' }
  ]
})

const { repos, languageStats, loading, error, fetchRepos } = useGitHub()

const totalStars = computed(() =>
  repos.value.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
)

// Count-up animation for the stat numbers
const { value: repoCountUp, ready: repoReady } = useCountUp(computed(() => repos.value.length))
const { value: langCountUp, ready: langReady } = useCountUp(computed(() => languageStats.value.length))
const { value: starCountUp } = useCountUp(totalStars)
</script>
