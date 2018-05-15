const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  config = rewireLess(config, env);
  //do stuff with the webpack config...
  return config;
}