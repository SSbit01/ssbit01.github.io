import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"


// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    compress()
  ],
  site: "https://ssbit01.github.io"
})