// primero exportamos la función del mensaje
export function log (message){
    console.log(message);   
}

export const DEFAULT_LEVEL = 'info';

export const LEVELS ={
    error:0,
    debug:1,
    warn:2,
    data:3,
    info:4,
    verbose:5
}

export class Logger{
    constructor(name){
        this.name = name
    }
    log(message){
        console.log(`[${this.name}] ${message}`);
    }
}