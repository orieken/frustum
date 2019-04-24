import defaultConfig from '../../rollup.config.js';
import pkg from './package.json';

const esmConfig = {
	...defaultConfig,
	external: Object.keys(pkg.dependencies),
	output: { file: pkg.module, format: 'esm' }
};

const otherConfig = {
	...defaultConfig,
	output: { file: pkg.browser, format: 'iife', name: 'BarChart' }
};

export default [
	esmConfig,
	otherConfig
];
