// babel.config.cjs
/**
 * This is the Babel configuration file.
 * It defines the presets used by babel-jest to transpile modern JavaScript.
 */
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};
