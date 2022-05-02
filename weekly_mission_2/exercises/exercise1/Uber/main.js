const user = {
    name: "Luis Enrique",
    rewards: 1000,
    Method: "Tarjeta",
    estr: 5,
    email: "mail@example.com",
    address: "No especificado",
    getRate: function(){
        return `${this.name} tiene calificacion ${this.estr}/5 estrellas`
    },
    getGeneralInfo: function(){
      return `El usuario ${this.name} vive en ${this.address}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getRate())
   console.log(user.getGeneralInfo())