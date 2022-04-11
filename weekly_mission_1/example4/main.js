const Logger = require('./logger')

// Creación de un objeto nuevo, esto llama por default el constructor de la clase
const dbLogger = new Logger('DB');

//invocación del Método
dbLogger.info('Informational message');

const accessLogger = new Logger('ACCESS');
accessLogger.verbose('Verbose message')

