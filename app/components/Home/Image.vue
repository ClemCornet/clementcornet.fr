<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const imgTransformer = useImage()
const image = ref('/assets/profile_picture.jpg')

const blurredImage = imgTransformer(
  image.value,
  { h: 1320, w: 920, blur: 12, q: 30 },
)

const target = ref(null)
const { x: elementX, y: elementY } = useMouseInElement(target)
</script>

<template>
  <div
    ref="target"
    class="
    background-gradient
    group
    relative
    isolate
    flex
    flex-1
    flex-col
    rounded-lg
    shadow
    ring-1
    ring-slate-400
    before:absolute
    before:inset-[-2px]
    before:z-[-1]
    before:hidden
    before:size-[calc(100%+4px)]
    before:rounded-[13px]
    before:lg:block dark:ring-slate-800"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
  >
    <NuxtImg
      class="overflow-hidden rounded-lg"
      loading="lazy"
      :placeholder="blurredImage"
      :src="image"
      width="100%"
    />
  </div>
</template>

<style scoped>
.background-gradient::before {
  background: radial-gradient(450px circle at var(--x) var(--y),
      rgb(var(--color-primary-DEFAULT)) 0%,
      transparent 100%);
  will-change: background;
}
</style>
