export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const keys = query.keys as string[]
  const redis = useStorage('redis')
  try {
    const allViews = await Promise.all(keys.map(async (key) => {
      const count = await redis.getItem(key)
      return { key, count }
    }))

    return { data: allViews }
  }
  catch {
    throw createError({
      statusCode: 404,
      message: 'Failed to retrieve all views',
    })
  }
})
