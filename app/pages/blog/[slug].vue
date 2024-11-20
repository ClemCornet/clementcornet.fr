<script setup lang="ts">
import type { BlogPost } from '~/types'

const params = useParams<{ slug: string }>()
const { data: post, status: postStatus } = await useAsyncData(() =>
  queryContent<BlogPost>(`/blog/${params.value.slug}`)
    .findOne(),
)

const { data: viewsCount, status: viewsStatus } = await useFetch(`/api/viewsCount/${params.value.slug}`)
await useFetch(`/api/viewsCount/${params.value.slug}`, {
  method: 'PUT',
  body: { views: viewsCount.value },
})

const isArticleLoading = computed(() => {
  return postStatus.value === 'pending' && viewsStatus.value === 'pending'
})
</script>

<template>
  <UContainer
    :ui="{
      base: 'w-full flex-1',
      constrained: 'max-w-xl',
      padding: 'py-12 px-4 sm:px-6 lg:px-0',
    }"
  >
    <div v-if="isArticleLoading">
      ...loading
    </div>
    <article v-else-if="post && viewsCount">
      <ArticleHeader
        :post="post"
        :views-count="viewsCount"
      />
      <main class="py-8">
        <ContentDoc class="content-md" />
      </main>
    </article>
  </UContainer>
</template>

<style lang="postcss">
.content-md {
  p {
    @apply mb-2;
  }
  .prose {
    @apply border border-neutral-200/30 rounded-xl p-4 text-sm;
  }
}
</style>
