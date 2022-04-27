import Explorer from "./explorer.js";

export default class Viajero extends Explorer{
    constructor(name,username,mission,cycle){
        super(name,username,mission)
        this.cycle= cycle;
    }
    getGeneralInfo(){
        let nameAndUsername= this.getNameAndUserName();
        return `${nameAndUsername}, Ciclo ${this.cycle}`;
    }
}