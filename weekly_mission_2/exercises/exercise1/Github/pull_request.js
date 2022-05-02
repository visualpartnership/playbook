const pullRequest = {
    title: "Mi pull request",
    branchName: "main",
    dateCreated: new Date(),
    status: "Open",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return `This pull request is ${this.status} on branch ${this.branchName}`
    },
    getTitleAndAuthor: function(){
        return `This pull request ${this.title} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Nombre del pull request: " + pullRequest.title)
   console.log("Status: " + pullRequest.status)
   console.log(pullRequest.getTitleAndAuthor())
   console.log(pullRequest.getStatus())