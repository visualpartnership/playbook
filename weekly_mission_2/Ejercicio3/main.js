class Repo{
    constructor(name,author,language,numberOfCommit,stars,forks,issues_open,issues_close){
        this.name= name;
        this.author= author;
        this.language= language;
        this.numberOfCommit= numberOfCommit;
        this.stars= stars;
        this.forks= forks;
        this.issues_open= issues_open;
        this.issues_close= issues_close;
    }
    getTotalIssues(){
        return `Total: ${this.issues_open + this.issues_close}`
    }
    getGeneralInfo(){
        return `This repository ${this.name} was create by ${this.author}`;
    }
}
const Fulanito = new Repo('Fulanito','Fulanote','Es',5,1,1,3,3);
console.log(Fulanito);
console.log(Fulanito.getGeneralInfo());
console.log(Fulanito.getTotalIssues());

class Issue{
    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdate){
        this.title= title;
        this.repositoryNameAssociated= repositoryNameAssociated;
        this.stars= status;
        this.numberOfComments= numberOfComments;
        this.labels= labels;
        this.author= author;
        this.dateCreated= dateCreated;
        this.lastUpdate= lastUpdate;
    }
    getTitleAndAuthor(){
        return `Repositorio from ${this.repositoryNameAssociated} created by ${this.author} title: ${this.title}`;
    }
    getGeneralInfo(){
        return `${this.title} of ${this.repositoryNameAssociated} week: ${this.status} author: ${this.author}`;
    }
}

const Felipe= new Issue('Repo','LaunchX','Actived',10,1,'Felipe','16/04/2022','16/04/2022');
console.log(Felipe);
console.log(Felipe.getGeneralInfo());
console.log(Felipe.getTitleAndAuthor());

class PullRequest{
    constructor(title,author,branchName,dateCreated,status,repositoryNameAssociated){
        this.title= title;
        this.author=author
        this.branchName= branchName;
        this.dateCreated= dateCreated;
        this.status= status;
        this.repositoryNameAssociated= repositoryNameAssociated;
    }
    getStatus(){
        return `${this.title} status: ${this.status}`;
    }
    getTitleAndAuthor(){
        return `${this.title} author: ${this.author}`;
    }
}
const pull= new PullRequest('Backend','HéctorBusSan','Master','16/04/2022','Actived','LaunchX');
console.log(pull);
console.log(pull.getStatus());
console.log(pull.getTitleAndAuthor());