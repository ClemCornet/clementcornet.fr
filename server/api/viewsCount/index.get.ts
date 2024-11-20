export default defineEventHandler(async (_event) => {
  const redis = useStorage('redis')
  const keys = await redis.getKeys()

  try {
    const allViews = await Promise.all(keys.map(async (key) => {
      const count = await redis.getItem<number>(key)
      return { key, count }
    }))

    return allViews
  }
  catch {
    throw createError({
      statusCode: 404,
      message: 'Failed to retrieve all views',
    })
  }
})
