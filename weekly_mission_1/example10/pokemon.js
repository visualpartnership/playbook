export default class Logger {
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log('Tu pokemon es:' + this.name)
    }
  }