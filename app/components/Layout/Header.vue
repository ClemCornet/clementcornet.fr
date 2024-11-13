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
    after:bg-neutral-600/40
    after:content-['']
    dark:after:bg-neutral-200/30
  "
  >
    <nav class="flex items-center justify-between">
      <nuxt-link
        class="text-xl font-extrabold"
        to="/"
      >
        Clem C
      </nuxt-link>
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
  </header>
</template>
