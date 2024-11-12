<script lang="ts" setup>
defineProps<{
  lang: string
}>()
defineEmits<{
  changeLocale: []
}>()
</script>

<template>
  <UTooltip
    color="gray"
    :shortcuts="['l']"
    text="Toggle lang"
  >
    <UButton
      color="white"
      size="sm"
      variant="solid"
      @click="$emit('changeLocale')"
    >
      {{ lang.toUpperCase() }}
    </UButton>
  </UTooltip>
</template>
