
const explorers = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const v2 = explorers.filter((aca) => 
  aca.includes('land') 
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(v2)
const final = explorers.filter((aca) => aca.endsWith('en'))
console.log("Ejemplo 7: Paises que terminan en land")
console.log(final)