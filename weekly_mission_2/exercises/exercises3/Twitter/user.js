// Convirtiendo objeto user a definición de clase User

export default class User{
    constructor(name, username, bio, age, location, joined){
    this.name = name
    this.username = username
    this.bio = bio
    this.age = age
    this.location = location
    this.joined = joined
    }

    getUsernameAndBio(){
        return `This username ${this.username} show in his/her bio ${this.bio} `
    }
    getNameAndAge(){
        return `This user ${this.name} have ${this.age} years`
    }
}