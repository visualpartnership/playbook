import Profile from  './profile.js'
import Travels from './travels.js'

console.log(Profile)
console.log("--------------------------------------------")
const profile1 = new Profile("Dallas", "West", 8903674259, "dallas_01@gmail.com", "EUA", 25)
console.log(profile1)
console.log("////////////////////////////////////////////")
console.log(profile1.name + " " + profile1.lastname)
console.log(profile1.getNameAndLocation())
console.log(profile1.getGeneralInfo())
console.log("********************************************")

console.log(Travels)
console.log("--------------------------------------------")
const travel1 = new Travels("Dallas", "Plaza Dealey", "Las Vegas", "50", "UberX")
console.log(travel1)
console.log("////////////////////////////////////////////")
console.log("Uber scheduled " + travel1.getDateCreated())
console.log(travel1.getGeneralInfo())