const PullRequest = {
    title: "Título de ejemplo",
    branchName: "Rama segunda",
    dateCreated: "18 de Abril 2022",
    status: "Activo",
    repositoryNameAssociated: "NombreRepoX",
    author: "Yael Villarreal",

    getStatus: function(){
        return `El estado del repositorio es: ${this.status}`
      },

    getTitleAndAuthor: function(){
        return ` Nombre del repositorio: ${this.title}. Autor: ${this.author}`
      },
}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())






