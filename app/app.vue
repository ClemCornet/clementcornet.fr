<template>
  <UContainer :ui="{ constrained: 'max-w-5xl' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>

<style lang="postcss">
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  @apply bg-gray-100/30 text-gray-800;
}
.dark body {
  @apply bg-gray-800/30 text-gray-200;
}
</style>
