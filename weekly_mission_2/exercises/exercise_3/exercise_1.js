class repo {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
      this.name = name, 
      this.author = author, 
      this.language = language, 
      this.numberOfCommits = numberOfCommits,
      this.stars = stars,
      this.forks = forks,
      this.issues_open = issues_open,
      this.issues_close = issues_close
  }
}
const r1 = new repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10)

console.log(r1)
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + (repo.issues_open + repo.issues_close))
