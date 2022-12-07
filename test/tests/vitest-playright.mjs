import { Browser, chromium, firefox, webkit } from 'playwright';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { debug } from 'vitest-preview';

const browserTypes = process.env.ALL_BROWSERS ? [chromium, firefox, webkit] : [chromium];

for (const browserType of browserTypes) {
	describe(`browser:${browserType.name()}`, () => {
		let browser = Browser;
		beforeAll(async () => {
			browser = await browserType.launch({ headless: true });
		});
		afterAll(async () => {
			browser?.close();
		});
		it('evaluate with vite module', async () => {
			const page = await browser.newPage();
			page.on('console', (msg) => console.log(msg.text()));
			await page.goto('http://localhost:3000');
			await page.locator('#ready').waitFor({ state: 'attached' });
			await page.evaluate(() => {
				return new Promise((r) => {
					const mod = new Function("return import('/mod.ts')")();
					console.log('hello in eval', Object.keys(mod));
					r(null);
				});
			});
		});
		debug();
	});
}
