/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
	include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx,astro}'],
	exclude: [
		'**/node_modules/**',
		'**/dist/**',
		'**/cypress/**',
		'**/.{idea,git,cache,output,temp}/**',
		'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,astro}.config.*',
	],
	plugins: [
		{
			// name: 'a-vitest-plugin-that-changes-config',
			// config: () => ({
			//   test: {
			//   },
			// }),
		},
	],
	test: {
		globals: true,
		setupFiles: 'src/setupTests.mjs',
		globalSetup: [],
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
});
