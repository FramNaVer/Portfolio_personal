<template>
    <div>
        <!-- About Hero -->
        <section class="px-8 py-16">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <!-- Profile Image -->
                    <div class="flex-shrink-0">
                        <img src="/profile-avatar.jpg"
                            class="w-48 h-48 rounded-2xl ring-4 ring-green-500/30 object-cover object-center shadow-2xl shadow-green-500/10" />
                    </div>

                    <!-- Bio -->
                    <div>
                        <h1
                            class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            {{ $t('about.title') }}
                        </h1>
                        <p class="text-lg text-gray-300 leading-relaxed mb-4">
                            {{ $t('about.bio1', { name: 'ธนดล อิ่นมะโน (Tanadon Inmano)' }) }}
                        </p>
                        <p class="text-gray-400 leading-relaxed mb-6">
                            {{ $t('about.bio2') }}
                        </p>
                        <a href="/resume.pdf" download
                            class="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <i class="fa-solid fa-download"></i>
                            {{ $t('about.downloadResume') }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="px-8 py-12">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-white">
                    <i class="fa-solid fa-graduation-cap text-green-400 mr-3"></i>{{ $t('about.education') }}
                </h2>

                <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8">
                    <div class="flex items-start gap-4">
                        <div
                            class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-university text-green-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">{{ $t('about.university') }}</h3>
                            <p class="text-green-400 font-medium">{{ $t('about.major') }}</p>
                            <p class="text-gray-400 text-sm mt-1">{{ $t('about.year') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What I Do -->
        <section class="px-8 py-12">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-white">
                    <i class="fa-solid fa-rocket text-blue-400 mr-3"></i>{{ $t('about.whatIDo') }}
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-green-500/30 transition-all duration-300">
                        <i class="fa-solid fa-code text-3xl text-green-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">{{ $t('about.fullstack') }}</h3>
                        <p class="text-gray-400 text-sm">{{ $t('about.fullstackDesc') }}</p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-blue-500/30 transition-all duration-300">
                        <i class="fa-solid fa-brain text-3xl text-blue-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">{{ $t('about.ai') }}</h3>
                        <p class="text-gray-400 text-sm">{{ $t('about.aiDesc') }}</p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-purple-500/30 transition-all duration-300">
                        <i class="fa-solid fa-palette text-3xl text-purple-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">{{ $t('about.uiux') }}</h3>
                        <p class="text-gray-400 text-sm">{{ $t('about.uiuxDesc') }}</p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-cyan-500/30 transition-all duration-300">
                        <i class="fa-solid fa-server text-3xl text-cyan-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">{{ $t('about.devops') }}</h3>
                        <p class="text-gray-400 text-sm">{{ $t('about.devopsDesc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="px-8 py-16 text-center">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-3xl font-bold text-white mb-4">{{ $t('about.cta') }}</h2>
                <p class="text-gray-400 mb-8">{{ $t('about.ctaDesc') }}</p>
                <div class="flex justify-center gap-4">
                    <NuxtLink :to="localePath('/') + '#contact'"
                        class="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {{ $t('hero.contactMe') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/') + '#projects'"
                        class="border border-gray-600 hover:border-green-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-500/10">
                        {{ $t('about.viewProjects') }}
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
    title: () => t('seo.aboutTitle'),
    meta: [
        { name: 'description', content: () => t('seo.aboutDescription') }
    ]
})
</script>
