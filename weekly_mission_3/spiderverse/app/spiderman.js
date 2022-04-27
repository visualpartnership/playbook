class Spiderman{ 
    constructor (name, age, actor, movies, studio){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }
    getInfo () {
        // console.log(`Hey, I'm ${this.name} from ${this.studio} studio`)
        return (`Hey, I'm ${this.actor} from ${this.studio} studio`)
    }



}

module.exports = Spiderman