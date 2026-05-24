<template>
  <div class="px-4 sm:px-8 pb-4">
    <div class="max-w-6xl mx-auto">
      <div class="border border-gray-700/60 bg-gray-900/20 overflow-hidden">

        <!-- Panel Header -->
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-700/50 bg-gray-800/20">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <span class="text-xs font-mono text-gray-400 tracking-widest uppercase">
              {{ $t('operator.experienceTimeline') }}
            </span>
          </div>
          <span class="text-xs font-mono text-gray-600 tracking-wider border border-gray-700/50 bg-gray-800/60 px-2 py-0.5">
            {{ entries.length }} ENTRIES
          </span>
        </div>

        <!-- Timeline -->
        <div class="divide-y divide-gray-700/30">
          <div
            v-for="(entry, index) in entries"
            :key="index"
            class="grid grid-cols-[7rem_1px_1fr] sm:grid-cols-[9rem_1px_1fr] items-stretch hover:bg-gray-800/20 transition-colors duration-200"
          >
            <!-- Date Column -->
            <div class="px-4 sm:px-6 py-5 flex flex-col justify-center">
              <span class="text-xs font-mono text-gray-500 leading-relaxed whitespace-pre-line">{{ entry.period }}</span>
            </div>

            <!-- Timeline Line + Dot -->
            <div class="relative flex flex-col items-center">
              <div class="absolute top-0 bottom-0 w-px bg-gray-700/50"></div>
              <div class="relative mt-5 z-10">
                <div
                  :class="[
                    'w-2.5 h-2.5 rounded-full border-2',
                    entry.current
                      ? 'bg-green-400 border-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'
                      : 'bg-gray-800 border-gray-600'
                  ]"
                ></div>
              </div>
            </div>

            <!-- Content Column -->
            <div class="px-4 sm:px-6 py-5">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <span class="text-white font-semibold text-sm sm:text-base">{{ entry.company }}</span>
                <span
                  :class="[
                    'px-1.5 py-0.5 text-xs font-mono font-semibold border tracking-wider',
                    entry.current
                      ? 'border-green-500/50 text-green-400 bg-green-500/5'
                      : entry.type === 'intern'
                        ? 'border-blue-500/40 text-blue-400 bg-blue-500/5'
                        : 'border-purple-500/40 text-purple-400 bg-purple-500/5'
                  ]"
                >
                  {{
                    entry.current
                      ? $t('operator.current')
                      : entry.type === 'intern'
                        ? $t('operator.intern')
                        : $t('operator.graduate')
                  }}
                </span>
              </div>
              <p class="text-gray-400 text-xs sm:text-sm font-mono mb-1">{{ entry.role }}</p>
              <p class="text-gray-600 text-xs">{{ entry.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const entries = [
  {
    period: 'พ.ค. 2026\n— ปัจจุบัน',
    company: 'Muang Thai Capital (MTC)',
    role: 'Software Developer',
    description: 'เมืองไทยแคปปิตอล · Full-time',
    type: 'work',
    current: true
  },
  {
    period: '20 เม.ย.\n—  30 มิ.ย. 2026',
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
