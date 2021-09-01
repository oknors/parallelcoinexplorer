import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\" ⚡>\n<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"canonical\" href=\".\">\n\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: true,
		dev: false,
		entry: {
			file: assets + "/_app/start-d9cc4c74.js",
			css: [],
			js: [assets + "/_app/start-d9cc4c74.js",assets + "/_app/chunks/vendor-3b78b537.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: null,
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"icons.svg","size":1518,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/transaction\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/transaction/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/block\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/block/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/addr\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/addr/[slug].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/transaction/[slug].svelte": () => import("../../src/routes/transaction/[slug].svelte"),"src/routes/block/[slug].svelte": () => import("../../src/routes/block/[slug].svelte"),"src/routes/addr/[slug].svelte": () => import("../../src/routes/addr/[slug].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-5e69aa35.js","css":["assets/pages/__layout.svelte-37c0d03e.css"],"js":["pages/__layout.svelte-5e69aa35.js","chunks/vendor-3b78b537.js"],"styles":["*,:before,:after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9a9a9a}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9a9a9a}input::placeholder,textarea::placeholder{opacity:1;color:#9a9a9a}button,[role=button]{cursor:pointer}:-moz-focusring{outline:auto}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:gomono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-color:currentColor;--tw-blur: var(--tw-empty, );--tw-brightness: var(--tw-empty, );--tw-contrast: var(--tw-empty, );--tw-grayscale: var(--tw-empty, );--tw-hue-rotate: var(--tw-empty, );--tw-invert: var(--tw-empty, );--tw-saturate: var(--tw-empty, );--tw-sepia: var(--tw-empty, );--tw-drop-shadow: var(--tw-empty, );--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.absolute{position:absolute}.relative{position:relative}.right-0{right:0px}.top-0{top:0px}.top-2{top:.5rem}.left-0{left:0px}.col-span-4{grid-column:span 4 / span 4}.m-2{margin:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-12{margin-top:3rem;margin-bottom:3rem}.mx-8{margin-left:2rem;margin-right:2rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.ml-2{margin-left:.5rem}.mb-16{margin-bottom:4rem}.mt-5{margin-top:1.25rem}.mr-4{margin-right:1rem}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-4{height:1rem}.h-8{height:2rem}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-4{width:1rem}.w-24{width:6rem}.w-36{width:9rem}.w-8{width:2rem}.min-w-min{min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content}.flex-1{flex:1 1 0%}.transform{transform:var(--tw-transform)}.resize{resize:both}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.divide-y-2>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(2px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(2px * var(--tw-divide-y-reverse))}.divide-dotted>:not([hidden])~:not([hidden]){border-style:dotted}.divide-black>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgba(0,0,0,var(--tw-divide-opacity))}.divide-opacity-20>:not([hidden])~:not([hidden]){--tw-divide-opacity: .2}.overflow-hidden{overflow:hidden}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-l-0{border-left-width:0px}.border-r-0{border-right-width:0px}.border-b-0{border-bottom-width:0px}.border-dotted{border-style:dotted}.border-black{--tw-border-opacity: 1;border-color:rgba(0,0,0,var(--tw-border-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-dark{--tw-bg-opacity: 1;background-color:rgba(48,48,48,var(--tw-bg-opacity))}.bg-opacity-25{--tw-bg-opacity: .25}.bg-opacity-50{--tw-bg-opacity: .5}.fill-current{fill:currentColor}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-0{padding-left:0;padding-right:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pt-2{padding-top:.5rem}.pr-16{padding-right:4rem}.pb-4{padding-bottom:1rem}.text-center{text-align:center}.font-mono{font-family:gomono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.font-title{font-family:plan9regular,ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif}.font-text{font-family:bariolregular,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-7xl{font-size:4.5rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-5xl{font-size:3rem;line-height:1}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.tracking-wide{letter-spacing:.025em}.tracking-widest{letter-spacing:.1em}.text-light{--tw-text-opacity: 1;color:rgba(207,207,207,var(--tw-text-opacity))}.text-green_blue{--tw-text-opacity: 1;color:rgba(48,128,128,var(--tw-text-opacity))}.no-underline{text-decoration:none}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.filter{filter:var(--tw-filter)}.hover\\:text-orange:hover{--tw-text-opacity: 1;color:rgba(207,128,48,var(--tw-text-opacity))}.hover\\:no-underline:hover{text-decoration:none}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width: 768px){.md\\:container{width:100%}@media (min-width: 640px){.md\\:container{max-width:640px}}@media (min-width: 768px){.md\\:container{max-width:768px}}@media (min-width: 1024px){.md\\:container{max-width:1024px}}@media (min-width: 1280px){.md\\:container{max-width:1280px}}@media (min-width: 1536px){.md\\:container{max-width:1536px}}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:h-10{height:2.5rem}.md\\:w-10{width:2.5rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:rounded-lg{border-radius:.5rem}.md\\:px-0{padding-left:0;padding-right:0}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:text-8xl{font-size:6rem;line-height:1}}@media (min-width: 1280px){.xl\\:flex-row{flex-direction:row}.xl\\:text-7xl{font-size:4.5rem;line-height:1}.xl\\:text-8xl{font-size:6rem;line-height:1}.xl\\:text-9xl{font-size:8rem;line-height:1}}\n"]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-0998be63.js","css":[],"js":["error.svelte-0998be63.js","chunks/vendor-3b78b537.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-d73c4b60.js","css":[],"js":["pages/index.svelte-d73c4b60.js","chunks/vendor-3b78b537.js","chunks/Status-8b1b77cb.js"],"styles":[]},"src/routes/transaction/[slug].svelte":{"entry":"pages/transaction/[slug].svelte-3d9a7037.js","css":[],"js":["pages/transaction/[slug].svelte-3d9a7037.js","chunks/vendor-3b78b537.js","chunks/Status-8b1b77cb.js"],"styles":[]},"src/routes/block/[slug].svelte":{"entry":"pages/block/[slug].svelte-1a06589c.js","css":[],"js":["pages/block/[slug].svelte-1a06589c.js","chunks/vendor-3b78b537.js","chunks/Block-ee4912c3.js","chunks/Status-8b1b77cb.js"],"styles":[]},"src/routes/addr/[slug].svelte":{"entry":"pages/addr/[slug].svelte-85bbf6c3.js","css":[],"js":["pages/addr/[slug].svelte-85bbf6c3.js","chunks/vendor-3b78b537.js","chunks/Block-ee4912c3.js","chunks/Status-8b1b77cb.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}