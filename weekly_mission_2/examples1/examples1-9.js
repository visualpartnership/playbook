console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 9: Uso del reduce")

console.log("--------------------------------------------------------")

const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
/* 
acc = 0, element = 1 /// acc + element = 1
acc = 1, element = 2 /// acc + element = 3
acc = 3, element = 3 /// acc + element = 6
acc = 6, element = 4 /// acc + element = 10
acc = 10, element = 5 /// acc + element = 15
*/
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)