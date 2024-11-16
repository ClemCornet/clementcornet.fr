<template>
  <UContainer
    :ui="{
      base: 'flex items-center flex-1',
      constrained: 'max-w-5xl',
      padding: 'px-4 sm:px-6 lg:px-0',
    }"
  >
    <main class="mx-auto grid grid-cols-2 gap-20">
      <HomeImage />
      <div class="flex flex-1 flex-col justify-start py-8">
        <h1 class="mb-12 text-4xl font-bold">
          Hello there.
        </h1>
        <p class="text-md pb-4 font-light">
          I'm <span class="font-bold">Clement</span>, front-end developer who enjoy creating
          <br><span class="font-bold">user interfaces.</span>
        </p>
        <div class="mb-16 flex items-center">
          <p class="text-md mr-1.5 font-light">
            Some of my favorite <span class="font-bold">tools</span> include
          </p>
          <UIcon
            class="mr-1.5 size-5"
            name="i-logos-vue"
          />
          <UIcon
            class="mr-1.5 size-5"
            name="i-logos-nuxt-icon"
          />
          <UIcon
            class="mr-1.5 size-5"
            name="i-logos-react"
          />
          <UIcon
            class="mr-1.5 size-5"
            name="i-logos-tailwindcss-icon"
          />
        </div>
        <HomeBlogFeatured />
      </div>
    </main>
  </UContainer>
</template>
