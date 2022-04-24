// Convirtiendo objeto profile a definición de clase Profile

export default class Profile{
    constructor(name, lastname, phone, email, location, numTravels){
    this.name = name
    this.lastname = lastname
    this.phone = phone
    this.email = email
    this.location = location
    this.numTravels = numTravels
    }

    getNameAndLocation(){
        return `The user ${this.name} is of ${this.location}`
    }
    getGeneralInfo(){
        return `The data of profile of ${this.name} ${this.lastName} are: email ${this.email}, phone ${this.phone} and her number of travels is ${this.numTravels}`
    }
}