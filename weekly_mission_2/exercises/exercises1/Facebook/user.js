//Modelado de información a Objeto JS

//Modelado de Facebook => user

const user = {
    name: "Gloria",
    lastName: "Coral Cerecedo",
    nickName: "Glo",
    bio: "Ing en TICS",
    age: 23,
    birthday: "21/03/1999",
    getGeneralInfo: function (){
        return `The user ${this.name} ${this.lastName}, her birthday is ${this.birthday}`
    },
    getNameAndNickname: function(){
        return `${this.name} have the nickname ${this.nickName} on her facebook`
    }
}
console.log(user)
console.log("---------------------------------------------")
console.log(user.bio)
console.log("---------------------------------------------")
console.log(user.getGeneralInfo())
console.log("---------------------------------------------")
console.log(user.getNameAndNickname())