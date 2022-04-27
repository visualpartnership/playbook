<<<<<<< HEAD
// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
=======
// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
  console.log(myRepo.getInfo())