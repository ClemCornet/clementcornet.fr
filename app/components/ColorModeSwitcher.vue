<script lang="ts" setup>
defineEmits<{
  toggleTheme: []
}>()
</script>

<template>
  <UTooltip
    text="Toggle color mode"
    :shortcuts="['t']"
    color="gray"
  >
    <UButton
      :icon="$colorMode.value === 'light' ? `iconoir:sun-light` : `iconoir:half-moon`"
      size="sm"
      color="white"
      variant="solid"
      @click="$emit('toggleTheme')"
    />
  </UTooltip>
</template>
