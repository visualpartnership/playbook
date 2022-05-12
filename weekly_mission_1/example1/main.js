console.log('holis bolis');

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Chevrolet'; // Guardando un valor dentro del objeto creado
myCar.model = 'Aveo';
myCar.year = 2017;
console.log(myCar);

const myModule = (() => {

// Variables de contexto local
	const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
	const privateBar = [1,2,3,4]
	const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
	const exported = {
		publicFoo: "Valor público, pueden verme desde donde me llamen",
		publicBar: "Otro valor público",
		publicBaz: baz
	}

// Exposición de variables locales
	return exported
})()

console.log(myModule)