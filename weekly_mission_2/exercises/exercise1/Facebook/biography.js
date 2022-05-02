const user ={
    userName:"Luis Enrique Velazquez Gonzalez",
    postNUm:"56",
    getUserNameanpost:function(){
        return `${this.userName} tiene ${this.postNUm} posts`
    },
   
}
console.log("Nombre del usuario: "+user.userName)
console.log("Post: "+user.postNUm)
console.log(user.getUserNameanpost())
