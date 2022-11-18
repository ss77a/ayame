const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
const clamp = require('@tailwindcss/line-clamp');
const ratio = require('@tailwindcss/aspect-ratio');
const typog = require('@tailwindcss/typography');
const catppuccin = require('@catppuccin/tailwindcss');
const DaisyUI = require('daisyui');
const {variants, labels} = require('@catppuccin/palette');

const macchiato = variants.macchiato, 
			mocha = variants.mocha, 
			frappe = variants.frappe, 
			latte = variants.latte;

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: variants.mocha.flamingo.hex,
				secondary: variants.mocha.lavender.hex,
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
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
				mocha: {
					primary: mocha.flamingo.hex,
					secondary: mocha.lavender.hex,

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

					'focus:ring-sky-500': latte.sky.hex,
					'focus:ring-sky-200': latte.sky.hex,
				},
			},
		],
	},
};
