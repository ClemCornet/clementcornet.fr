<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    modelValue: string
    name: string
    type?: 'text' | 'email' | 'password'
  }>(),
  {
    label: '',
    type: 'text',
  },
)
defineEmits<{
  'update:modelValue': [value: string]
}>()
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="flex flex-col">
    <label
      v-if="label"
      class="pb-1"
      :for="name"
    >{{ label }}</label>
    <input
      :type="type"
      class="rounded border border-gray-500 bg-gray-800 p-2 outline-none focus:border-2 focus:border-green-500"
      :value="modelValue"
      v-bind="$attrs"
      @input="
        (event) =>
          $emit('update:modelValue', (event.target as HTMLInputElement).value)
      "
    >
  </div>
</template>
