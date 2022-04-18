console.log("Objetos")

console.log("--------------------------------------------")

console.log("Ejemplo 3: Objeto con diferentes propiedades")

console.log("--------------------------------------------")

const myObject3 = {
    name: "Botas",
    age: 4,
    nicknames: [
        "Papi",
        "Pechugo",
        "Bebé"
    ], 
// A partir de acá hace que la estructura líneal sea diferente
    address: {
        zip_code: "70000",
        street: "Colonia Sian-Kaan II",
        city: "Chetumal, Quintana Roo"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3.nicknames)
console.log(myObject3.address)
//console.log(myObject3[address]) -> Error al imprimir (ReferenceError: address is not defined)
console.log(myObject3["address"]) 
