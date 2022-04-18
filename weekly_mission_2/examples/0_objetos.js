// 1) crear un objeto vacio
const computadora1 = {}

// 2) crear un objeto con propiedades
const computadora2 = {
    color: "negra",
    marca: "hp"
}

// 3) crear un objeto con propiedades diferentes
const computadora3 = {
    color: "negra",
    marca: "hp",
    compra: 2014,
    partes: ["cpu", "monitor", "mouse", "teclado"]
}

// 4) crear un objeto con metodos
const computadora4 = {
    color: "negra",
    marca: "hp",
    compra: 2014,
    partes: ["cpu", "monitor", "mouse", "teclado"],

    iniciar() {
        return console.log("boton para iniciar")
    },

    apagar() {
        return console.log("boton para apagar")
    }

}

// 5) crear un objeto que reciba parametros
const computadora5 = {
    color: "negra",
    marca: "hp",
    compra: 2014,
    partes: [
        "cpu", 
        "monitor", 
        "mouse", 
        "teclado"
    ],

    iniciar: function() {
        return console.log("boton para iniciar")
    },

    apagar: function() {
        return console.log("boton para apagar")
    },

    userName: function(name) {
        return console.log(`Holaaaaaaa ${name}`)
    }

}


// probando

console.log(computadora1)

console.log(computadora2)

console.log(computadora3)

console.log(computadora4)
computadora4.iniciar()
computadora4.apagar()

console.log(computadora5)
computadora5.userName("Fernando")
