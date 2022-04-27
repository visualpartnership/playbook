console.log(`------Clases / Objetos------`);
console.log(`----POO-----`);
// objetos js
const woopa_obj={
    name:"Woppa",
    mission:"Node JS",
    age:"12",
    color:"pink"
}
console.log(`----Class----`);
class Ajolote{
    constructor(name, mission, age, color){
        this.name= name;
        this.mission= mission;
        this.age= age;
        this.color= color;
    }
    sayHello(){
        return `Hey! Hello ${this.name}`;
    }
}

console.log(Ajolote);

const woopa= new Ajolote("Woopa","Node JS",18,"Pink");

const wooper= new Ajolote("Wopper","Java",10,"blue");
// const woopy= new Ajolote();
console.log(woopa);
console.log(woopa.sayHello());

console.log(wooper.name);
// console.log(woopy);

// const woopa_obj_js={};
// console.log(`Objeto js`)
// console.log(woopa_obj_js);

class Pokemon{
    constructor(name){
        this.name= name;
    }
    sayHello(){
        return `${this.name} saying Hello!!`;
    }
}
const pikachu= new Pokemon("Pikachu");
console.log(pikachu.sayHello());