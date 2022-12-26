export const SITE = {
	name: 'Ayame6',

	origin: 'https://ayame6.vercel.app/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Ayame6 — Your website with Astro + Tailwind CSS using catppuccin theme flavours. Easy to make your own',
	description:
		'Ayame6 is based on the ayame 🚀 Project. Either are free and ready to start templates to make your website using Astro and Tailwind CSS.',

	googleAnalyticsId: false, //  or 'UA-249875216-1',
	googleSiteVerificationId: 'wElF19ujN9ekDubCnx5X2cdUu7AuABP6D0rsPGTdnTQ',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
