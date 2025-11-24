const fs = require('fs');
const { createLogger, format, transports } = require('winston');

const customFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => {
        let message = info.message;
        // If message contains [PASS], color it green
        if (message.includes('[PASS]')) {
            message = `\x1b[32m${message}\x1b[0m`; // Green | For Pass
        } else if (message.includes('[FAIL]') || message.includes('[ERROR]')) {
            message = `\x1b[31m${message}\x1b[0m`; // Red | For Error
        } else if (message.includes('[CLICK]') || message.includes('[INPUT]') || message.includes('[KEY]')) {
            message = `\x1b[33m${message}\x1b[0m`; // Yellow | For Actions
        } else if (message.includes('SLEEP') || message.includes('INFO')) {
            message = `\x1b[34m${message}\x1b[0m`; // Blue | For info
        }
        return `${info.timestamp} [${info.level.toUpperCase()}]: ${message}`;
    })
);

// Remove existing log file if it exists
const logFile = 'test-logs/execution.log';
if (fs.existsSync(logFile)) {
    fs.unlinkSync(logFile); // Delete the file
}

const logger = createLogger({
    level: 'info',
    format: customFormat,
    transports: [
        new transports.Console(),
        new transports.File({ filename: `test-logs/execution.log` })
    ]
});

module.exports = logger;
