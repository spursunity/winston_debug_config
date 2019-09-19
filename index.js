const Debug = require('debug');

const logger = require('./logger');

const debugLF = Debug('function:logFunc');

function logFunc() {
  try {
    const a = 132;
    const b = 11;
    debugLF({ a });
    debugLF({ b });

    const result = a / b;
    debugLF({ result });

    if (result > 10) {
      logger.log('info', { result });
    }
  } catch (error) {
    const { message, stack } = error;
    logger.error({
      function: 'logFunc',
      message,
      stack,
    });
  }
}

logFunc();