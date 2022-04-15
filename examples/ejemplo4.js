const pet = {
    name: "Mushu",

    sayhello: function() {
        
        console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 4: Objeto con métodos")
pet.sayhello()
