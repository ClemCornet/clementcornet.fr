<script lang="ts" setup>
defineEmits<{
  toggleTheme: []
}>()
</script>

<template>
  <UTooltip
    color="gray"
    :shortcuts="['t']"
    text="Toggle color mode"
  >
    <UButton
      color="white"
      :icon="$colorMode.value === 'light'
        ? `iconoir:sun-light` : `iconoir:half-moon`"
      size="sm"
      variant="solid"
      @click="$emit('toggleTheme')"
    />
  </UTooltip>
</template>
