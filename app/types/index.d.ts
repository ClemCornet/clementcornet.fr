import type { ParsedContent } from '@nuxt/content'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  label: string[]
  slug: string
}

export type Categories = 'nuxt' | 'typescript' | 'css' | 'lifestyle'

export interface BlogCategories extends ParsedContent {
  categories: Array<Categories>
}

export interface Views {
  key: string
  count: number
}
