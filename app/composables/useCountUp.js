/**
 * Animates a number from 0 up to a target value. The target can be a ref that
 * resolves asynchronously (e.g. after a GitHub fetch) — the count-up restarts
 * whenever the target changes to a positive value.
 *
 * The animation only ever runs on the client, kicked off in onMounted, so the
 * server and the first client paint both render 0 (no hydration mismatch /
 * no 12 → 0 → 12 flicker).
 *
 * @param {number|import('vue').Ref<number>} target  final value to count to
 * @param {object} [options]
 * @param {number} [options.duration=1200] animation length in ms
 * @returns {{ value: import('vue').Ref<number>, ready: import('vue').Ref<boolean> }}
 *   `value` is the animated number; `ready` is false until the target is known.
 */
export function useCountUp(target, options = {}) {
  const { duration = 1200 } = options

  const targetRef = computed(() => Number(unref(target)) || 0)
  const value = ref(0)
  const ready = computed(() => targetRef.value > 0)

  let raf = null
  let mounted = false

  function animate(end) {
    cancelAnimationFrame(raf)

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      value.value = end
      return
    }

    const from = value.value
    const start = performance.now()

    function step(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      value.value = Math.round(from + (end - from) * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
  }

  // Re-run whenever the target changes (e.g. async GitHub data lands), but only
  // animate once we're mounted on the client.
  watch(targetRef, (end) => {
    if (mounted && end > 0) animate(end)
  })

  onMounted(() => {
    mounted = true
    if (targetRef.value > 0) animate(targetRef.value)
  })

  onBeforeUnmount(() => cancelAnimationFrame(raf))

  return { value, ready }
}
