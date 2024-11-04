import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	scripts: [
		{
			type: 'module',
			src: '/src/scripts/nav.js'
		}
	]
});
