<template>
  <div class="px-4 sm:px-8 py-8">
    <div class="max-w-6xl mx-auto">
      <div class="border border-gray-700/60 bg-gray-900/40 backdrop-blur-sm overflow-hidden">

        <!-- Status Bar -->
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/30">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-400"></div>
            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
              {{ $t('operator.developerId') }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-gray-500 tracking-widest uppercase hidden sm:inline">
              {{ $t('operator.systemStatus') }}
            </span>
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-xs font-mono text-green-400 font-semibold tracking-widest uppercase">
              {{ $t('operator.active') }}
            </span>
          </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3">

          <!-- Left: Identity Block -->
          <div class="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-700/50">

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight leading-none">
              Tanadon Inmano
            </h1>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-sm sm:text-base">
              <span class="text-gray-300">Full Stack Developer</span>
              <span class="text-gray-600">•</span>
              <span class="text-gray-300">AI/ML Enthusiast</span>
              <span class="text-gray-600">•</span>
              <span class="text-gray-300">Software Developer @ MTC</span>
            </div>

            <div class="flex items-center gap-2 mb-8 text-gray-500 text-xs font-mono">
              <i class="fa-solid fa-location-dot text-green-500/60"></i>
              <span>{{ $t('contact.locationValue') }}</span>
            </div>

            <!-- Command Mode Buttons -->
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-xs font-mono text-gray-600 tracking-widest uppercase">
                {{ $t('operator.commandMode') }}
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-green-500/40 text-green-400 bg-green-500/5 hover:bg-green-500/10 cursor-default transition-colors tracking-wider">
                  FULLSTACK
                </span>
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-blue-500/40 text-blue-400 bg-blue-500/5 hover:bg-blue-500/10 cursor-default transition-colors tracking-wider">
                  AI/ML
                </span>
                <span class="px-3 py-1 text-xs font-mono font-semibold border border-purple-500/40 text-purple-400 bg-purple-500/5 hover:bg-purple-500/10 cursor-default transition-colors tracking-wider">
                  DEVOPS
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Summary + Capabilities -->
          <div class="p-6 sm:p-8">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span class="text-xs font-mono text-gray-500 tracking-widest uppercase">
                {{ $t('operator.summary') }}
              </span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ $t('operator.summaryText') }}
            </p>

            <div class="flex items-center gap-2 mb-3">
              <div class="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <span class="text-xs font-mono text-gray-500 tracking-widest uppercase">
                {{ $t('operator.coreCapabilities') }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="cap in capabilities"
                :key="cap"
                class="px-2 py-1 text-xs text-gray-400 bg-gray-800/80 border border-gray-700/50 font-mono hover:border-gray-600/80 transition-colors cursor-default"
              >
                {{ cap }}
              </span>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="border-t border-gray-700/50 grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-700/50">
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-green-400">{{ repoCount || '—' }}</div>
            <div class="text-xs font-mono text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.publicRepos') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-blue-400">{{ langCount || '—' }}</div>
            <div class="text-xs font-mono text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.languages') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-2xl font-bold text-yellow-400">{{ totalStars }}</div>
            <div class="text-xs font-mono text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('github.totalStars') }}
            </div>
          </div>
          <div class="px-4 sm:px-6 py-4 text-center">
            <div class="text-xl font-bold text-purple-400 font-mono">CS</div>
            <div class="text-xs font-mono text-gray-600 uppercase tracking-wider mt-1">
              {{ $t('operator.education') }}
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="border-t border-gray-700/50 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-700/50">
          <!-- Programming Languages -->
          <div class="px-5 sm:px-6 py-4">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span class="text-xs font-mono text-gray-600 tracking-widest uppercase">{{ $t('sections.programmingLanguages') }}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="lang in languages" :key="lang"
                class="px-2 py-0.5 text-xs font-mono text-gray-400 bg-gray-800/60 border border-gray-700/40 hover:border-blue-500/30 hover:text-gray-200 transition-colors cursor-default">
                {{ lang }}
              </span>
            </div>
          </div>
          <!-- Tools & Stack -->
          <div class="px-5 sm:px-6 py-4">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span class="text-xs font-mono text-gray-600 tracking-widest uppercase">{{ $t('sections.technologyStack') }}</span>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tool in tools" :key="tool"
                class="px-2 py-0.5 text-xs font-mono text-gray-400 bg-gray-800/60 border border-gray-700/40 hover:border-purple-500/30 hover:text-gray-200 transition-colors cursor-default">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>

        <!-- Experience Timeline (embedded) -->
        <div class="border-t border-gray-700/50">
          <!-- Timeline header -->
          <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/30 bg-gray-800/10">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span class="text-xs font-mono text-gray-500 tracking-widest uppercase">
                {{ $t('operator.experienceTimeline') }}
              </span>
            </div>
            <span class="text-xs font-mono text-gray-600">{{ timelineEntries.length }} ENTRIES</span>
          </div>
          <!-- Timeline rows -->
          <div class="divide-y divide-gray-700/30">
            <div
              v-for="entry in timelineEntries"
              :key="entry.company"
              class="grid grid-cols-[7rem_1px_1fr] sm:grid-cols-[9rem_1px_1fr] items-stretch hover:bg-gray-800/20 transition-colors duration-200"
            >
              <!-- Date -->
              <div class="px-4 sm:px-6 py-4 flex flex-col justify-center">
                <span class="text-xs font-mono text-gray-500 leading-relaxed whitespace-pre-line">{{ entry.period }}</span>
              </div>
              <!-- Line + Dot -->
              <div class="relative flex flex-col items-center">
                <div class="absolute top-0 bottom-0 w-px bg-gray-700/50"></div>
                <div class="relative mt-4 z-10">
                  <div :class="[
                    'w-2.5 h-2.5 rounded-full border-2',
                    entry.current
                      ? 'bg-green-400 border-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'
                      : 'bg-gray-800 border-gray-600'
                  ]"></div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 sm:px-6 py-4">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <span class="text-white font-semibold text-sm">{{ entry.company }}</span>
                  <span :class="[
                    'px-1.5 py-0.5 text-xs font-mono font-semibold border tracking-wider',
                    entry.current
                      ? 'border-green-500/50 text-green-400 bg-green-500/5'
                      : entry.type === 'intern'
                        ? 'border-blue-500/40 text-blue-400 bg-blue-500/5'
                        : 'border-purple-500/40 text-purple-400 bg-purple-500/5'
                  ]">
                    {{ entry.current ? $t('operator.current') : entry.type === 'intern' ? $t('operator.intern') : $t('operator.graduate') }}
                  </span>
                </div>
                <p class="text-gray-400 text-xs font-mono mb-0.5">{{ entry.role }}</p>
                <p class="text-gray-600 text-xs">{{ entry.description }}</p>
              </div>
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
