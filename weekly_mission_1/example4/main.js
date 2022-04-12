const Logger = require('./logger');

//Creación de un Objeto
const dbLogger = new Logger('DB');

//Invocación del método
dbLogger.info('This is an informational message')

//Creación de otro Objeto
const accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message')