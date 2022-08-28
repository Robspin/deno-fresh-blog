import { IS_BROWSER } from "$fresh/runtime.ts"
import { Configuration, setup } from "twind"
export * from "twind"

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        sans: 'lato, sans-serif',
        sora: 'Sora',
      }
    }
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Lato:ital,wght@0,400;0,700;1,400&display=swap')`
  }
};
if (IS_BROWSER) setup(config);
