/**
 * v-reveal — scroll-triggered entrance directive.
 *
 * Elements start hidden (opacity 0, nudged down) and animate into place the
 * first time they scroll into view. Ideal for long pages where an on-mount
 * cascade would fire before the user reaches the content.
 *
 * Usage:
 *   <section v-reveal>...</section>
 *   <div v-reveal="{ delay: 120 }">...</div>   // stagger by 120ms
 *
 * The hidden state is emitted during SSR (getSSRProps) so there's no flash of
 * visible-then-hidden content on first paint. Respects prefers-reduced-motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  function resolveDelay(binding) {
    const v = binding.value
    if (typeof v === 'number') return v
    return v?.delay ?? 0
  }

  nuxtApp.vueApp.directive('reveal', {
    // Server render: ship the hidden class in the HTML so hydration matches.
    getSSRProps() {
      return { class: 'v-reveal' }
    },

    // Client: add the class before first paint to avoid a flash on SPA nav.
    beforeMount(el, binding) {
      el.classList.add('v-reveal')
      const delay = resolveDelay(binding)
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
    },

    mounted(el) {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      if (reduce || typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-visible')
        return
      }

      const obs = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

      obs.observe(el)
      el._revealObs = obs
    },

    unmounted(el) {
      el._revealObs?.disconnect()
    }
  })
})
