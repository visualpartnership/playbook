console.log("Operadores")

console.log("--------------------------------------------------------")

console.log("Ejemplo 8: Filtrar una lista por condicional")

console.log("--------------------------------------------------------")

const scores = [
    {name: 'A', score: 95},
    {name: 'L', score: 98},
    {name: 'M', score: 80},
    {name: 'E', score: 50},
    {name: 'M', score: 85},
    {name: 'J', score: 100},
]
const scoresGreaterEighty = scores.filter((score) => score.score >80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)
const scoresGreaterEighty0 = scores.filter((score) => score.score >80 && score.score <100)
console.log("Ejemplo 8: Filtrando elementos por score agregando el operador lógico and")
console.log(scoresGreaterEighty0)