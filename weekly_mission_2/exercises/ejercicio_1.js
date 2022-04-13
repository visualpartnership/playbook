const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

const issue={
    title: "Problema1",
    repositoryNameAssociated: "playbook",
    status: "Activo",
    numberOfComments: 3,
    labels: 5,
    author: "KevinSalgado",
    dateCreated: "12 Abril 2022",
    lastUpdated: "12 Abril 2022",

    getTitleAndAuthor: function(){
        return this.title;
    },
    getGeneralInfo: function(){
        return `This title of this issue is ${this.title} and his status is ${this.status}`
    }
}

console.log("\n")

console.log("Autor del issue: "+issue.author)
console.log(issue.getGeneralInfo())
   
   
   
const PullRequest={
    title: "TraCorregido",
    author: "Kevin",
    branchName: "main",
    dateCreated: "4 abril 2022",
    status: "activo",
    repositoryNameAssociated: "playbook",

    getStatus: function(){
        return this.status;
    },
    getTitleAndAuthor: function(){
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

console.log("\n")
console.log("Status del PR: "+PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())