import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
    input: "src/index.ts",
    plugins: [
        typescript({ useTsconfigDeclarationDir: true, clean: true }),
        json(),
        resolve(),
        commonjs()
    ],
    watch: {
        include: 'src/**',
    }
};