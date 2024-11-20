<script setup lang="ts">
import type { BlogPost, BlogCategories, Categories, Views } from '~/types'

const selectedCategory = ref<Categories | 'all'>('all')
const { data: views } = await useFetch<Views[]>(`/api/viewsCount`)
const [postsResult, categoriesResult] = await Promise.all([
  useAsyncData(() =>
    queryContent<BlogPost>('/blog')
      .where({
        label: {
          $contains: selectedCategory.value === 'all' ? undefined : selectedCategory.value,
        },
      })
      .sort({ date: -1 })
      .find(),
  {
    transform(input) {
      return formatPostsWithViews({ posts: input, views: views.value })
    },
    watch: [selectedCategory],
  },
  ),
  useAsyncData(
    () => queryContent<BlogCategories>('/categories').findOne(),
  ),
])

const { data: posts } = postsResult
const { data: categories } = categoriesResult
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
          v-for="post in posts"
          :key="post._id"
          :blog-post="post"
        />
      </ul>
    </main>
  </UContainer>
</template>
