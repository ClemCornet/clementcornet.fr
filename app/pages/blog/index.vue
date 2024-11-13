<script setup lang="ts">
import type { BlogPost, BlogCategories, Categories } from '~/types'

const selectedCategory = ref<Categories | 'all'>('all')
const [postsResult, categoriesResult] = await Promise.all([
  useAsyncData(
    'posts',
    () =>
      queryContent<BlogPost>('/blog')
        .where({
          label: {
            $contains: selectedCategory.value === 'all' ? undefined : selectedCategory.value,
          },
        })
        .sort({ date: -1 })
        .find(),
    {
      watch: [selectedCategory],
    },
  ),
  useAsyncData(
    'categories',
    () => queryContent<BlogCategories>('/categories').findOne(),
  ),
])
const { data: posts } = postsResult
const { data: categories } = categoriesResult

const queryKeys = computed(() => posts.value?.map(post => post.slug))
const { data: views } = await useFetch(`/api/viewsCount`, {
  params: { keys: queryKeys.value },
})

const postsWithViews = computed(() => {
  const viewsData = views.value?.data
  if (!posts.value || !viewsData) return []

  return posts.value.map((post) => {
    const views = viewsData.find(view => view.key === post.slug)?.count as number | undefined
    return {
      ...post,
      views: views || 0,
    }
  })
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
    <main>
      <div class="mb-12">
        <h1 class="mb-2 text-2xl font-semibold">
          Today I learned
        </h1>
        <p class="ml-1 text-sm text-gray-500 dark:text-gray-400">
          Let's dive in together! 🎢
        </p>
      </div>
      <BlogCategories
        v-if="categories"
        v-model="selectedCategory"
        :categories="categories"
      />
      <ul class="mt-6">
        <BlogCard
          v-for="post in postsWithViews"
          :key="post._id"
          :blog-post="post"
        />
      </ul>
    </main>
  </UContainer>
</template>
