import { defineConfig, fontProviders } from "astro/config";
import license from "rollup-plugin-license";

const OUT_DIR = "./dist";
const fontSource = fontProviders.fontsource();

// https://astro.build/config
export default defineConfig({
  site: "https://ssbit01.github.io",

  output: "static",

  root: ".",

  srcDir: "./src",

  publicDir: "./public",

  outDir: OUT_DIR,

  compressHTML: true,

  security: {
    checkOrigin: true,
    /**
     * Astro by default only sets script-src and style-src in the HTML.
     */
    csp: {
      directives: [
        "base-uri 'self'",
        "connect-src 'self' blob:",
        "frame-src 'self'",
        "font-src 'self' data:",
        "form-action 'self'",
        "img-src 'self' blob: data: https://avatars.githubusercontent.com",
        "object-src 'none'",
        "upgrade-insecure-requests"
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-inline'"]
      }
    }
  },

  build: {
    inlineStylesheets: "never"
  },

  vite: {
    plugins: [
      license({
        sourcemap: false,
        thirdParty: {
          includePrivate: true,
          includeSelf: true,
          multipleVersions: true,
          output: {
            file: OUT_DIR + "/LICENSES/DEPENDENCIES.txt",
            encoding: "utf-8"
          }
        }
      })
    ]
  },

  fonts: [
    {
      provider: fontSource,
      name: "Jura",
      cssVariable: "--font-jura",
      weights: [400, 500],
      subsets: ["latin"]
    }
  ]
});
