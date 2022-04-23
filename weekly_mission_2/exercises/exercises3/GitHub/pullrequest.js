// Convirtiendo objeto pullrequest a definición de clase PullRequest

export default class PullRequest{
    constructor(title, author, branchName, status, repoNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = new Date()
        this.status = status
        this.repoNameAssociated = repoNameAssociated
    }

    getStatus(){
        return `The status is ${this.status}`
    }
    getTitleAndAuthor(){
            return `This pullrequest ${this.title} was created by ${this.author}`
    }
    getGeneralInfo(){
        return `This pullrequest was created ${this.dateCreated} in the brach ${this.branchName}`
    }
}