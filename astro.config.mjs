import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://hidayatabisena.com',
	integrations: [mdx({
		components: {
			'Image': 'astro:assets'
		}
	}), sitemap()],
	scripts: [
		{
			type: 'module',
			src: '/src/scripts/nav.js'
		}
	]
});
