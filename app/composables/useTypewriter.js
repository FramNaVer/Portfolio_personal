/**
 * Rotating typewriter effect — types each phrase out, pauses, deletes, then
 * moves to the next. Returns the current visible text so the caller can render
 * it next to a blinking cursor.
 *
 * @param {string[]|import('vue').Ref<string[]>} words  phrases to cycle through
 * @param {object} [options]
 * @param {number} [options.typeSpeed=75]    ms per character while typing
 * @param {number} [options.deleteSpeed=35]  ms per character while deleting
 * @param {number} [options.pauseAfter=1600] ms to hold a fully typed phrase
 * @param {number} [options.pauseBefore=350] ms before starting the next phrase
 */
export function useTypewriter(words, options = {}) {
  const {
    typeSpeed = 75,
    deleteSpeed = 35,
    pauseAfter = 1600,
    pauseBefore = 350
  } = options

  const output = ref('')
  const wordList = computed(() => unref(words) ?? [])

  let timer = null
  let wordIndex = 0
  let charIndex = 0
  let deleting = false

  function tick() {
    const list = wordList.value
    if (!list.length) return

    const current = list[wordIndex % list.length]

    if (!deleting) {
      charIndex++
      output.value = current.slice(0, charIndex)
      if (charIndex === current.length) {
        deleting = true
        timer = setTimeout(tick, pauseAfter)
        return
      }
      timer = setTimeout(tick, typeSpeed)
    } else {
      charIndex--
      output.value = current.slice(0, charIndex)
      if (charIndex === 0) {
        deleting = false
        wordIndex++
        timer = setTimeout(tick, pauseBefore)
        return
      }
      timer = setTimeout(tick, deleteSpeed)
    }
  }

  onMounted(() => {
    // Respect users who prefer reduced motion — just show the first phrase.
    const reduce = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      output.value = wordList.value[0] ?? ''
      return
    }
    timer = setTimeout(tick, pauseBefore)
  })

  onBeforeUnmount(() => clearTimeout(timer))

  return { output }
}
