import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import tailwind from 'eslint-plugin-tailwindcss'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
},
...tailwind.configs['flat/recommended'],
)
