// Convirtiendo objeto issue a definición de clase Issue

export default class  Issue{
    constructor(title, repoNameAssociated, status, numberCommits, labels, author, dateCreated){
        this.title = title
        this.repoNameAssociated = repoNameAssociated
        this.numberCommits = numberCommits
        this.status = status
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdate = new Date()
    }

    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`
    }
    getGeneralInfo(){
        return `This issue was created the ${this.dateCreated}, this status is ${this.status}, your last update was ${this.lastUpdate} `
    }

}