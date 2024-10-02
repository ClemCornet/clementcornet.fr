<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="flex justify-between">
      <div>
        <nuxt-link
          to="/"
          class="text-xl font-bold"
        >
          Nuxt.js
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/about">
          <UButton
            icon="i-heroicons-pencil-square"
            size="sm"
            color="gray"
            variant="outline"
          />
        </nuxt-link>
        <nuxt-link to="/contact">
          <UButton
            icon="i-heroicons-pencil-square"
            size="sm"
            color="gray"
            square
            variant="outline"
          />
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
