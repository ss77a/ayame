const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const clamp = require('@tailwindcss/line-clamp');
const ratio = require('@tailwindcss/aspect-ratio');
const typog = require('@tailwindcss/typography');
const catppuccin = require('@catppuccin/tailwindcss');
const DaisyUI = require('daisyui');
const { variants } = require('@catppuccin/palette'); // can add labels
const fluidType = require('tailwindcss-fluid-type');
const contentPlaceholder = require('tailwind-content-placeholder');
const containerQuery = require('tailwindcss-container-query');
const gridAreas = require('@savvywombat/tailwindcss-grid-areas');
const gridLines = require('@savvywombat/tailwindcss-grid-named-lines');
const dynVariables = require('@mertasan/tailwindcss-variables');

const macchiato = variants.macchiato,
	mocha = variants.mocha,
	frappe = variants.frappe,
	latte = variants.latte;

// console.table(labels);
// console.table(variants);

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-100': '#4e869f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'primary-200': '#477a91', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'primary-300': '#45768d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'primary-400': '#365d6e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'primary-500': '#2d4c5b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'primary-600': '#16252c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'primary-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				primary: '#16252c',
				'secondary-100': '#777da8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'secondary-200': '#6c7198', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'secondary-300': '#696e94', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'secondary-400': '#525674', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'secondary-500': '#444760', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'secondary-600': '#21222e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'secondary-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				secondary: '#6c7198',
				// Color theme tokens at lightness of 100%, contrast of 110.00000000000001%
				bkgd: '#ffffff', //              'UI background color. All color contrasts evaluated and generated against this color.'
				'rosewater-100': '#8a7d7b', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'rosewater-200': '#7e716f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'rosewater-300': '#7a6e6c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'rosewater-400': '#605655', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'rosewater-500': '#4f4746', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'rosewater-600': '#262222', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'rosewater-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'flamingo-100': '#917a7a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'flamingo-200': '#846f6f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'flamingo-300': '#7f6c6c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'flamingo-400': '#645454', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'flamingo-500': '#524646', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'flamingo-600': '#282222', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'flamingo-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'mauve-100': '#8e74ad', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'mauve-200': '#816a9d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'mauve-300': '#7d6799', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'mauve-400': '#625078', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'mauve-500': '#514263', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'mauve-600': '#282030', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'mauve-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'red-100': '#b5687d', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'red-200': '#a55e72', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'red-300': '#a05b6f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'red-400': '#7d4857', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'red-500': '#673b48', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'red-600': '#321d23', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'red-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'maroon-100': '#a6717a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'maroon-200': '#97676e', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'maroon-300': '#92646b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'maroon-400': '#734e54', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'maroon-500': '#5f4145', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'maroon-600': '#2e2022', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'maroon-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'peach-100': '#a47559', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'peach-200': '#956b50', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'peach-300': '#91674e', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'peach-400': '#71513d', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'peach-500': '#5d4332', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'peach-600': '#2d2019', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'peach-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'yellow-100': '#8b7e62', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'yellow-200': '#7e7359', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'yellow-300': '#7b7056', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'yellow-400': '#605744', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'yellow-500': '#4f4838', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'yellow-600': '#26231b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'yellow-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'green-100': '#648861', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'green-200': '#5b7c58', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'green-300': '#587855', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'green-400': '#455e43', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'green-500': '#394e37', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'green-600': '#1b261b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'green-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'teal-100': '#598981', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'teal-200': '#517b74', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'teal-300': '#4f7872', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'teal-400': '#3e5e59', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'teal-500': '#334d49', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'teal-600': '#192523', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'teal-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'sky-100': '#4e869f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'sky-200': '#477a91', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'sky-300': '#45768d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'sky-400': '#365d6e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'sky-500': '#2d4c5b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'sky-600': '#16252c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'sky-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'blue-100': '#777da8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'blue-200': '#6c7198', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'blue-300': '#696e94', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'blue-400': '#525674', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'blue-500': '#444760', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'blue-600': '#21222e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'blue-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'lavender-100': '#777da8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'lavender-200': '#6c7198', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'lavender-300': '#696e94', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'lavender-400': '#525674', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'lavender-500': '#444760', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'lavender-600': '#21222e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'lavender-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'text-1100': '#797f96', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'text-1200': '#6e7488', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'text-1300': '#6b7084', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'text-1400': '#535867', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'text-1500': '#454855', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'text-1600': '#22232a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'text-1700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'subtext-1100': '#797f97', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'subtext-1200': '#6f738a', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'subtext-1300': '#6b6f85', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'subtext-1400': '#545769', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'subtext-1500': '#454857', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'subtext-1600': '#22232a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'subtext-1700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'subtext-0100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'subtext-0200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'subtext-0300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'subtext-0400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'subtext-0500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'subtext-0600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'subtext-0700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'overlay-0100': '#7b7f95', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'overlay-0200': '#6f728b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'overlay-0300': '#6c6f88', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'overlay-0400': '#54576c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'overlay-0500': '#454859', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'overlay-0600': '#21232b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'overlay-0700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'overlay-1100': '#797e9a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'overlay-1200': '#6d738c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'overlay-1300': '#6a6f88', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'overlay-1400': '#53586a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'overlay-1500': '#454858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'overlay-1600': '#21232b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'overlay-1700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'overlay-2100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'overlay-2200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'overlay-2300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'overlay-2400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'overlay-2500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'overlay-2600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'overlay-2700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'surface-1100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'surface-1200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'surface-1300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'surface-1400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'surface-1500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'surface-1600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'surface-1700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'base-100': '#7f7f89', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'base-200': '#74747d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'base-300': '#70707a', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'base-400': '#575763', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'base-500': '#474755', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'base-600': '#222231', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'base-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'mantle-100': '#7f7f87', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'mantle-200': '#73737b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'mantle-300': '#707078', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'mantle-400': '#575761', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'mantle-500': '#484852', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'mantle-600': '#22222f', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'mantle-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'crust-100': '#7f7f85', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'crust-200': '#737379', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'crust-300': '#707076', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'crust-400': '#57575f', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'crust-500': '#494950', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'crust-600': '#22222c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'crust-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				'text-0100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
				'text-0200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
				'text-0300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
				'text-0400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
				'text-0500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
				'text-0600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
				'text-0700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
		configViewer: {
			fonts: [
				'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
				'https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap', // <- only 500 will be used
			],
		},
	},
	plugins: [
		catppuccin({
			prefix: false,
			defaultFlavour: 'mocha',
		}),
		DaisyUI,
		forms,
		clamp,
		ratio,
		typog,
		containerQuery,
		gridAreas,
		gridLines,
		dynVariables,
		contentPlaceholder({
			placeholders: {
				paragraph: {
					height: 4, // the height of the container in em
					rows: [
						// This class will have 4 rows:
						[100], // A 100% width row
						[100], // Another 100% width row
						[40], // A 40% width row
						[], // And an empty row, to create separation
					],
				},
			},
		}),
		fluidType({
			// your fluid type settings
			// works only with unitless numbers
			// This numbers are the defaults settings
			settings: {
				fontSizeMin: 1.125, // 1.125rem === 18px
				fontSizeMax: 1.25, // 1.25rem === 20px
				ratioMin: 1.125, // Multiplicator Min
				ratioMax: 1.2, // Multiplicator Max
				screenMin: 20, // 20rem === 320px
				screenMax: 96, // 96rem === 1536px
				unit: 'rem', // default is rem but it's also possible to use 'px'
				prefix: '', // set a prefix to use it alongside the default font sizes
				extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
			},
			// Creates the text-xx classes
			// This are the default settings and analog to the tailwindcss defaults
			// Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
			values: {
				xs: [-2, 1.6],
				sm: [-1, 1.6],
				lg: [1, 1.6],
				xl: [2, 1.2],
				'2xl': [3, 1.2],
				'3xl': [4, 1.2],
				'4xl': [5, 1.1],
				'5xl': [6, 1.1],
				'6xl': [7, 1.1],
				'7xl': [8, 1],
				'8xl': [9, 1],
				'9xl': [10, 1],
				base: [
					0,
					{
						lineHeight: 1.6,
						letterSpacing: '-0.1rem',
					},
				],
			},
		}),
	],
	darkMode: 'class',
	daisyui: {
		styled: true,
		themes: [
			{
				latte: {
					primary: latte.flamingo.hex,
					secondary: latte.lavender.hex,

					// accent: '#e6cefe',
					// neutral: '#8c8d8f',

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar

					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc

					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons

					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs

					'ring-sky-500': latte.sky.hex,
					'ring-sky-200': latte.sky.hex,
				},
				frappe: {
					primary: frappe.flamingo.hex,
					secondary: frappe.lavender.hex,

					// accent: '#e6cefe',
					// neutral: '#8c8d8f',
					// 'base-100': '#d9d7d9',

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar

					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc

					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons

					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs
				},
				macchiato: {
					primary: macchiato.flamingo.hex,
					secondary: macchiato.lavender.hex,

					// accent: '#e6cefe',
					// neutral: '#8c8d8f',

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar

					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc

					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons

					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs

					'ring-sky-500': latte.sky.hex,
					'ring-sky-200': latte.sky.hex,
				},
				mochaOnWhite: {
					primary: '#625078',
					secondary: '#777da8',

					accent: '#8e74ad',
					neutral: '#22222f',

					// Color theme tokens at lightness of 100%, contrast of 110.00000000000001%
					bkgd: '#ffffff', //              'UI background color. All color contrasts evaluated and generated against this color.'
					'rosewater-100': '#8a7d7b', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'rosewater-200': '#7e716f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'rosewater-300': '#7a6e6c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'rosewater-400': '#605655', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'rosewater-500': '#4f4746', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'rosewater-600': '#262222', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'rosewater-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'flamingo-100': '#917a7a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'flamingo-200': '#846f6f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'flamingo-300': '#7f6c6c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'flamingo-400': '#645454', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'flamingo-500': '#524646', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'flamingo-600': '#282222', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'flamingo-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'mauve-100': '#8e74ad', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'mauve-200': '#816a9d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'mauve-300': '#7d6799', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'mauve-400': '#625078', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'mauve-500': '#514263', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'mauve-600': '#282030', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'mauve-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'red-100': '#b5687d', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'red-200': '#a55e72', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'red-300': '#a05b6f', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'red-400': '#7d4857', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'red-500': '#673b48', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'red-600': '#321d23', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'red-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'maroon-100': '#a6717a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'maroon-200': '#97676e', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'maroon-300': '#92646b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'maroon-400': '#734e54', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'maroon-500': '#5f4145', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'maroon-600': '#2e2022', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'maroon-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'peach-100': '#a47559', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'peach-200': '#956b50', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'peach-300': '#91674e', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'peach-400': '#71513d', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'peach-500': '#5d4332', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'peach-600': '#2d2019', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'peach-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'yellow-100': '#8b7e62', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'yellow-200': '#7e7359', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'yellow-300': '#7b7056', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'yellow-400': '#605744', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'yellow-500': '#4f4838', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'yellow-600': '#26231b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'yellow-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'green-100': '#648861', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'green-200': '#5b7c58', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'green-300': '#587855', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'green-400': '#455e43', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'green-500': '#394e37', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'green-600': '#1b261b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'green-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'teal-100': '#598981', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'teal-200': '#517b74', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'teal-300': '#4f7872', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'teal-400': '#3e5e59', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'teal-500': '#334d49', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'teal-600': '#192523', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'teal-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'sky-100': '#4e869f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'sky-200': '#477a91', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'sky-300': '#45768d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'sky-400': '#365d6e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'sky-500': '#2d4c5b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'sky-600': '#16252c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'sky-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'blue-100': '#777da8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'blue-200': '#6c7198', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'blue-300': '#696e94', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'blue-400': '#525674', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'blue-500': '#444760', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'blue-600': '#21222e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'blue-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'lavender-100': '#777da8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'lavender-200': '#6c7198', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'lavender-300': '#696e94', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'lavender-400': '#525674', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'lavender-500': '#444760', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'lavender-600': '#21222e', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'lavender-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'text-1100': '#797f96', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'text-1200': '#6e7488', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'text-1300': '#6b7084', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'text-1400': '#535867', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'text-1500': '#454855', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'text-1600': '#22232a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'text-1700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'subtext-1-100': '#797f97', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'subtext-1-200': '#6f738a', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'subtext-1-300': '#6b6f85', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'subtext-1-400': '#545769', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'subtext-1-500': '#454857', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'subtext-1-600': '#22232a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'subtext-1-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'subtext-0-100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'subtext-0-200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'subtext-0-300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'subtext-0-400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'subtext-0-500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'subtext-0-600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'subtext-0-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'overlay-0-100': '#7b7f95', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'overlay-0-200': '#6f728b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'overlay-0-300': '#6c6f88', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'overlay-0-400': '#54576c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'overlay-0-500': '#454859', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'overlay-0-600': '#21232b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'overlay-0-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'overlay-1-100': '#797e9a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'overlay-1-200': '#6d738c', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'overlay-1-300': '#6a6f88', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'overlay-1-400': '#53586a', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'overlay-1-500': '#454858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'overlay-1-600': '#21232b', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'overlay-1-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'overlay-2-100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'overlay-2-200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'overlay-2-300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'overlay-2-400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'overlay-2-500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'overlay-2-600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'overlay-2-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'surface-1-100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'surface-1-200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'surface-1-300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'surface-1-400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'surface-1-500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'surface-1-600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'surface-1-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'base-100': '#7f7f89', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'base-200': '#74747d', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'base-300': '#70707a', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'base-400': '#575763', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'base-500': '#474755', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'base-600': '#222231', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'base-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'mantle-100': '#7f7f87', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'mantle-200': '#73737b', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'mantle-300': '#707078', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'mantle-400': '#575761', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'mantle-500': '#484852', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'mantle-600': '#22222f', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'mantle-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'crust-100': '#7f7f85', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'crust-200': '#737379', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'crust-300': '#707076', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'crust-400': '#57575f', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'crust-500': '#494950', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'crust-600': '#22222c', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'crust-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
					'text-0-100': '#7f7f7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 67:1 against background #ffffff'
					'text-0-200': '#737373', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 72.5:1 against background #ffffff'
					'text-0-300': '#707070', //  'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 74.01:1 against background #ffffff'
					'text-0-400': '#585858', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 84.59:1 against background #ffffff'
					'text-0-500': '#484848', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 90.78:1 against background #ffffff'
					'text-0-600': '#232323', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 102.6:1 against background #ffffff'
					'text-0-700': '#000000', //         'Color can be used for small text. WCAG 3 (APCA) contrast is 108.78:1 against background #ffffff'
				},
				mochaOffBlack: {
					base: '#242433',

					primary: mocha.sky.hex,
					secondary: mocha.lavender.hex,

					accent: '#caa7f6',
					neutral: mocha.surface0.hex,

					bkgd: '#242433', //   'UI background color. All color contrasts evaluated and generated against this color.'
					'rosewater-100': '#bbaba6', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'rosewater-200': '#c4b2ae', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'rosewater-300': '#c6b5b0', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'rosewater-400': '#d6c4bf', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'rosewater-500': '#e0ccc8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'rosewater-600': '#f1ddd8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'rosewater-700': '#f8e4df', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'flamingo-100': '#c5a7a7', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'flamingo-200': '#ceafaf', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'flamingo-300': '#d1b1b1', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'flamingo-400': '#e1c0bf', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'flamingo-500': '#ebc8c7', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'flamingo-600': '#f5dbdb', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'flamingo-700': '#f7e4e4', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'mauve-100': '#c2a0ec', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'mauve-200': '#caa7f6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'mauve-300': '#cca9f6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'mauve-400': '#d7bcf8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'mauve-500': '#dec7f9', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'mauve-600': '#eadbfb', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'mauve-700': '#efe5fc', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'red-100': '#f390ab', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'red-200': '#f49db5', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'red-300': '#f4a0b7', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'red-400': '#f7b6c8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'red-500': '#f8c2d1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'red-600': '#fbd8e2', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'red-700': '#fce1e9', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'maroon-100': '#e29ba5', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'maroon-200': '#eba3ad', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'maroon-300': '#eba6b1', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'maroon-400': '#f0b9c2', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'maroon-500': '#f2c6cc', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'maroon-600': '#f7dadf', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'maroon-700': '#f9e3e7', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'peach-100': '#dfa178', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'peach-200': '#e9a87e', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'peach-300': '#ecaa7f', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'peach-400': '#fab990', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'peach-500': '#fac6a3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'peach-600': '#fcdbc6', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'peach-700': '#fde3d3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'yellow-100': '#bdad85', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'yellow-200': '#c6b58b', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'yellow-300': '#c9b88d', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'yellow-400': '#dac699', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'yellow-500': '#e3ce9f', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'yellow-600': '#f5dfac', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'yellow-700': '#f9e7bc', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'green-100': '#88ba83', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'green-200': '#8ec38a', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'green-300': '#90c68c', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'green-400': '#9cd697', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'green-500': '#a2e09e', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'green-600': '#c3ecc0', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'green-700': '#d1f1ce', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'teal-100': '#79baaf', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'teal-200': '#7fc2b6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'teal-300': '#80c5b9', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'teal-400': '#8bd5c8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'teal-500': '#91ded1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'teal-600': '#b7ece2', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'teal-700': '#c9f0e9', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'sky-100': '#6ab7d9', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'sky-200': '#6fc0e3', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'sky-300': '#70c3e6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'sky-400': '#8cd1ef', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'sky-500': '#9fd8f1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'sky-600': '#c3e7f6', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'sky-700': '#d1edf8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'blue-100': '#a2ace4', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'blue-200': '#a9b3ef', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'blue-300': '#abb5f2', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'blue-400': '#bbc4fd', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'blue-500': '#c6cefd', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'blue-600': '#dbe0fe', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'blue-700': '#e4e7fe', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'lavender-100': '#a2ace4', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'lavender-200': '#a9b3ef', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'lavender-300': '#abb5f2', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'lavender-400': '#bbc4fd', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'lavender-500': '#c6cefd', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'lavender-600': '#dbe0fe', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'lavender-700': '#e4e7fe', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'text1-100': '#a4adcc', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'text1-200': '#acb5d5', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'text1-300': '#aeb8d8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'text1-400': '#bdc7e9', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'text1-500': '#c4cff3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'text1-600': '#dae1f8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'text1-700': '#e3e8fa', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'subtext1-100': '#a6aecb', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'subtext1-200': '#afb5d1', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'subtext1-300': '#b1b8d2', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'subtext1-400': '#c2c7dc', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'subtext1-500': '#cbd0e1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'subtext1-600': '#dee1ec', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'subtext1-700': '#e6e8f1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'subtext0-100': '#aeaeae', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'subtext0-200': '#b6b6b6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'subtext0-300': '#b8b8b8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'subtext0-400': '#c7c7c7', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'subtext0-500': '#d0d0d0', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'subtext0-600': '#e1e1e1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'subtext0-700': '#e8e8e8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'overlay0-100': '#abaebb', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'overlay0-200': '#b3b6c2', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'overlay0-300': '#b6b8c4', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'overlay0-400': '#c6c7d1', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'overlay0-500': '#cfd0d8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'overlay0-600': '#e0e1e6', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'overlay0-700': '#e8e8ec', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'overlay-1100': '#a9aebf', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'overlay-1200': '#b2b6c6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'overlay-1300': '#b5b8c8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'overlay-1400': '#c4c7d3', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'overlay-1500': '#cdd0da', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'overlay-1600': '#e0e1e8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'overlay-1700': '#e7e8ed', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'overlay-2100': '#aeaeae', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'overlay-2200': '#b6b6b6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'overlay-2300': '#b8b8b8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'overlay-2400': '#c7c7c7', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'overlay-2500': '#d0d0d0', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'overlay-2600': '#e1e1e1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'overlay-2700': '#e8e8e8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'surface-1100': '#aeaeae', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'surface-1200': '#b6b6b6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'surface-1300': '#b8b8b8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'surface-1400': '#c7c7c7', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'surface-1500': '#d0d0d0', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'surface-1600': '#e1e1e1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'surface-1700': '#e8e8e8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'base-100': '#adaeb3', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'base-200': '#b6b6bb', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'base-300': '#b8b8bd', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'base-400': '#c7c7cb', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'base-500': '#d0d0d4', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'base-600': '#e1e1e3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'base-700': '#e8e8ea', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'mantle-100': '#aeaeb2', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'mantle-200': '#b6b6ba', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'mantle-300': '#b8b8bc', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'mantle-400': '#c7c7ca', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'mantle-500': '#d0d0d3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'mantle-600': '#e1e1e3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'mantle-700': '#e8e9ea', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'crust-100': '#aeaeb1', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'crust-200': '#b6b6b9', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'crust-300': '#b8b8bb', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'crust-400': '#c7c7ca', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'crust-500': '#d0d0d2', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'crust-600': '#e1e1e3', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'crust-700': '#e8e8e9', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'
					'text0-100': '#aeaeae', //   'Do not use for UI elements or text. WCAG 3 (APCA) contrast is 55.6:1 against background #242433'
					'text0-200': '#b6b6b6', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 60.15:1 against background #242433'
					'text0-300': '#b8b8b8', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 61.4:1 against background #242433'
					'text0-400': '#c7c7c7', //   'Color can be used for UI elements or large text. WCAG 3 (APCA) contrast is 70.15:1 against background #242433'
					'text0-500': '#d0d0d0', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 75.27:1 against background #242433'
					'text0-600': '#e1e1e1', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 85.72:1 against background #242433'
					'text0-700': '#e8e8e8', //   'Color can be used for small text. WCAG 3 (APCA) contrast is 90.16:1 against background #242433'

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar

					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc

					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons

					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs

					'ring-sky-500': '#9fd8f1',
					'ring-sky-200': '#6fc0e3',
				},
			},
		],
	},
};
