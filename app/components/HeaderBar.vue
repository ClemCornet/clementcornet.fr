<script setup lang="ts">
const lang = ref<'en' | 'fr'>('en') // todo type with i18n locales
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
  <header
    class="
    relative
    py-4
    after:absolute
    after:bottom-0
    after:left-1/2
    after:h-[0.5px]
    after:w-screen
    after:-translate-x-1/2
    after:bg-neutral-200/30
    after:content-['']
  "
  >
    <nav class="flex items-center justify-between">
      <nuxt-link
        to="/"
        class="text-xl font-extrabold"
      >
        Clem C
      </nuxt-link>
      <div class="flex items-center">
        <nuxt-link
          to="/"
          class="mx-3 flex font-semibold hover:text-white"
        >
          <UIcon
            name="i-iconoir:edit"
            class="mr-1.5 size-5"
          />
          Blog
        </nuxt-link>
        <nuxt-link
          to="/"
          class="mx-3 flex font-semibold hover:text-white"
        >
          <UIcon
            name="i-iconoir:user-bag"
            class="mr-1.5 size-5"
          />
          Resume
        </nuxt-link>
        <div class="ml-8 flex gap-2">
          <ColorModeSwitcher @toggle-theme="toggleTheme" />
          <LangSwitcher
            :lang="lang"
            @change-locale="changeLocale"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
