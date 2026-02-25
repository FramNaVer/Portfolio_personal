<template>
  <div
    class="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 overflow-hidden flex flex-col"
  >
    <!-- Glow overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <div class="relative z-10 p-6 flex flex-col flex-1">
      <!-- Header -->
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-2 text-gray-400">
          <i class="fa-solid fa-book-bookmark text-lg"></i>
          <a
            :href="repo.html_url"
            target="_blank"
            class="text-lg font-bold text-blue-400 hover:underline truncate"
          >
            {{ repo.name }}
          </a>
        </div>
        <span
          v-if="repo.stargazers_count"
          class="flex items-center gap-1 text-yellow-400 text-sm"
        >
          <i class="fa-solid fa-star"></i> {{ repo.stargazers_count }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
        {{ repo.description || 'No description provided.' }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between text-xs text-gray-500 mt-auto">
        <span v-if="repo.language" class="flex items-center gap-1.5">
          <span
            class="w-3 h-3 rounded-full"
            :style="{ backgroundColor: langColor }"
          ></span>
          {{ repo.language }}
        </span>
        <span v-if="repo.forks_count" class="flex items-center gap-1">
          <i class="fa-solid fa-code-fork"></i> {{ repo.forks_count }}
        </span>
        <span class="text-gray-600">
          {{ timeAgo(repo.updated_at) }}
        </span>
      </div>
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

<style scoped>
.group:hover {
  transform: translateY(-6px);
}
</style>