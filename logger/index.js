const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    new winston.transports.File({ filename: 'logger-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logger-combined.log' })
  ],
});

module.exports = logger;