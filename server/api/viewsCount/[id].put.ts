export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') as string
  const body = await readBody(event)
  const { views } = body
  const redis = useStorage('redis')
  try {
    await redis.setItem(id, Number(views) + 1)

    return { success: true }
  }
  catch {
    throw createError({
      statusCode: 404,
      message: 'Failed to set view count',
    })
  }
})
