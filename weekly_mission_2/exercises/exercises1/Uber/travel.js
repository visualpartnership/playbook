//Modelado de información a Objeto JS

//Modelado de Uber => travel

const travel = {
    name: "Gloria",
    dateCreated: new Date(),
    currientLocation: "Plaza",
    destinationLocation: "Centro",
    price: 30,
    typeUber: "UberPet",
    getDateCreated: function(){
        return this.dateCreated
    },
    getGeneralInfo: function(){
        return `${this.name}, schedule a Uber in the date and hour ${this.dateCreated}, it cost is ${this.price} pesos and ye type uber is ${this.typeUber}`
    }
}
console.log(travel)
console.log("---------------------------------------------")
console.log("Uber scheduled " + travel.getDateCreated())
console.log("---------------------------------------------")
console.log(travel.getGeneralInfo())