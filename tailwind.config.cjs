const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@catppuccin/tailwindcss'),
		require('daisyui'),
	],
	darkMode: 'class',
	daisyui: {
		styled: true,
		themes: [
			{
				latte: {},
				frappe: {
					// primary: '#565656',
					// secondary: '#55008d',
					// accent: '#e6cefe',
					// neutral: '#8c8d8f',
					// 'base-100': '#d9d7d9',

					// '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					// '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					// '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					// '--animation-btn': '0.25s', // duration of animation when you click on button
					// '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					// '--btn-text-case': 'uppercase', // set default text transform for buttons
					// '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					// '--border-btn': '1px', // border width of buttons
					// '--tab-border': '1px', // border width of tabs
					// '--tab-radius': '0.5rem', // border radius of tabs
				},
				macchiato: {},
				mocha: {}
			},
		],
	},
};
