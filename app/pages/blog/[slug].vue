<script setup lang="ts">
const params = useParams<{ slug: string }>()
const { data } = await useFetch(`/api/viewsCount/${params.value.slug}`)
await useFetch(`/api/viewsCount/${params.value.slug}`, {
  method: 'PUT',
  body: { views: data.value?.count },
})
</script>

<template>
  <UContainer
    :ui="{
      base: 'w-full flex-1',
      constrained: 'max-w-2xl',
      padding: 'py-12 px-4 sm:px-6 lg:px-0',
    }"
  >
    <header>
      <div class="flex items-center">
        <UIcon
          class="mr-0.5 size-5"
          name="i-iconoir-eye-empty"
        />
        <span>{{ data?.count }}</span>
      </div>
    </header>
    <main>
      <ContentDoc />
    </main>
  </UContainer>
</template>
