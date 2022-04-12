const logger = require('./logger')

logger.log('Informational message');

//Otra forma de instanciar el objeto
const customLogger = new logger.constructor('CUSTOM');
customLogger.log('Customized message')