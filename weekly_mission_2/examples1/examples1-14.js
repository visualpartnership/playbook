console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 14: Uso de some")
console.log("este método validará todos los elementos de la lista")
console.log("y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.")

console.log("--------------------------------------------------------")

//Lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) => b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true
