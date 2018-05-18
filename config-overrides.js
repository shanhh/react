const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config.resolve = {
    'alias': {
      'connect' : 'src/utils/connect'
    }
  }
  return config;
}