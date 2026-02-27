<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
        <!-- Header -->
        <header class="backdrop-blur-sm bg-gray-900/80 sticky top-0 z-50 border-b border-gray-700/50">
            <div class="flex items-center justify-between px-8 py-6">
                <NuxtLink :to="localePath('/')" class="flex items-center gap-4">
                    <div class="relative">
                        <img src="/profile-avatar.jpg"
                            class="w-12 h-12 rounded-full ring-2 ring-green-500/50 hover:ring-green-400 transition-all object-cover object-center" />
                        <div
                            class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900">
                        </div>
                    </div>
                    <div>
                        <h1
                            class="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Tanadon Inmano</h1>
                        <p class="text-xs text-gray-400">Full Stack Developer</p>
                    </div>
                </NuxtLink>

                <div class="flex items-center gap-6">
                    <nav class="hidden md:flex items-center gap-8">
                        <NuxtLink :to="localePath('/')"
                            class="hover:text-green-400 transition-colors relative group">
                            {{ $t('nav.home') }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </NuxtLink>
                        <NuxtLink :to="localePath('/about')"
                            class="hover:text-green-400 transition-colors relative group">
                            {{ $t('nav.about') }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </NuxtLink>
                        <NuxtLink :to="localePath('/') + '#projects'" class="hover:text-green-400 transition-colors relative group">
                            {{ $t('nav.projects') }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </NuxtLink>
                        <NuxtLink :to="localePath('/') + '#contact'" class="hover:text-green-400 transition-colors relative group">
                            {{ $t('nav.contact') }}
                            <span
                                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </NuxtLink>
                    </nav>

                    <!-- Language Switcher -->
                    <div class="flex items-center gap-1 bg-gray-800/80 rounded-full p-1 border border-gray-700/50">
                        <button v-for="loc in availableLocales" :key="loc.code"
                            @click="switchLocale(loc.code)"
                            :class="[
                                'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
                                locale === loc.code
                                    ? 'bg-green-500 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                            ]">
                            {{ loc.code === 'th' ? 'TH' : 'EN' }}
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-400 hover:text-white">
                        <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen"
                class="md:hidden border-t border-gray-700/50 px-8 py-4 flex flex-col gap-4 bg-gray-900/95">
                <NuxtLink :to="localePath('/')" @click="mobileMenuOpen = false"
                    class="hover:text-green-400 transition-colors">
                    {{ $t('nav.home') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/about')" @click="mobileMenuOpen = false"
                    class="hover:text-green-400 transition-colors">
                    {{ $t('nav.about') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#projects'" @click="mobileMenuOpen = false"
                    class="hover:text-green-400 transition-colors">
                    {{ $t('nav.projects') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/') + '#contact'" @click="mobileMenuOpen = false"
                    class="hover:text-green-400 transition-colors">
                    {{ $t('nav.contact') }}
                </NuxtLink>
            </div>
        </header>

        <!-- Page Content -->
        <main class="flex-1">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="border-t border-gray-700/50 py-8 px-8">
            <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-gray-500 text-sm">
                    &copy; {{ new Date().getFullYear() }} Tanadon Inmano. {{ $t('footer.rights') }}
                </p>
                <div class="flex items-center gap-4">
                    <a href="https://github.com/FramNaVer" target="_blank"
                        class="text-gray-500 hover:text-white transition-colors">
                        <i class="fa-brands fa-github text-lg"></i>
                    </a>
                    <a href="mailto:framnaver@gmail.com" class="text-gray-500 hover:text-white transition-colors">
                        <i class="fa-solid fa-envelope text-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
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
