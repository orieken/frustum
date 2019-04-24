import defaultConfig from '../../rollup.config.js';
import pkg from './package.json';

export default {
	...defaultConfig,
	external: Object.keys(pkg.dependencies),
	output: { file: pkg.module, format: 'esm' }
};
