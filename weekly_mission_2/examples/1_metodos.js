// Ejemplo 1. forEach() para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5]
console.log("Ejem1. imprimiendo los elementos de una lista con forEach()")
numbers.forEach(num => console.log(num))
console.log(" ")

// Ejemplo 2. forEach() para calcular la suma de todos los elementos de una lista
const numbers2 = [1, 2, 3, 4, 5]
let sum = 0
console.log("Ejem2. imprimiendo la suma de una lista de numeros")
numbers2.forEach(num => {
    sum += num
    }
)
console.log(sum)
console.log(" ")

// Ejemplo 3. usa forEach() para imprimir los paises en mayúsculas
const countries = ["México", "Cuba", "Argentina", "Brasil", "Chile"]
console.log("Ejem3. imprime los paises en Mayusculas")
countries.forEach(country => {
    console.log(country.toUpperCase())
})
console.log(" ")

// Ejemplo 4. Uso de map para recorrer elementos de una lista y crear una nueva lista con los valores elevados al cuadrado
const numbers4 = [1, 2, 3, 4, 5]
console.log("Ejem4. Devuelve una nueva lista con los elementos al cuadrado")
const numSquare = numbers4.map((num) => { 
    return num * num
})
console.log(numSquare)
console.log(" ")

// Ejemplo 5. Uso de map para convertir todos los nombres de una lista a minúsculas
const names = ["FernanDO", "CARLOS", "Alejandro", "CESAR"]
const namesMinus = names.map((name) => name.toLowerCase())
console.log("Ejem5. convertir los nombres a minúsculas")
console.log(namesMinus)
console.log(" ")

// Ejemplo 6. Uso de map para convertir todos los elementos de una lista a mayusculas, solo mostrar 3 letras
const countries6 = ["Mexico", "Cuba", "Argentina", "Brasil", "Chile"]
const countriesFirstThreeLetters = countries6.map((pais) => 
    pais.toUpperCase().slice(0, 3)
)
console.log("Ejem6. Uso de map para convertir en mayusculas y solo mostrar las primeras 3 letras")
console.log(countriesFirstThreeLetters)
console.log(" ")

// Ejemplo 7. Uso de filter para filtrar una lista de elementos
const countries7 = ["Mexico", "Cuba", "Argentina", "Brasil", "Costa Rica", "Colombia"]
const countriesFilter = countries7.filter((pais2) => 
    pais2.toLowerCase().includes("co")
)
const countriesFilter2 = countries7.filter((pais2) => 
    pais2.toLowerCase().endsWith("co")
)
console.log("Ejem7. Uso de filter para filtrar lista de elementos")
console.log(countriesFilter)
console.log(countriesFilter2)
console.log(" ")

// Ejemplo 8. Filtrar una lista por condicional
const gruposSecundaria = [
    { name: "A", score: 95 },
    { name: "B", score: 80 },
    { name: "C", score: 66 },
    { name: "D", score: 50 },
    { name: "E", score: 40 },
    { name: "F", score: 83 },
    { name: "G", score: 93 },
    { name: "H", score: 100 }  // yo estuve en el grupo H jajaja
]
const scoresGreaterNinety = gruposSecundaria.filter(nums => 
    nums.score > 90
)
console.log("Ejem8. Uso de filter para filtrar elementos por score")
console.log(scoresGreaterNinety)
console.log(" ")

// Ejemplo 9. Uso del reduce
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = numbers9.reduce((acc, current) =>
    acc + current, 0 // declaramos el valor inicial del acumulador en 0 y se le suman los current nums del array
)
console.log("Ejem9. Uso de reduce para calcular la suma en una lista")
console.log(result)
console.log(" ")

// Ejemplo 10. uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 234, 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejem10. Son todos los elementos string: " + areAllStr)
console.log(" ")

// Ejemplo 11. Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejem11. Primera edad menor a 20 es: "+ age)
console.log(" ")

// Ejemplo 12. Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'Z', score: 70 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find((user) => user.score < 80)
console.log("Ejem12. First name score less than 80 found: " + score_less_than_80.name)
console.log(" ")

// Ejemplo 13. Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Expl 1', 'Explorer 2', 'Explorer 3']
const result1 = names13.findIndex((name) => name.length > 7)
console.log("Ejem13. Primer elemento cuya palabra sea mayor a 7 esta en la posición index "+ result1)
console.log(" ")

// Ejemplo 14. Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
const bools = [true, true, false, true]
    // Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejem14. Alguno de los elementos en el array es false: " + areSomeTrue) //true
console.log(" ")

//Ejemplo 15. Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejem15. Elementos ordernados usando sort()")
console.log(products)
console.log(products.sort())
console.log(" ")

// Ejemplo 16. Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejem16. Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending