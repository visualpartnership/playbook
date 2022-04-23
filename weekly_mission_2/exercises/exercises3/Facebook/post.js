// Convirtiendo objeto post a definición de clase Post

export default class Post{
    constructor(author, description, privacyPost, location, tagPerson, feeling, activity, colorPost){
    this.author = author
    this.description = description
    this.privacyPost = privacyPost
    this.location = location
    this.tagPerson = tagPerson
    this.feeling = feeling
    this.activity = activity
    this.colorPost = colorPost
    }

    getAuthorAndDescription(){
        return `In the Facebook of ${this.author} public a new post that say ${[this.description]}`
    }
    getGeneralInfo(){
        return `The features of the post of ${this.author} are: tag a person ${this.tagPerson}, location ${this.location} and the color of post is ${this.colorPost}`
    }
}
