<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <!-- Vue.js -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i class="fab fa-vuejs text-4xl text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Vue.js</h3>
        <span class="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
      </div>
    </div>

    <!-- Nuxt.js -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fas fa-mountain text-4xl text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Nuxt.js</h3>
        <span class="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
      </div>
    </div>

    <!-- Python -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fab fa-python text-4xl text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Python</h3>
        <span class="bg-blue-600/20 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
      </div>
    </div>

    <!-- ASP.NET -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fas fa-server text-4xl text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">ASP.NET</h3>
        <span class="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
      </div>
    </div>

    <!-- C# -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fas fa-hashtag text-4xl text-violet-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">C#</h3>
        <span class="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
      </div>
    </div>

    <!-- Go (Golang) -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fa-brands fa-golang text-4xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Golang</h3>
        <span class="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
      </div>
    </div>

    <!-- JavaScript -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fab fa-js-square text-4xl text-sky-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">JavaScript</h3>
        <span class="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
      </div>
    </div>

    <!-- HTML -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i class="fab fa-html5 text-4xl text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">HTML</h3>
        <span class="bg-blue-700/20 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Expert</span>
      </div>
    </div>

    <!-- CSS -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fab fa-css3-alt text-4xl text-indigo-500 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">CSS</h3>
        <span class="bg-indigo-600/20 text-indigo-500 px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
      </div>
    </div>

    <!-- Express js  -->
    <div
      class="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
      <div class="text-center">
        <i
          class="fas fa-server text-4xl text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Express.js</h3>
        <span class="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
      </div>
    </div>

  </div>
</template>

<script setup>
// ไม่จำเป็นต้องมี props เพราะเป็น static content
</script>

<style scoped>
/* Additional hover effects */
.group:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Glow effect on hover */
.group:hover i {
  filter: drop-shadow(0 0 8px currentColor);
}
</style>
