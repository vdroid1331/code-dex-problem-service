const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");
// const path = require('path')

const allowedTransports = [];

// the below transport config enables logging on the console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      // first arguement to the combine method is defining how we want the timestamp to come up
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      // second arguement to the combine method defines what is exactly going to be printed in the log.
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// the below transport config enables logging in the mongodb database
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    // first arguement to the combine method is defining how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    // second arguement to the combine method defines what is exactly going to be printed in the log.
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
