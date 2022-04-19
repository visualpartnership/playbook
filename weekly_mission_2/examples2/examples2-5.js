console.log("Clases y objetos")

console.log("----------------------------------------------")

console.log("Ejemplo 5: Atributos con valores por default")

console.log("----------------------------------------------")

class PullRequest{
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
const myPR1 = new PullRequest("IntroJS", "Mi primer PR", 50)
console.log(myPR1.getInfo())
console.log("----------------------------------------------")
// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 100)
console.log(myPR2.getInfo())