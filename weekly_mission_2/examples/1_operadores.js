console.log('////////Ejercicio 2//////////');
const explorers=[{
    name: 'Explorer 1',
    excersises_complete:10,
    rate:100,
    city: 'New York',
    stack: ['Javascript','React','Node'],
    missions: {
        onboarding:{
            isFinished: true,
            excersiceFinished: true,
        },
        frontend:{
            isFinished: true,
            excersiceFinished: true,
        },
        backend:{
            isFinished: false,
            excersiceFinished: false,
        }
    }
},{
    name: 'Explorer 2',
    excersises_complete:10,
    rate:100,
    city: 'Chicago',
    stack: ['Javascript','Node'],
    missions: {
        onboarding:{
            isFinished: true,
            excersiceFinished: true,
        },
        frontend:{
            isFinished: true,
            excersiceFinished: true,
        },
        backend:{
            isFinished: false,
            excersiceFinished: false,
        }
    }
},{
    name: 'Explorer 3',
    excersises_complete:10,
    rate:100,
    city: 'New York',
    stack: ['Javascript','React'],
    missions: {
        onboarding:{
            isFinished: true,
            excersiceFinished: true,
        },
        frontend:{
            isFinished: true,
            excersiceFinished: true,
        },
        backend:{
            isFinished: false,
            excersiceFinished: false,
        }
    }
}]
console.log(explorers);
console.log(`------Each-------`);
// nos muestra cada uno de los nombres
explorers.forEach(explorer=> {
    console.log(explorer.name);
    console.log(explorer.stack);
});

console.log(`------Map-------`);
// crea una nueva lista de archivos
const explorerStack=explorers.map(explorer_in_list=>explorer_in_list.stack);
console.log(explorerStack);

console.log(`------Filter------`);
const explorer_with_js= explorers.filter(explorer_in_list=>explorer_in_list.stack.includes('React'));
console.log(explorer_with_js);
// donde este la palabra React en el stack

console.log(`------Find------`);
const first_explorer_in_NewYork= explorers.find(explorer_NewYork=>explorer_NewYork.city ==='New York');
console.log(first_explorer_in_NewYork);
// encuentras al explorer con la ciudad New York

console.log(`------Reduce------`);
const all_excersice= explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.excersises_complete,0)
// valor por defecto 0 y va aumentando en blucle en el acc
console.log(all_excersice);

// const ig = {
//     name:"User Name",
//     username:"username",
//     followers:100,
//     following: 20,
//     total_post: 50,
// }

console.log(`------Sumatoria------`)
let numbers=[1,2,3];

let sum= numbers.reduce(function(previusValue,currentValue){
    return previusValue + currentValue;
});
console.log(sum);