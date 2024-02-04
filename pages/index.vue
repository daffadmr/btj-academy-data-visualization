<template>
  <div class="container min-h-[88.7vh] flex gap-5 flex-col justify-center items-center">
    <h1 class="text-5xl font-bold">BTJ Academy Data Visualization</h1>
    <p>Select one</p>
    <div class="flex gap-5">
      <NuxtLink
        class="py-2 px-5 rounded-md bg-slate-200 text-slate-700 hover:-translate-y-1 hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
        to="/basic">Basic Chart</NuxtLink>
      <NuxtLink
        class="py-2 px-5 rounded-md bg-slate-200 text-slate-700 hover:-translate-y-1 hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
        to="/advance">Advance Chart</NuxtLink>
      <NuxtLink
      class="py-2 px-5 rounded-md bg-slate-200 text-slate-700 hover:-translate-y-1 hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
      to="/data-kependudukan">Data Kependudukan Chart</NuxtLink>
  </div>
</div></template>