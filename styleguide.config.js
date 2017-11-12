module.exports = {
  components: 'src/components/**/*.{ts,tsx}',
  ignore: [
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/index.ts',
  ],
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  showSidebar: true,
};
