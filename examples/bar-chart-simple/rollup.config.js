import defaultConfig from '../../rollup.config.js';

const config = {
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

export default [
	config
];
