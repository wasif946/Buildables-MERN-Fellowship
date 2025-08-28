// jest.config.cjs
/**
 * This is the Jest configuration file.
 * It is configured to use babel-jest to handle ES module imports and other modern JS syntax.
 */
module.exports = {
  // This is the key part. It tells Jest to use 'babel-jest' to transform
  // any file that ends with .js, enabling the use of 'import' and 'export'.
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
