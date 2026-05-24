<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

    <!-- ─── Sidebar (Desktop) ─── -->
    <aside class="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-56 border-r border-gray-700/50 bg-gray-900/90 backdrop-blur-sm z-50">

      <!-- Profile block -->
      <div class="p-5 border-b border-gray-700/50">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
          <div class="relative flex-shrink-0">
            <img src="/profile-avatar.jpg"
              class="w-10 h-10 rounded-full ring-2 ring-green-500/40 group-hover:ring-green-400/70 transition-all object-cover object-center" />
            <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div class="min-w-0">
            <p class="text-sm font-bold text-white leading-none truncate">Tanadon Inmano</p>
            <p class="text-xs font-mono text-gray-600 tracking-widest uppercase mt-0.5">Portfolio v1.0</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 overflow-y-auto">
        <p class="text-xs font-mono text-gray-700 tracking-widest uppercase mb-2 px-3">Navigation</p>
        <div class="flex flex-col gap-0.5">
          <NuxtLink :to="localePath('/')"
            class="flex items-center gap-2.5 px-3 py-2 text-sm font-mono text-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            :class="{ 'text-green-400 bg-gray-800/40': $route.path === localePath('/') }">
            <div class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-green-400 transition-colors"
              :class="{ 'bg-green-400': $route.path === localePath('/') }"></div>
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')"
            class="flex items-center gap-2.5 px-3 py-2 text-sm font-mono text-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            :class="{ 'text-green-400 bg-gray-800/40': $route.path === localePath('/about') }">
            <div class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-green-400 transition-colors"
              :class="{ 'bg-green-400': $route.path === localePath('/about') }"></div>
            {{ $t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')"
            class="flex items-center gap-2.5 px-3 py-2 text-sm font-mono text-gray-500 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            :class="{ 'text-yellow-400 bg-gray-800/40': $route.path === localePath('/projects') }">
            <div class="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-yellow-400 transition-colors"
              :class="{ 'bg-yellow-400': $route.path === localePath('/projects') }"></div>
            {{ $t('nav.projects') }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Bottom: Language + Social + Status -->
      <div class="p-4 border-t border-gray-700/50 space-y-3">

        <!-- Language switcher -->
        <div class="flex gap-1">
          <button v-for="loc in availableLocales" :key="loc.code"
            @click="switchLocale(loc.code)"
            :class="[
              'flex-1 py-1.5 text-xs font-mono font-semibold transition-all duration-200 border',
              locale === loc.code
                ? 'bg-green-500/15 text-green-400 border-green-500/40'
                : 'text-gray-600 border-gray-700/40 hover:text-gray-400 hover:border-gray-600/60'
            ]">
            {{ loc.code.toUpperCase() }}
          </button>
        </div>

        <!-- Social + Status -->
        <div class="flex items-center justify-between">
          <div class="flex gap-3">
            <a href="https://github.com/FramNaVer" target="_blank"
              class="text-gray-600 hover:text-white transition-colors">
              <i class="fa-brands fa-github text-sm"></i>
            </a>
            <a href="mailto:framnaver@gmail.com" class="text-gray-600 hover:text-white transition-colors">
              <i class="fa-solid fa-envelope text-sm"></i>
            </a>
          </div>
          <div class="flex items-center gap-1.5">
            <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-xs font-mono text-green-400">{{ $t('operator.active') }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- ─── Mobile Top Bar ─── -->
    <header
      class="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50 bg-gray-900/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
        <div class="relative">
          <img src="/profile-avatar.jpg" class="w-8 h-8 rounded-full ring-2 ring-green-500/40 object-cover object-center" />
          <div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
        </div>
        <span class="text-sm font-bold text-white">Tanadon Inmano</span>
      </NuxtLink>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-400 hover:text-white p-1 transition-colors">
        <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-lg"></i>
      </button>
    </header>

    <!-- ─── Mobile Drawer ─── -->
    <Transition name="drawer">
      <div v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 z-40 bg-gray-900/98 backdrop-blur-sm pt-16 flex flex-col">
        <div class="px-6 py-6 flex flex-col gap-1.5">
          <NuxtLink :to="localePath('/')" @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white border border-gray-700/50 hover:border-green-500/30 transition-all">
            <div class="w-2 h-2 rounded-full bg-green-400"></div>
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white border border-gray-700/50 hover:border-green-500/30 transition-all">
            <div class="w-2 h-2 rounded-full bg-gray-600"></div>
            {{ $t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white border border-gray-700/50 hover:border-yellow-500/30 transition-all">
            <div class="w-2 h-2 rounded-full bg-gray-600"></div>
            {{ $t('nav.projects') }}
          </NuxtLink>
          <div class="flex gap-2 mt-4">
            <button v-for="loc in availableLocales" :key="loc.code"
              @click="switchLocale(loc.code); mobileMenuOpen = false"
              :class="[
                'flex-1 py-2 text-xs font-mono font-semibold transition-all border',
                locale === loc.code
                  ? 'bg-green-500/15 text-green-400 border-green-500/40'
                  : 'text-gray-600 border-gray-700/40'
              ]">
              {{ loc.code.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ─── Main Content (offset for sidebar on desktop) ─── -->
    <div class="lg:ml-56 flex flex-col min-h-screen">
      <main class="flex-1 pt-14 lg:pt-0 pb-12">
        <slot />
      </main>

      <!-- System Footer -->
      <footer class="border-t border-gray-700/50 py-4 px-6">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div class="flex items-center gap-3 font-mono text-xs text-gray-700">
            <span class="hover:text-gray-500 transition-colors cursor-default">FULLSTACK</span>
            <span>•</span>
            <span class="hover:text-gray-500 transition-colors cursor-default">AI-NATIVE</span>
            <span>•</span>
            <span class="hover:text-gray-500 transition-colors cursor-default">DEVOPS</span>
          </div>
          <p class="text-gray-700 text-xs font-mono">
            &copy; {{ new Date().getFullYear() }} TANADON INMANO
          </p>
          <span class="text-gray-700 text-xs font-mono">VERSION 1.0</span>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const mobileMenuOpen = ref(false)

const availableLocales = computed(() =>
  locales.value.filter(l => typeof l === 'object')
)

function switchLocale(code) {
  setLocale(code)
}
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
</style>
