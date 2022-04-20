//Modelado de información a Objeto JS

//Modelado de GitHub => pull_request

const pullrequest = {
    title: "Enviando el blog de lauch-x-explorers",
    author: "GloriaCoralCerecedo",
    branchName: "main",
    dateCreated: new Date(),
    status: "OPEN",
    repositoryNameAssociated: "visualpartnership",
    getStatus: function(){
        return `The status is ${this.status}`
    },
    getTitleAndAuthor: function(){
            return `This pullrequest ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `This pullrequest was created ${this.dateCreated} in the brach ${this.branchName}`
    }
}
console.log(pullrequest)
console.log("-------------------------------------------")
console.log("Repository Name Associated: " + pullrequest.repositoryNameAssociated)
console.log("-------------------------------------------")
console.log(pullrequest.getStatus())
console.log("-------------------------------------------")
console.log(pullrequest.getTitleAndAuthor())
console.log("-------------------------------------------")
console.log(pullrequest.getGeneralInfo())