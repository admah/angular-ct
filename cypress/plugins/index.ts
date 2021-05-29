import * as webpackConfig from './webpack.config';
const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = (on: any, config: any) => {
  on('dev-server:start', (options: any) =>
    startDevServer({
      options,
      webpackConfig,
    }),
  );
  return config;
};
