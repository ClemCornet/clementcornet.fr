<script lang="ts" setup>
const imgTransformer = useImage()
const image = ref('/assets/profile_picture.jpg')

const blurredImage = imgTransformer(image.value, { h: 1320, w: 920, blur: 12, q: 30 })
</script>

<template>
  <main class="mx-auto mt-24 grid size-full max-w-5xl grid-cols-2 gap-20">
    <div class="rounded-lg bg-gradient-to-t from-gray-100 to-gray-200 p-0.5 shadow-xl dark:from-neutral-500 dark:to-neutral-800">
      <NuxtImg
        :src="image"
        width="100%"
        :placeholder="blurredImage"
        loading="lazy"
        class="rounded-lg"
        @load="() => null"
      />
    </div>
    <div class="flex flex-1 flex-col justify-start py-8">
      <h1 class="mb-12 text-4xl font-bold">
        Hello there.
      </h1>
      <p class="pb-4 text-lg">
        I'm front-end developer who enjoy creating user interfaces.
      </p>
      <p class="text-lg">
        Some of my favorite tools include Vue, Nuxt, ReactNative, Jamstack, and Tailwind.
      </p>
    </div>
  </main>
</template>
