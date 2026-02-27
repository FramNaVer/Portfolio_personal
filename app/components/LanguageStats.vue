<template>
  <div v-if="stats.length" class="space-y-4">
    <div v-for="lang in stats" :key="lang.name" class="space-y-1.5">
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-300 font-medium">{{ lang.name }}</span>
        <span class="text-gray-500">{{ lang.percent }}%</span>
      </div>
      <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-700 ease-out"
          :style="{ width: lang.percent + '%', backgroundColor: barColor(lang.name) }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: { type: Array, default: () => [] },
})

const COLORS = {
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
  PHP: '#4F5D95',
}

function barColor(name) {
  return COLORS[name] || '#6366f1'
}
</script>