import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import tailwind from 'eslint-plugin-tailwindcss'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
},
...tailwind.configs['flat/recommended'],
).override('nuxt/vue/rules', {
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 3,
      },
    }],
  },
})
