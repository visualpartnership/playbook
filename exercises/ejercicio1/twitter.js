const user = {
    nombre: "Yael Villarreal",
    usuario: "@iaeloko",
    trending_topic: "Cripto",
    hashtag: ["#btc","#eth","#solana"],

    getUser: function(){
        return `Nombre:${this.nombre} Usuario: ${this.usuario}`
      },

    getTopingHashtag: function(){
        return ` Principal tending topic: ${this.trending_topic}. Principales Hashtag: ${this.hashtag}`
      },

}

console.log("Perfil de usuario en Twitter")
console.log(user.getUser())
console.log(user.getTopingHashtag())