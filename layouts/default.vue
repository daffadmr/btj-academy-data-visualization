<template>
  <header class="bg-slate-700 text-white px-2 sm:px-0">
    <div class="container flex items-center gap-5 py-5">
      <h1 class="font-bold text-lg">
        <NuxtLink to="/"> BTJ Academy</NuxtLink>
      </h1>
      <nav class="flex gap-5">
        <NuxtLink class="px-5 py-2 rounded-lg hover:bg-slate-500 transition-all duration-200"
          :class="$route.name === 'basic' ? 'bg-slate-500' : null" to="/basic">Basic</NuxtLink>
        <NuxtLink class="px-5 py-2 rounded-lg hover:bg-slate-500 transition-all duration-200"
          :class="$route.name === 'advance' ? 'bg-slate-500' : null" to="/advance">Advance</NuxtLink>
        <NuxtLink class="px-5 py-2 rounded-lg hover:bg-slate-500 transition-all duration-200"
          :class="$route.name === 'data-kependudukan' ? 'bg-slate-500' : null" to="/data-kependudukan">Data Kependudukan
        </NuxtLink>
      </nav>
    </div>
  </header>
  <main class="py-5 bg-slate-100">
    <slot />
  </main>
</template>

<script setup>
useHead({
  title: 'BTJ Academy - Data Visualization',
  meta: [
    { name: 'description', content: 'Data Visualization Course by Mr. Haerul Mutakin' }
  ],
})
</script>