import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(async () => {
  const storage = useStorage()
  const config = useRuntimeConfig()

  const driver = redisDriver({
    base: 'redis',
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    username: config.redis.username,
    db: 0,
  })

  storage.mount('redis', driver)
  const redis = useStorage('redis')
  await redis.setItem('views', [
    { id: 'how-to-create-array', count: 3 },
    { id: 'load-images-with-blur', count: 12 },
    { id: 'updating-page-instantly', count: 0 },
    { id: 'how-to-setup-redis', count: 22 },
  ])
})
