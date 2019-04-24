import defaultConfig from '../../rollup.config.js';

export default {
	...defaultConfig,
	output: {
		file: 'public/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	watch: {
		include: '../../**',
	}
};