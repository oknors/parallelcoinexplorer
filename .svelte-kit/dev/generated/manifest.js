const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/transaction/[slug].svelte"),
	() => import("../../../src/routes/block/[slug].svelte"),
	() => import("../../../src/routes/addr/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/transaction/[slug].svelte
	[/^\/transaction\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/block/[slug].svelte
	[/^\/block\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/addr/[slug].svelte
	[/^\/addr\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];