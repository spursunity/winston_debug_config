const config = require('config');

function showConfig(prop) {
  if (config.has(prop)) {
    console.log(`${prop}: ${config.get(prop)}`);
  } else {
    console.log('not found');
  }
}

showConfig('db');
showConfig('port');
showConfig('client');
showConfig('backend');
showConfig('fullstack');

const sum = config.get('port') + config.get('port2');
console.log('sum :', sum);