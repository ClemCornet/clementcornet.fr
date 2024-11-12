<script setup lang="ts">
const links = [{
  name: 'index',
  text: 'Home',
},
{
  name: 'blog',
  text: 'Blog',
},
{
  name: 'resume',
  text: 'Resume',
}]

const socials = [
  {
    name: 'X',
    url: 'https://x.com/clemcornet',
  },
  {
    name: 'Github',
    url: 'https://github.com/clemcornet',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/clem-cornet',
  }]
</script>

<template>
  <footer
    class="
    relative
    py-4
    after:absolute
    after:left-1/2
    after:top-0
    after:h-[0.5px]
    after:w-full
    after:-translate-x-1/2
    after:bg-neutral-600/40
    after:content-['']
    dark:after:bg-neutral-200/30"
  >
    <div class="flex justify-between py-4">
      <div class="flex flex-1 flex-col">
        <nav class="mb-2 w-1/3">
          <ol class="flex justify-between">
            <ULink
              v-for="link in links"
              :key="link.name"
              active-class="text-gray-800 dark:text-gray-100"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              :to="{ name: link.name }"
            >
              {{ link.text }}
            </ULink>
          </ol>
        </nav>
        <p class="text-sm text-gray-400 dark:text-gray-500">
          Currently offline
        </p>
      </div>
      <div class="flex flex-1 flex-col items-end">
        <nav class="mb-2 w-1/3">
          <ol class="flex justify-between">
            <ULink
              v-for="link in socials"
              :key="link.name"
              active-class="text-gray-800 dark:text-gray-100"
              external
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              :to="link.url"
            >
              {{ link.name }}
            </ULink>
          </ol>
        </nav>
        <p class="text-sm text-neutral-500">
          © 2024 Clément Cornet.
        </p>
      </div>
    </div>
  </footer>
</template>
