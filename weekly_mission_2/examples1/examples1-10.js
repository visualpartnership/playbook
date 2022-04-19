console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 10: Ejemplo 10: Uso de every") 
console.log("nos ayuda a validar todos los elementos de una lista")
console.log("si todos cumplen con la validación que indiques te regresa true, de lo contrario false")

console.log("--------------------------------------------------------")

const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') //every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)
const names0 = ['Explorer 1', 'Explorer 2', 10, 'Explorer 3', 'Explorer 4']
const areAllStr0 = names0.every((name) => typeof name === 'string') //every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr0)