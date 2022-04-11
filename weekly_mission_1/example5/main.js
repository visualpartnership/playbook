const logger = require('./logger')

// Uso directo el objeto instanciado en el módulo logger
logger.log('Informational message again')

//Otra forma de instanciar el mismo objeto

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('Info customized message')