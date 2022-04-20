//Modelado de información a Objeto JS

//Modelado de GitHub => issue

const issue = {
    title: "Modelado Información a Objetos JS",
    repositoryNameAssociated: "LaunchX-InnovaccionVirtual",
    status: "OPEN",
    numberOfComments: 50,
    labels: ['Modelado', 'Objetos', 'JS'],
    author: "GloriaCoralCerecedo",
    dateCreated: "20 de abril del 2022 a las 18:23 p.m",
    lastUpdated: new Date (),
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `This issue was created the ${this.dateCreated}, this status is ${this.status}, your last update was ${this.lastUpdated} `
    }
}
console.log(issue)
console.log("-------------------------------------------")
console.log("Labels: " + issue.labels)
console.log("-------------------------------------------")
console.log(issue.getTitleAndAuthor())
console.log("-------------------------------------------")
console.log(issue.getGeneralInfo())