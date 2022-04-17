export default class Pokemon{
    constructor(name){
        this.name= name;
    }
    sayHello(){
        console.log(`${this.name} dice Hello!!!`);
    }
}