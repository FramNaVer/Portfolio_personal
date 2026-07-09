// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      title: 'Tanadon Inmano — Full Stack Developer',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://tanadon-i.com' }
      ],
      meta: [
        { name: 'description', content: 'Full Stack Developer & AI/ML Enthusiast based in Chiang Mai, Thailand. Open to new opportunities.' },
        // Open Graph (Facebook, LINE, LinkedIn, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Tanadon Inmano' },
        { property: 'og:title', content: 'Tanadon Inmano — Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Developer & AI/ML Enthusiast based in Chiang Mai, Thailand. Open to new opportunities.' },
        { property: 'og:url', content: 'https://tanadon-i.com' },
        // TODO: swap to a dedicated 1200×630 /og-image.png for a proper wide preview
        { property: 'og:image', content: 'https://tanadon-i.com/profile.png' },
        { property: 'og:image:alt', content: 'Tanadon Inmano — Full Stack Developer' },
        { property: 'og:locale', content: 'th_TH' },
        { property: 'og:locale:alternate', content: 'en_US' },
        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tanadon Inmano — Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer & AI/ML Enthusiast based in Chiang Mai, Thailand.' },
        { name: 'twitter:image', content: 'https://tanadon-i.com/profile.png' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/motion.css'
  ],
  i18n: {
    locales: [
      { code: 'th', name: 'ไทย', file: 'th.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'th',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
