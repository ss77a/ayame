// import { fileURLToPath } from 'url';
import { expect, it } from 'vitest';
import { debug } from 'vitest-preview';

// export functions that are required to setup tests from fixture files.

// export function imagecheck(contents: string): string {
// 	try {

// 	}
// }

/**
* get content file from fixtues and load it 
*/
function getFiles(file: any, path: string) {
 let contentFile: string = file[`/test/fixtures/${path}/${file}.astro`];
 // workaround: normalize end of lines to pass windows ci
 if (contentFile) contentFile = contentFile.replace(/(\r\n|\r)/gm, '\n');
 return { content: contentFile };
}

/**
 */
 export function test(name: string) {

	const { content } = getFiles('index', 'imagecheck');

	expect(content, '<img*/>');
	debug();
 }
