const logger = require('./logger');

function logFunc() {
  try {
    const a = 99;
    const b = 11;
    // a();

    const result = a / b;

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