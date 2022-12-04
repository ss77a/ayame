import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
	await page.goto('localhost:3000/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Ayame6 — Your website/);

	// create a locator
	// const getStarted = page.getByRole('link', { name: 'Get Started' });
	// const getTemplate = page.getByRole('link', { name: 'Get template' });
	const getFeatures = page.getByRole('link', { name: 'features' });

	// console.table(getTemplate);

	// Expect an attribute "to be strictly equal" to the value.
	// await expect(getStarted).toHaveAttribute('href', '/get-started-website-with-astro-tailwind-css');
	// await expect(getStarted).toHaveAttribute('href', '/about');
	// await expect(getTemplate[0]).toHaveAttribute('href', 'https://github.com/ss77a/ayame');
	await expect(getFeatures).toHaveAttribute('href', '/features');

	// // Click the get started link.
	// await getFeatures.click();

	// // Expects the URL to contain intro.
	// await expect(page).toHaveURL(/.*features/);
	// await expect(page).toHaveTitle('Ayame6 — Your website with Astro + Tailwind CSS using catppuccin theme flavours. Easy to make your own');

	// Get started with ayame to create a website using Astro and Tailwind CSS — Ayame6
	// await expect(page).toHaveTitle('Get started with ayame to create a website using Astro and Tailwind CSS — Ayame6');
});
