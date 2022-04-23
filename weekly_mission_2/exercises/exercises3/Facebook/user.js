// Convirtiendo objeto user a definición de clase User

export default class User{
    constructor(name, lastName, nickName, bio, age, birthday){
    this.name = name
    this.lastName = lastName
    this.nickName = nickName
    this.bio = bio
    this.age = age
    this.birthday = birthday
    }

    getGeneralInfo(){
        return `The user ${this.name} ${this.lastName}, her birthday is ${this.birthday}`
    }
    getNameAndNickname(){
        return `${this.name} have the nickname ${this.nickName} on her facebook`
    }
}
