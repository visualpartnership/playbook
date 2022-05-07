<<<<<<< HEAD
/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
  constructor (name) {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
=======
/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
  constructor (name) {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
}