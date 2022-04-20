const repo = {
    name: "LaunchX",
    author: "GloriaCoralCerecedo",
    languaje: "JavaScript",
    numberOfCommits: 100,
    stars: 50,
    forks: 30,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function() {
        return this.issues_open + this.issues_open
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log(repo)
console.log("------------------------------------------")
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

