import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

import { remarkReadingTime } from './src/utils/frontmatter.js';
import Inspect from 'vite-plugin-inspect';

import { SITE } from './src/config.mjs';
import critters from 'astro-critters';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,
	trailingSlash: SITE.trailingSlash ? 'always' : 'never',

	output: 'static',

	integrations: [
		tailwind({
			config: {
				path: './tailwind.config.cjs',
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		mdx(),

		/* Disable this integration if you don't use Google Analytics (or other external script). */
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		critters({
			path: './dist',
			logger: 'debug',
			logLevel: 'debug',
			compress: true,
			pruneSource: true,
			preload: 'swap',
			inlineFonts: true,
			keyframes: 'critical',
		}),
	],
	/* this is an extension of mdx - a message says that the mdx call should be removed it causes issues. as does removing the extension - images wont build from blog files */
	markdown: {
		remarkPlugins: [remarkReadingTime],
		extendDefaultPlugins: true,
	},

	vite: {
		plugins: [Inspect()],
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
				'@src': path.resolve(__dirname, 'src/'),
				'@pkg': path.resolve(__dirname, './node_modules'),
			},
		},
	},
});
