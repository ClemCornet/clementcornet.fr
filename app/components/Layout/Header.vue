<script setup lang="ts">
const links = [{
  name: 'blog',
  text: 'Blog',
  icon: 'i-iconoir-edit',
},
{
  name: 'resume',
  text: 'Resume',
  icon: 'i-iconoir-user-bag',
}]

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
      active-class="text-gray-800 dark:text-gray-100"
      class="text-xl font-extrabold"
      to="/"
    >
      Clem C
    </nuxt-link>
    <nav class="flex items-center justify-between">
      <ULink
        v-for="link in links"
        :key="link.name"
        active-class="text-gray-800 dark:text-gray-100"
        class="mr-4 flex items-center"
        icon="i-iconoir-edit"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        :to="{ name: link.name }"
      >
        <UIcon
          class="mr-1 size-4"
          :name="link.icon"
        />
        {{ link.text }}
      </ULink>
      <div class="ml-6 flex gap-2">
        <ColorModeSwitcher @toggle-theme="toggleTheme" />
        <LangSwitcher
          :lang="lang"
          @change-locale="changeLocale"
        />
      </div>
    </nav>
  </UContainer>
</template>
