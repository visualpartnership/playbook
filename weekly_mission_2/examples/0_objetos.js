console.log('////////Ejercicio 1//////////');
const objet1={};
console.log('-----Objeto vacio------');
console.log(objet1);
console.log('------Objeto con propiedades------');
const objet2={
    name: 'Héctor',
    apellido: 'Bustos',
    skills: 'FullStack',
    specialties:{
        missions:['frontend','Backend'],
        speciality: ['Web','Mobile']
    }
} 
// console.log(objet2.specialties.missions[1])
console.log(objet2);
console.log('------Objeto con Metodo------');
const objeto3={
    name: 'Héctor',
    myMethod: function(){
        return `Hola ${this.name}`;
    }
}
console.log(objeto3);
console.log(objeto3.myMethod());
console.log('------Objeto que reciba parametros------');
let myCar = new Object();
myCar.make = 'Ford';
myCar.model= 'Mustang';
myCar.year= 1987;
console.log(myCar);