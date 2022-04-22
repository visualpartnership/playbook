//Modelado de información a Objeto JS

//Modelado de Facebook => post

const post = {
    author: "Gloria Coral Cerecedo",
    description: "Hi, I'm learning to use Git and Githb. l love it <3",
    privacyPost: "Public",
    location: "Quintana Roo",
    tagPerson: "Nicole Rojas",
    feeling:"Happy",
    activity: "Celebrating",
    colorPost: "Red",
    getAuthorAndDescription: function(){
        return `In the Facebook of ${this.author} public a new post that say ${[this.description]}`
    },
    getGeneralInfo: function(){
        return `The features of the post of ${this.author} are: tag a person ${this.tagPerson}, location ${this.location} and the color of post is ${this.colorPost}`
    }
}
console.log(post)
console.log("--------------------------------------------")
console.log("Feeling" + post.feeling + "Activity" + post.activity)
console.log("--------------------------------------------")
console.log(post.getAuthorAndDescription())
console.log("--------------------------------------------")
console.log(post.getGeneralInfo())
