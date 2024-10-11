import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  rules: {
    'no-console': 'warn',
    'max-params': [
      'error',
      {
        max: 2,
      },
    ],
  },
},
...tailwind.configs['flat/recommended'],
).prepend({
  rules: {
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-empty-component-block': 'error',
  },
}).override('nuxt/vue/rules', {
  rules: {
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'styles'],
      },
    ],
  },
})
