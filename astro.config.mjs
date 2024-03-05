import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/static'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://yang-porfolio.vercel.app',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
})
