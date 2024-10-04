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
    text="Toggle lang"
    :shortcuts="['l']"
    color="gray"
  >
    <UButton
      size="sm"
      color="white"
      variant="solid"
      @click="$emit('changeLocale')"
    >
      {{ lang.toUpperCase() }}
    </UButton>
  </UTooltip>
</template>
