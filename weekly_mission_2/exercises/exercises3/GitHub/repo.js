// Convirtiendo objeto repo a definición de clase Repositorio

export default class Repositorio{
    constructor(name, author, languaje,  numCommits,  stars,  forks,  issuesOpen, issuesClose){
    this.name = name
    this.author = author
    this.languaje = languaje
    this.numCommits = numCommits
    this.stars = stars
    this.forks = forks
    this.issuesOpen = issuesOpen
    this.issuesClose = issuesClose       
    }

    getTotalIssues(){
        return this.issuesOpen + this.issuesClose
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}