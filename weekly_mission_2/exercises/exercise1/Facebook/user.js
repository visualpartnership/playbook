const user ={
    userName:"Luis Enrique Velazquez Gonzalez",
    userLink:"https://www.facebook.com/user",
    NuMFriends:138,
    city:"Cuautla",
    gender:"Hombre",
    school:"ITC",
    getUserNameandCity:function(){
        return `${this.userName} tiene ${this.NuMFriends} amigos`
    },
    getinformtion:function(){
        return `${this.userName} estudio en el ${this.school} en la ciudad de ${this.city}`
    }
}
console.log("Nombre del usuario: "+user.userName)
console.log("Facebook link: "+user.userLink)
console.log(user.getUserNameandCity())
console.log(user.getinformtion())