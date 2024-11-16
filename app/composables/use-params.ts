import type { RouteParams } from 'vue-router'

export default function<T extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as T)
}
