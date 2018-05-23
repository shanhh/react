const rewireLess = require('react-app-rewire-less');
const {injectBabelPlugin} = require('react-app-rewired');
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  // 为了写@connect
  config = injectBabelPlugin('transform-decorators-legacy',config)
  // 别名
  config.resolve = {
    'alias': {
      'connect' :   resolve('src/utils/connect.js'),
      'components': resolve('src/components'),
      'utils':      resolve('src/utils')
    }
  }
  return config;
}