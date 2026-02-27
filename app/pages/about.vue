<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <!-- Header (same as index) -->
        <header class="backdrop-blur-sm bg-gray-900/80 sticky top-0 z-50 border-b border-gray-700/50">
            <div class="flex items-center justify-between px-8 py-6">
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <img src="/Web_personal_profile.jpg"
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
                </div>
                <nav class="flex items-center gap-8">
                    <NuxtLink to="/" class="hover:text-green-400 transition-colors relative group">
                        Home
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </NuxtLink>
                    <NuxtLink to="/about" class="text-green-400 relative group">
                        About
                        <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400"></span>
                    </NuxtLink>
                    <NuxtLink to="/#projects" class="hover:text-green-400 transition-colors relative group">
                        Projects
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </NuxtLink>
                    <NuxtLink to="/#contact" class="hover:text-green-400 transition-colors relative group">
                        Contact
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </NuxtLink>
                </nav>
            </div>
        </header>

        <!-- About Hero -->
        <section class="px-8 py-16">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <!-- Profile Image -->
                    <div class="flex-shrink-0">
                        <img src="/Web_personal_profile.jpg"
                            class="w-48 h-48 rounded-2xl ring-4 ring-green-500/30 object-cover object-center shadow-2xl shadow-green-500/10" />
                    </div>

                    <!-- Bio -->
                    <div>
                        <h1
                            class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            About Me
                        </h1>
                        <p class="text-lg text-gray-300 leading-relaxed mb-4">
                            สวัสดีครับ ผม <span class="text-white font-semibold">ธนดล อิ่นมะโน (Tanadon Inmano)</span>
                            นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
                        </p>
                        <p class="text-gray-400 leading-relaxed">
                            ผมหลงใหลในงานพัฒนาเว็บไซต์แบบ Full Stack และการเทรนโมเดล AI
                            ชอบเรียนรู้เทคโนโลยีใหม่ๆ และนำมาประยุกต์ใช้ในโปรเจคจริง
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="px-8 py-12">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-white">
                    <i class="fa-solid fa-graduation-cap text-green-400 mr-3"></i>Education
                </h2>

                <div
                    class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8">
                    <div class="flex items-start gap-4">
                        <div
                            class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-university text-green-400 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">มหาวิทยาลัยแม่โจ้</h3>
                            <p class="text-green-400 font-medium">สาขาวิทยาการคอมพิวเตอร์</p>
                            <p class="text-gray-400 text-sm mt-1">นักศึกษาชั้นปีที่ 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What I Do -->
        <section class="px-8 py-12">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold mb-8 text-white">
                    <i class="fa-solid fa-rocket text-blue-400 mr-3"></i>What I Do
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-green-500/30 transition-all duration-300">
                        <i class="fa-solid fa-code text-3xl text-green-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">Full Stack Development</h3>
                        <p class="text-gray-400 text-sm">
                            พัฒนาเว็บแอปพลิเคชันตั้งแต่ Frontend ไปจนถึง Backend
                            ด้วย Vue.js, Nuxt, ASP.NET และ Express.js
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-blue-500/30 transition-all duration-300">
                        <i class="fa-solid fa-brain text-3xl text-blue-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">AI & Machine Learning</h3>
                        <p class="text-gray-400 text-sm">
                            สนใจด้านการเทรนโมเดล AI และนำ Machine Learning
                            มาใช้แก้ปัญหาจริง ด้วย Python
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-purple-500/30 transition-all duration-300">
                        <i class="fa-solid fa-palette text-3xl text-purple-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">UI/UX Design</h3>
                        <p class="text-gray-400 text-sm">
                            ออกแบบ UI/UX ด้วย Figma
                            เน้นสร้างประสบการณ์ผู้ใช้ที่ดีและสวยงาม
                        </p>
                    </div>

                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-cyan-500/30 transition-all duration-300">
                        <i class="fa-solid fa-server text-3xl text-cyan-400 mb-4"></i>
                        <h3 class="text-lg font-bold text-white mb-2">DevOps & Tools</h3>
                        <p class="text-gray-400 text-sm">
                            ใช้ Docker, Git, Swagger, Postman
                            ในกระบวนการพัฒนาและ deploy
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="px-8 py-16 text-center">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-3xl font-bold text-white mb-4">มาร่วมงานกันไหมครับ?</h2>
                <p class="text-gray-400 mb-8">ผมพร้อมเรียนรู้และร่วมสร้างสรรค์ผลงานใหม่ๆ เสมอ</p>
                <div class="flex justify-center gap-4">
                    <NuxtLink to="/#contact"
                        class="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Contact Me
                    </NuxtLink>
                    <NuxtLink to="/#projects"
                        class="border border-gray-600 hover:border-green-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-500/10">
                        View Projects
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="border-t border-gray-700/50 py-8 px-8">
            <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-gray-500 text-sm">&copy; {{ new Date().getFullYear() }} Tanadon Inmano. All rights
                    reserved.</p>
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
