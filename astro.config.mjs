import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      // Icons({
      //   compiler: "astro",
      // }),
      Icons({ compiler: "jsx", jsx: "react" }),
    ],
  },
});
