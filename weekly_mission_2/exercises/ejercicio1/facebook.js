const user = {nombre: "Yael", edad: 32, usuario: "iaeloko", post: "Este es un ejemplo de post", biography: "este es un ejemplo de biografía",

getUser: function(){
    return `Nombre:${this.nombre} Usuario: ${this.usuario} Edad: ${this.edad}`
  },

getPost: function(){
    return ` Úlimo post: ${this.post}`
  },

getBio: function(){
    return ` Biografía del perfil: : ${this.biography}`
  },

}

console.log(user.getUser())
console.log(user.getPost())
console.log(user.getBio())
