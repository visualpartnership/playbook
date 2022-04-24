class Spiderman {
    constructor(name, age, actor, numMovies, cinemaStudio){
        this.name = name
        this.age = age
        this.actor = actor
        this.numMovies = numMovies
        this.cinemaStudio = cinemaStudio
    }
    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.cinemaStudio} studios`
    }
}

module.exports = Spiderman