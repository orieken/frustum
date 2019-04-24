import defaultConfig from '../../rollup.config.js';
import pkg from './package.json';

const esmConfig = {
	...defaultConfig,
	external: ['three', '@frustum-dev/common'],
	output: { file: pkg.module, format: 'esm' }
};

const otherConfig = {
	...defaultConfig,
	output: [
		{ file: pkg.main, format: 'umd', name: 'BarChart' },
		{ file: pkg.unpkg, format: 'iife', name: 'BarChart' }
	]
};

export default [
	esmConfig,
	otherConfig
];
