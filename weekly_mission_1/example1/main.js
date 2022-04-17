let myCar = new Object();
myCar.make= 'Ford';
myCar.model= 'Mustang';
myCar.year= 1969;

console.log(myCar);

const myModule=(()=>{
const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
const baz = "Soy un valor que va a ser expuesto"
const privateBar=[1,2,3,4]

const exported={
publicFoo: "Valor publico pueden verme desde donde me llamen",
publicBar: "Otro valor publico",
publicBaz:"baz"
}
return exported
})()
console.log(myModule);
console.log(myModule.publicBar);
// lo que exportemos podremos verlo y ocultar o encapsular información especifica
// en el caso de lo privado va aparecer undefined
