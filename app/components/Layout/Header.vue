<script setup lang="ts">
const lang = ref<'en' | 'fr'>('en')
const changeLocale = () => {
  lang.value = lang.value === 'en' ? 'fr' : 'en'
}

const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

defineShortcuts({
  t: () => toggleTheme(),
  l: () => changeLocale(),
})
</script>

<template>
  <UContainer
    :ui="{
      base: `
      after:-translate-x-1/2
      after:absolute
      after:bg-neutral-600/40
      after:bottom-0
      after:content-['']
      after:h-[0.5px]
      after:left-1/2
      after:w-screen
      dark:after:bg-neutral-200/30
      flex
      justify-between
      py-4
      relative
      w-full
    `,
      constrained: 'max-w-5xl',
      padding: 'px-4 sm:px-6 lg:px-0',
    }"
  >
    <nuxt-link
      class="text-xl font-extrabold"
      to="/"
    >
      Clem C
    </nuxt-link>
    <nav class="flex items-center justify-between">
      <div class="flex items-center">
        <UButton
          color="gray"
          icon="i-iconoir-edit"
          :to="{ name: 'blog' }"
          variant="link"
        >
          Blog
        </UButton>
        <UButton
          color="gray"
          icon="i-iconoir-user-bag"
          :to="{ name: 'resume' }"
          variant="link"
        >
          Resume
        </UButton>
        <div class="ml-8 flex gap-2">
          <ColorModeSwitcher @toggle-theme="toggleTheme" />
          <LangSwitcher
            :lang="lang"
            @change-locale="changeLocale"
          />
        </div>
      </div>
    </nav>
  </UContainer>
</template>
