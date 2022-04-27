<<<<<<< HEAD
// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
      this.repo = repo
      this.title = title
      this.lines_changed = lines_changed
      this.status = "OPEN"
      this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
      }
  
    getInfo(){
      return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
  }
  
  console.log("Ejemplo 5: Atributos con valores por default")
  const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
  console.log(myPR1.getInfo())
  
  // Puedes instanciar n cantidad de objetos de la misma clase
  const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
=======
// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
      this.repo = repo
      this.title = title
      this.lines_changed = lines_changed
      this.status = "OPEN"
      this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
      }
  
    getInfo(){
      return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
  }
  
  console.log("Ejemplo 5: Atributos con valores por default")
  const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
  console.log(myPR1.getInfo())
  
  // Puedes instanciar n cantidad de objetos de la misma clase
  const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
  console.log(myPR2.getInfo())