import User from './user.js'
import Post from './post.js'
import Biography from './biography.js'

console.log(User)
console.log("--------------------------------------------")
const user1 = new User("Jason", "Ramírez López", "Jason21",
    "Hi, my name is Jason and i like the programming",
    20, "01/12/2002")
console.log(user1)
console.log("////////////////////////////////////////////")
console.log(user1.bio)
console.log(user1.getGeneralInfo())
console.log(user1.getNameAndNickname())
console.log("********************************************")

console.log(Post)
console.log("--------------------------------------------")
const post1 = new Post("Jason Ramírez López", 
    "In this post I would like to talk about my passion, which is programming, especially the JS language.",
    "Public", "Mexico City", "Diana López", "Excited", "Collaborating with...","Blue")
console.log(post1)
console.log("////////////////////////////////////////////")
console.log("Feeling: " + post1.feeling + " , Activity: " + post1.activity)
console.log(post1.getAuthorAndDescription())
console.log(post1.getGeneralInfo())
console.log("********************************************")

console.log(Biography)
console.log("--------------------------------------------")
const bio1 = new Biography("Jason Ramírez López", 1000, 500, "TECNM Campus",
    "Mexico city", "Oaxaca", "In a relationship")
console.log(bio1)
console.log("////////////////////////////////////////////")
console.log("Place of origin " + bio1.placeOrigin)
console.log("The sum of friend and photos is " + bio1.getTotalFriendAndPhotos())
console.log(bio1.getGeneralInfo())