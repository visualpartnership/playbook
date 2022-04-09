export default class pokemon{
    constructor(name){
        this.name=name;
    }

    sayHello(){
        console.log("Mi Pokemon "+this.name+" te dice hola");
    }

    sayMessage(message){
        console.log('Mi pokemon '+this.name+' te dice: '+message);
    }
}


