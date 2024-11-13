<template>
  <UContainer
    class="flex min-h-screen flex-col justify-between"
    :ui="{ constrained: 'max-w-5xl' }"
  >
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </UContainer>
</template>
