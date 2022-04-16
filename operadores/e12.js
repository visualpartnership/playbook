const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]

const score_less_than_80 = scores12.filter((elemento) => elemento.score > 80)
  console.log("Ejemplo12")


 
  const letraInicial = score_less_than_80.map((elemento) => elemento.name)
  console.log(letraInicial)