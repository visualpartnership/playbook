const user ={
    userName:"Luis Enrique Velazquez Gonzalez",
    post:"Foto de perfil",
    like:13,
    date:"26 de septiembre de 2021",
    getUserNameandlike:function(){
        return `${this.userName} tiene ${this.like} likes`
    },
    getinformtion:function(){
        return `${this.userName} subio su  ${this.post} la fecha ${this.date}`
    }
}
console.log("Nombre del usuario: "+user.userName)
console.log("Post: "+user.post)
console.log(user.getUserNameandlike())
console.log(user.getinformtion())