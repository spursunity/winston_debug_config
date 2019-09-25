const config = require('config');

function showConfig(prop) {
  if (config.has(prop)) {
    console.log(`${prop}: ${config.get(prop)}`);
  } else {
    console.log('not found');
  }
}


console.log('port: ', process.argv);

showConfig('name');
showConfig('port');
showConfig('client');
showConfig('backend');
showConfig('fullstack');

const sum = config.get('port') + config.get('port2');
console.log('sum :', sum);