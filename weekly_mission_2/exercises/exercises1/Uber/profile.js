//Modelado de información a Objeto JS

//Modelado de Uber => profile

const profile = {
    name: "Gloria",
    lastName: "Coral Cerecedo",
    phone: 9831236791,
    email:"gloria_marceline@gmail.com",
    location: "Quintana Roo",
    myNumtravels: 23,
    getNameAndLocation: function(){
        return `The user ${this.name} is of ${this.location}`
    },
    getGeneralInfo: function(){
        return `The data of profile of ${this.name} ${this.lastName} are: email ${this.email}, phone ${this.phone} and her number of travels is ${this.myNumtravels}`
    }
}
console.log(profile)
console.log("---------------------------------------------")
console.log(profile.name + " " + profile.lastName)
console.log("---------------------------------------------")
console.log(profile.getNameAndLocation())
console.log("---------------------------------------------")
console.log(profile.getGeneralInfo())
