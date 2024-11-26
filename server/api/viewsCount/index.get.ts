export default defineEventHandler(async (_event) => {
  const redis = useStorage('redis')
  try {
    const articles = await redis.getItem<Array<{ id: string, count: number }>>('views')

    return { data: articles }
  }
  catch {
    throw createError({
      statusCode: 404,
      message: 'Failed to retrieve all views',
    })
  }
})
