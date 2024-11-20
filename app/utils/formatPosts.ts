import type { BlogPost, Views } from '~/types'

export const formatPostsWithViews = (
  {
    posts,
    views,
  }: {
    posts: BlogPost[]
    views?: Views[]
  }) => {
  return posts.map((post) => {
    const view = views?.find(view => view.key === post.slug)
    return {
      ...post,
      views: view?.count || 0,
    }
  })
}
