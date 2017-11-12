const path = require('path');
const pkg = require('./package.json');

/**
 * Compute the path for component header
 * Here returns ES6 import
 * @param {any} componentPath
 * @returns
 */
const getComponentPathLine = (componentPath) => {
  const extname = path.extname(componentPath);
  const name = path.basename(componentPath, extname);
  const dir = `${pkg.name}/components`;
  return `import { ${name} } from '${dir}';`;
}

module.exports = {
  title: 'The UI Library',
  sections: [
    {
      name: 'Components',
      content: 'src/components/README.md',
      components: 'src/components/**/*.{ts,tsx}',
    },
    {
      name: 'Demos',
      content: 'src/demos/README.md',
      components: 'src/demos/**/*.{ts,tsx}',
    }
  ],
  ignore: [
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/index.ts',
  ],
  getComponentPathLine,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js'),
  showSidebar: true,
};
