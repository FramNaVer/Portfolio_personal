<template>
  <div class="px-4 sm:px-8 py-8">
    <div class="max-w-6xl mx-auto">
      <div class="border border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-gray-700/60 dark:bg-gray-900/40 overflow-hidden">

        <!-- Status Bar -->
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/80 dark:border-gray-700/50 dark:bg-gray-800/30">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-400"></div>
            <span class="text-xs font-mono text-slate-600 dark:text-gray-400 tracking-widest uppercase">
              {{ $t('operator.developerId') }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase hidden sm:inline">
              {{ $t('operator.systemStatus') }}
            </span>
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-xs font-mono text-green-500 dark:text-green-400 font-semibold tracking-widest uppercase">
              {{ $t('operator.active') }}
            </span>
          </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3">

          <!-- Left: Identity + Command Mode + Timeline -->
          <div class="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200/60 dark:border-gray-700/50">

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-none">
              Tanadon Inmano
            </h1>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-sm sm:text-base">
              <span class="text-slate-600 dark:text-gray-300">Full Stack Developer</span>
              <span class="text-slate-300 dark:text-gray-600">•</span>
              <span class="text-slate-600 dark:text-gray-300">AI/ML Enthusiast</span>
              <span class="text-slate-300 dark:text-gray-600">•</span>
              <span class="text-slate-600 dark:text-gray-300">Software Developer @ MTC</span>
            </div>

            <div class="flex items-center gap-2 mb-6 text-slate-500 dark:text-gray-500 text-xs font-mono">
              <i class="fa-solid fa-location-dot text-blue-500/60 dark:text-green-500/60"></i>
              <span>{{ $t('contact.locationValue') }}</span>
            </div>

            <!-- Command Mode Buttons -->
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span class="text-xs font-mono text-slate-400 dark:text-gray-600 tracking-widest uppercase">
                {{ $t('operator.commandMode') }}
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-blue-500/40 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10 dark:border-green-500/40 dark:text-green-400 dark:bg-green-500/5 dark:hover:bg-green-500/10 cursor-default transition-colors tracking-wider">
                  FULLSTACK
                </span>
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-blue-500/40 text-blue-600 bg-blue-500/5 hover:bg-blue-500/10 dark:border-blue-500/40 dark:text-blue-400 dark:bg-blue-500/5 dark:hover:bg-blue-500/10 cursor-default transition-colors tracking-wider">
                  AI/ML
                </span>
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-indigo-500/40 text-indigo-600 bg-indigo-500/5 hover:bg-indigo-500/10 dark:border-purple-500/40 dark:text-purple-400 dark:bg-purple-500/5 dark:hover:bg-purple-500/10 cursor-default transition-colors tracking-wider">
                  DEVOPS
                </span>
              </div>
            </div>

            <!-- Experience Timeline -->
            <div class="border-t border-slate-200/60 dark:border-gray-700/30 pt-5">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">
                    {{ $t('operator.experienceTimeline') }}
                  </span>
                </div>
                <span class="text-xs font-mono text-slate-300 dark:text-gray-600">{{ timelineEntries.length }} ENTRIES</span>
              </div>

              <div class="divide-y divide-slate-200/50 dark:divide-gray-700/30 -mx-6 sm:-mx-8">
                <div
                  v-for="entry in timelineEntries"
                  :key="entry.company"
                  class="grid grid-cols-[6rem_1px_1fr] sm:grid-cols-[8rem_1px_1fr] items-stretch hover:bg-slate-50/60 dark:hover:bg-gray-800/20 transition-colors duration-200 px-6 sm:px-8"
                >
                  <!-- Date -->
                  <div class="py-4 flex flex-col justify-center">
                    <span class="text-xs font-mono text-slate-500 dark:text-gray-500 leading-relaxed whitespace-pre-line">{{ entry.period }}</span>
                  </div>
                  <!-- Line + Dot -->
                  <div class="relative flex flex-col items-center">
                    <div class="absolute top-0 bottom-0 w-px bg-slate-200/80 dark:bg-gray-700/50"></div>
                    <div class="relative mt-4 z-10">
                      <div :class="[
                        'w-2.5 h-2.5 rounded-full border-2',
                        entry.current
                          ? 'bg-green-400 border-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'
                          : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600'
                      ]"></div>
                    </div>
                  </div>
                  <!-- Content -->
                  <div class="py-4 pl-4">
                    <div class="flex flex-wrap items-center gap-2 mb-1">
                      <span class="text-slate-900 dark:text-white font-semibold text-sm">{{ entry.company }}</span>
                      <span :class="[
                        'px-1.5 py-0.5 text-xs font-mono font-semibold border tracking-wider',
                        entry.current
                          ? 'border-green-500/50 text-green-600 dark:text-green-400 bg-green-500/5'
                          : entry.type === 'intern'
                            ? 'border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/5'
                            : 'border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/5'
                      ]">
                        {{ entry.current ? $t('operator.current') : entry.type === 'intern' ? $t('operator.intern') : $t('operator.graduate') }}
                      </span>
                    </div>
                    <p class="text-slate-500 dark:text-gray-400 text-xs font-mono mb-0.5">{{ entry.role }}</p>
                    <p class="text-slate-400 dark:text-gray-600 text-xs">{{ entry.description }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: Summary + Capabilities + Languages + Tools -->
          <div class="p-6 sm:p-8 flex flex-col gap-5">

            <!-- Summary -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">
                  {{ $t('operator.summary') }}
                </span>
              </div>
              <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                {{ $t('operator.summaryText') }}
              </p>
            </div>

            <!-- Core Capabilities -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-gray-600"></div>
                <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">
                  {{ $t('operator.coreCapabilities') }}
                </span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="cap in capabilities"
                  :key="cap"
                  class="px-2 py-1 text-xs text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-gray-800/80 border border-slate-200/80 dark:border-gray-700/50 font-mono hover:border-slate-300 dark:hover:border-gray-600/80 transition-colors cursor-default"
                >
                  {{ cap }}
                </span>
              </div>
            </div>

            <!-- Programming Languages -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">{{ $t('sections.programmingLanguages') }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="lang in languages" :key="lang"
                  class="px-2 py-0.5 text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100/80 dark:bg-gray-800/60 border border-slate-200/60 dark:border-gray-700/40 hover:border-blue-500/30 hover:text-slate-900 dark:hover:border-blue-500/30 dark:hover:text-gray-200 transition-colors cursor-default">
                  {{ lang }}
                </span>
              </div>
            </div>

            <!-- Technology Stack -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                <span class="text-xs font-mono text-slate-500 dark:text-gray-500 tracking-widest uppercase">{{ $t('sections.technologyStack') }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tool in tools" :key="tool"
                  class="px-2 py-0.5 text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100/80 dark:bg-gray-800/60 border border-slate-200/60 dark:border-gray-700/40 hover:border-purple-500/30 hover:text-slate-900 dark:hover:border-purple-500/30 dark:hover:text-gray-200 transition-colors cursor-default">
                  {{ tool }}
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Stats Bar -->
        <div class="border-t border-slate-200/80 dark:border-gray-700/50 grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-200/80 dark:divide-gray-700/50">
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-green-500 dark:text-green-400">{{ repoCount || '—' }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.publicRepos') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-blue-500 dark:text-blue-400">{{ langCount || '—' }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.languages') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{{ totalStars }}</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.totalStars') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-xl font-bold text-purple-500 dark:text-purple-400 font-mono">CS</div>
            <div class="text-xs font-mono text-slate-400 dark:text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('operator.education') }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

defineProps<{
  repoCount: number
  langCount: number
  totalStars: number
}>()

const capabilities = computed(() =>
  (tm('operator.capabilities') as any[]).map((fn: any) => rt(fn))
)

const languages = [
  'Vue.js', 'Nuxt.js', 'Python', 'C#', 'ASP.NET', 'Golang',
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Express.js', 'React', 'Tailwind CSS'
]

const tools = [
  'Docker', 'Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio',
  'Figma', 'MySQL', 'MongoDB', 'Swagger', 'Trello'
]

const timelineEntries = [
  {
    period: 'พ.ค. 2026\n— ปัจจุบัน',
    company: 'Muang Thai Capital (MTC)',
    role: 'Software Developer',
    description: 'เมืองไทยแคปปิตอล · Full-time',
    type: 'work',
    current: true
  },
  {
    period: '20 เม.ย.\n— 30 มิ.ย. 2026',
    company: 'Pransworks',
    role: 'Software Developer Intern',
    description: 'ฝึกงาน · 72 วัน',
    type: 'intern',
    current: false
  },
  {
    period: '2021\n— 2025',
    company: 'มหาวิทยาลัยแม่โจ้',
    role: 'วิทยาการคอมพิวเตอร์',
    description: 'Maejo University · Computer Science · บัณฑิต รุ่นปี 2568',
    type: 'education',
    current: false
  }
]
</script>
