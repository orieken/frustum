import defaultConfig from '../../rollup.config.js';
import pkg from './package.json';

const config = {
	...defaultConfig,
	external: ['three'],
	output: [
		{ file: pkg.module, format: 'esm' }
	]
};

export default [
	config
];
