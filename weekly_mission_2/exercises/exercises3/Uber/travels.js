// Convirtiendo objeto travels a definición de clase Travels

export default class Travels{
    constructor(name, currientLocation, destinationLocation, price, typeUber){
    this.name = name
    this.dateCreated = new Date()
    this.currientLocation = currientLocation
    this.destinationLocation = destinationLocation
    this.price = price
    this.typeUber = typeUber
    }

    getDateCreated(){
        return this.dateCreated
    }
    getGeneralInfo(){
        return `${this.name}, schedule a Uber in the date and hour ${this.dateCreated}, it cost is ${this.price} dollars and the type uber is ${this.typeUber}`
    }
}