import Issue from './issue.js'
import PullRequest from  './pullrequest.js'
import Repositorio from './repo.js'

console.log(Repositorio)
console.log("--------------------------------------------")
const repo1 = new Repositorio("Lauchx", "GloriaCoralCerecedo", "JavaScript", 100, 50, 30, 10, 10)
console.log(repo1)
console.log("////////////////////////////////////////////")
console.log("Nombre del repo: " + repo1.name)
console.log("Issues totales: " + repo1.getTotalIssues())
console.log(repo1.getGeneralInfo())
console.log("********************************************")
console.log(Issue)
console.log("--------------------------------------------")
const issue1 = new Issue("Modelado Información a Objetos JS", "LaunchX-InnovaccionVirtual","OPEN", 50, 
['Modelado', ' Objetos', ' JS'], "GloriaCoralCerecedo","20 de april 2022 a las 18:23 p.m"
    )
console.log(issue1)
console.log("////////////////////////////////////////////")
console.log("Labels: " + issue1.labels)
console.log(issue1.getTitleAndAuthor())
console.log(issue1.getGeneralInfo())
console.log("********************************************")
console.log(PullRequest)
console.log("--------------------------------------------")
const pullrequest1 = new PullRequest(
    "Enviando el blog de lauch-x-explorers", "GloriaCoralCerecedo", "main",  "OPEN", "visualpartnership"
    )
console.log(pullrequest1)
console.log("////////////////////////////////////////////")
console.log("Repository Name Associated: " + pullrequest1.repoNameAssociated)
console.log(pullrequest1.getStatus())
console.log(pullrequest1.getTitleAndAuthor())
console.log(pullrequest1.getGeneralInfo())