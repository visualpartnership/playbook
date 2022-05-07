<<<<<<< HEAD
const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('ACCESS')
=======
const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('ACCESS')
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
accessLogger.verbose('This is a verbose message')