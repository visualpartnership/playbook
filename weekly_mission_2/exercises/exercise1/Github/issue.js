const issue = {
    title:"Mi primer issue",
    repositorio:"LaunchX",
    status:"Abierto",
    NumComn:10,
    author:"Luis Enrique Velazquez Gonzalez",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    labels: ["bug", "duplicate", "invalid"],
    getTitleAndAuthor: function(){
        return `Este Issue ${this.title} es creado por ${this.author}`
},
getGeneralInfo: function(){
    return `Este issue ${this.title} esta associdos al ${this.repositorio} respositorios`
  }
 }
 
 console.log("Nombre del issue: " + issue.title)
 console.log("Labels: " + issue.labels)
 console.log(issue.getTitleAndAuthor())
 console.log(issue.getGeneralInfo())