<template>
  <div class="px-4 sm:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <div class="border border-slate-200/80 bg-white/80 dark:border-gray-700/60 dark:bg-gray-900/40 overflow-hidden flex flex-col" style="height: calc(100vh - 10rem)">

        <!-- Status Bar -->
        <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/80 dark:border-gray-700/50 dark:bg-gray-800/30 flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span class="text-xs font-mono text-slate-600 dark:text-gray-400 tracking-widest uppercase">
              ASK ME ANYTHING
            </span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xs font-mono text-slate-400 dark:text-gray-600">
              {{ messages.length > 1 ? messages.length - 1 + ' MSG' : 'READY' }}
            </span>
            <div class="flex items-center gap-1.5">
              <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
              <span class="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase">ONLINE</span>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div ref="scrollArea" class="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 font-mono text-sm">

          <!-- Intro system message -->
          <div class="flex items-start gap-3">
            <span class="text-xs text-slate-400 dark:text-gray-600 tracking-widest uppercase mt-0.5 flex-shrink-0 w-16 text-right">SYS</span>
            <div class="flex-1 px-3 py-2 bg-slate-100/60 dark:bg-gray-800/40 border border-slate-200/60 dark:border-gray-700/30 text-slate-500 dark:text-gray-500 text-xs leading-relaxed">
              {{ $t('chat.intro') }}
            </div>
          </div>

          <!-- Conversation messages -->
          <template v-for="(msg, i) in messages" :key="i">
            <!-- User -->
            <div v-if="msg.role === 'user'" class="flex items-start gap-3 justify-end">
              <div class="flex-1 max-w-lg px-3 py-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 text-slate-700 dark:text-gray-200 text-xs leading-relaxed text-right">
                {{ msg.content }}
              </div>
              <span class="text-xs text-blue-500 dark:text-blue-400 tracking-widest uppercase mt-0.5 flex-shrink-0 w-16">YOU</span>
            </div>

            <!-- Assistant -->
            <div v-else class="flex items-start gap-3">
              <span class="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mt-0.5 flex-shrink-0 w-16 text-right">BOT</span>
              <div class="flex-1 px-3 py-2 bg-slate-50/80 dark:bg-gray-800/30 border border-slate-200/60 dark:border-gray-700/30 text-slate-700 dark:text-gray-300 text-xs leading-relaxed whitespace-pre-wrap">
                {{ msg.content }}
              </div>
            </div>
          </template>

          <!-- Loading indicator -->
          <div v-if="loading" class="flex items-start gap-3">
            <span class="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mt-0.5 flex-shrink-0 w-16 text-right">BOT</span>
            <div class="px-3 py-2 bg-slate-50/80 dark:bg-gray-800/30 border border-slate-200/60 dark:border-gray-700/30 text-xs">
              <span class="inline-flex gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay: 300ms"></span>
              </span>
            </div>
          </div>

          <!-- Error -->
          <div v-if="error" class="flex items-start gap-3">
            <span class="text-xs text-red-400 tracking-widest uppercase mt-0.5 flex-shrink-0 w-16 text-right">ERR</span>
            <div class="px-3 py-2 bg-red-50/80 dark:bg-red-500/5 border border-red-200/60 dark:border-red-500/20 text-red-500 dark:text-red-400 text-xs">
              {{ error }}
            </div>
          </div>

        </div>

        <!-- Input -->
        <div class="flex-shrink-0 border-t border-slate-200/80 dark:border-gray-700/50 bg-slate-50/60 dark:bg-gray-800/20 px-4 sm:px-5 py-3">
          <form @submit.prevent="send" class="flex items-center gap-3">
            <span class="text-xs font-mono text-slate-400 dark:text-gray-600 flex-shrink-0">&#62;_</span>
            <input
              v-model="input"
              :disabled="loading"
              :placeholder="$t('chat.placeholder')"
              class="flex-1 bg-transparent text-sm font-mono text-slate-800 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-600 outline-none min-w-0"
              @keydown.enter.exact.prevent="send"
            />
            <button
              type="submit"
              :disabled="loading || !input.trim()"
              class="flex-shrink-0 px-3 py-1.5 text-xs font-mono font-semibold border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/15"
            >
              SEND
            </button>
          </form>
        </div>

      </div>

      <!-- Rate limit hint -->
      <p class="text-center text-xs font-mono text-slate-300 dark:text-gray-700 mt-3">
        {{ $t('chat.rateHint') }}
      </p>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: () => `Chat | Tanadon Inmano`,
  meta: [{ name: 'description', content: 'Ask anything about Tanadon Inmano' }]
})

const scrollArea = ref(null)
const input = ref('')
const loading = ref(false)
const error = ref('')
const messages = ref([])

async function send() {
  const text = input.value.trim()
  if (!text || loading.value) return

  error.value = ''
  messages.value.push({ role: 'user', content: text })
  input.value = ''
  loading.value = true

  await nextTick()
  scrollToBottom()

  try {
    const data = await $fetch('/api/chat', {
      method: 'POST',
      body: { messages: messages.value }
    })
    messages.value.push({ role: 'assistant', content: data.content })
  } catch (err) {
    const status = err?.statusCode ?? err?.response?.status
    if (status === 429) {
      error.value = t('chat.rateLimitError')
    } else {
      error.value = t('chat.genericError')
    }
  } finally {
    loading.value = false
    await nextTick()
    scrollToBottom()
  }
}

function scrollToBottom() {
  if (scrollArea.value) {
    scrollArea.value.scrollTop = scrollArea.value.scrollHeight
  }
}
</script>
