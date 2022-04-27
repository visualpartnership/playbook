<<<<<<< HEAD
import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
=======
import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
}