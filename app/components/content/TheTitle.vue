<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>

<template>
  <h2
    :id="id"
    class="my-6 text-2xl font-medium"
  >
    <a :href="`#${id}`">
      <slot />
    </a>
  </h2>
</template>
