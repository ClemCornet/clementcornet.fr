<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply bg-gray-100/40 text-gray-800;
}

.dark {
  body {
    @apply bg-slate-800/40 text-gray-100;
  }
}
</style>
