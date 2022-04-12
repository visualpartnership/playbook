//Example 2: Exportando funciones entre scripts con CommonJS

// node main.js

const logger = require('./logger')

logger.info('This is an informational message')
logger.verbose('This is a verbose message')
