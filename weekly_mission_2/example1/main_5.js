const objMP = {
    github: "@LuisVelazque",
    saygitgub: function(yourobjMP){
      console.log(`El Github de ${yourobjMP} es ${this.github}`)
    }
  }
  
  console.log("Objeto con método que recibe parámetros")
  objMP.saygitgub("Luis")