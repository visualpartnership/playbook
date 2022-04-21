//Modelado de información a Objeto JS

//Modelado de Twitter => user

const user = {
    name: "Gloria",
    username: "@Gloria210399",
    bio: "Ingeniera en TICS",
    age: "23",
    location: "Chetumal",
    joined: "March 2020",
    getUsernameAndBio: function(){
        return `This username ${this.username} show in his/her bio ${this.bio} `
    },
    getNameAndAge: function(){
        return `This user ${this.name} have ${this.age} years`
    }
}
console.log(user)
console.log("--------------------------------------------")
console.log("Joined in " + user.joined)
console.log("--------------------------------------------")
console.log(user.getUsernameAndBio())
console.log("--------------------------------------------")
console.log(user.getNameAndAge())