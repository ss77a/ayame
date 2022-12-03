import { debug } from 'vitest-preview';
import { it, describe, expect } from 'vitest';
import { defineConfig } from 'vite';

// Inside your tests
describe('my test', () => {
	//  render(<MyComponent />);
	debug(); // 👈 Add this line
});
