const issues = {
    title: "Titulo X",
    repositoryNameAssociated: "Repo_prueba",
    status: "Activo",
    numberOfComments: 666,
    labels: 420,
    author: "Yael Villarreal",
    dateCreated: "18 de Abril 2022",
    lastUpdated: "18 de Abril 2022",

    getTitleAndAuthor: function(){
        return ` ${this.title} , ${this.author}`
      },
    getGeneralInfo: function(){
        return `Nobre del repo es: ${this.repositoryNameAssociated}, fué creado por: ${this.author} el día: ${this.dateCreated} `
      }
}

console.log("Nombre del repo:" + issues.title)
console.log("Número de comentarios:" + issues.numberOfComments)
console.log("Tiúlo y Autor: " + issues.getTitleAndAuthor())
console.log(issues.getGeneralInfo())


