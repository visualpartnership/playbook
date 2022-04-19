console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques") 

console.log("--------------------------------------------------------")

const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
const age0 = ages.find((age) => age > 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
console.log("Ejemplo 11: Primera edad mayor a 20 es: "+ age0)

