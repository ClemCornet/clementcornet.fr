export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') as string
  const redis = useStorage('redis')

  const articles = await redis.getItem<Array<{ id: string, count: number }>>('views')

  if (!articles) {
    throw createError({
      statusCode: 500,
      message: 'Failed to retrieve or update view count',
    })
  }
  else {
    const views = articles.find((item: { id: string }) => item.id === id)
    return views ? views.count : 0
  }
})
