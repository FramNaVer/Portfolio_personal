<template>
  <div
    class="group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 px-5 sm:px-6 py-4 hover:bg-slate-50/80 dark:hover:bg-gray-800/20 transition-colors duration-150 border-b border-slate-200/50 dark:border-gray-700/30 last:border-0"
  >
    <!-- Left: dot + name + description -->
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full flex-shrink-0" :style="{ backgroundColor: langColor }"></span>
        <a
          :href="repo.html_url"
          target="_blank"
          class="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline truncate"
        >
          {{ repo.name }}
        </a>
        <span v-if="repo.fork"
          class="px-1 py-0.5 text-xs font-mono border border-slate-200/80 dark:border-gray-700/50 text-slate-400 dark:text-gray-600 leading-none">
          FORK
        </span>
      </div>
      <p class="text-xs text-slate-400 dark:text-gray-600 font-mono truncate mt-0.5 pl-4">
        {{ repo.description || '—' }}
      </p>
    </div>

    <!-- Right: language + stars + forks + time -->
    <div class="flex items-center gap-3 pl-4 sm:pl-0 flex-shrink-0">
      <span v-if="repo.language"
        class="px-1.5 py-0.5 text-xs font-mono border border-slate-200/80 dark:border-gray-700/50 text-slate-500 dark:text-gray-500 bg-slate-50/80 dark:bg-gray-800/60">
        {{ repo.language }}
      </span>
      <span v-if="repo.stargazers_count"
        class="flex items-center gap-1 text-xs font-mono text-yellow-500 dark:text-yellow-400">
        <i class="fa-solid fa-star text-xs"></i>{{ repo.stargazers_count }}
      </span>
      <span v-if="repo.forks_count"
        class="flex items-center gap-1 text-xs font-mono text-slate-400 dark:text-gray-600">
        <i class="fa-solid fa-code-fork text-xs"></i>{{ repo.forks_count }}
      </span>
      <span class="text-xs font-mono text-slate-300 dark:text-gray-700 tabular-nums">{{ timeAgo(repo.updated_at) }}</span>
      <a :href="repo.html_url" target="_blank"
        class="text-slate-300 hover:text-blue-500 dark:text-gray-700 dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100">
        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  repo: { type: Object, required: true },
})

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C#': '#178600',
  Go: '#00ADD8',
  Java: '#b07219',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  PHP: '#4F5D95',
}

const langColor = computed(
  () => LANG_COLORS[props.repo.language] || '#8b949e'
)

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return 'today'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}
</script>
