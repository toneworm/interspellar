import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      // these are the aliases and paths to them
      '@store': path.resolve('src/lib/store/'),
      // "@lib": path.resolve("./src/lib"),
      // "@utils": path.resolve("./src/lib/utils"),
    },
    adapter: adapter(),
    // If you have a custom `src` or `src/routes` directory, uncomment and update the following line:
    files: {
      routes: 'src/routes',
    },
  },
}

export default config
