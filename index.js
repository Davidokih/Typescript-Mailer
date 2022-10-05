const { Console } = require('console');
const fs = require("fs");
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });

const count = 5;
logger.log('count: %d', count);

logger.error(new Error('Whoops, something bad happened'));
// console.assert(true, 'does nothing');

// console.assert(false, 'Whoops %s work', 'didn\'t');