/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-cloudflare-workers';

export default {
	kit: {
		adapter: adapter(),
		amp: true
	},
};
