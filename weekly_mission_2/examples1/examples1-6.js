console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúscula")

console.log("--------------------------------------------------------")

const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
    country.toUpperCase().slice(0, 3)) // el método slice obtiene solo la longitud marcada del string
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)