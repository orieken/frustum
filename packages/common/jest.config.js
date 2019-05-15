const common = require('../../jest.config');

module.exports = {
    ...common,
    moduleNameMapper: {
        'three': '<rootDir>/../__mocks__/three.ts'
    }
};