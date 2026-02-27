<template>
  <div
    class="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 p-4"
  >
    <div class="flex items-center justify-between mb-2">
      <a
        :href="repo.html_url"
        target="_blank"
        class="text-sm font-semibold text-blue-400 hover:underline truncate"
      >
        {{ repo.name }}
      </a>
      <span
        v-if="repo.language"
        class="text-xs text-gray-500 flex items-center gap-1"
      >
        <span
          class="w-2 h-2 rounded-full inline-block"
          :style="{ backgroundColor: langColor }"
        ></span>
        {{ repo.language }}
      </span>
    </div>
    <p class="text-gray-500 text-xs line-clamp-1">
      {{ repo.description || 'No description' }}
    </p>
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
}

const langColor = computed(
  () => LANG_COLORS[props.repo.language] || '#8b949e'
)
</script>