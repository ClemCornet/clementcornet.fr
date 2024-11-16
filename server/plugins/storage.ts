import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(async () => {
  const storage = useStorage()

  const driver = redisDriver({
    base: 'redis',
    host: useRuntimeConfig().redis.host,
    port: useRuntimeConfig().redis.port,
    password: useRuntimeConfig().redis.password,
    username: useRuntimeConfig().redis.username,
    db: 0,
  })

  storage.mount('redis', driver)
})
