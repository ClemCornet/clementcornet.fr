export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') as string
  const redis = useStorage('redis')
  try {
    let count = await redis.getItem<number>(id)

    if (count === null) {
      count = 1
      await redis.setItem(id, count)
    }

    return count
  }
  catch {
    throw createError({
      statusCode: 404,
      message: 'Failed to retrieve view count',
    })
  }
})
