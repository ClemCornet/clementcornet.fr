import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import Icons from "unplugin-icons/vite"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
  vite: {
    plugins: [Icons({ compiler: "jsx", jsx: "react" })],
  },
})
