import User from './user.js'
import TrendingTopic from './trendingtopic.js'
import Hashtag from './hashtag.js'

console.log(User)
console.log("---------------------------------------------")
const user1 = new User("Jade", "@Jade99", 
    "Hi my names is Jade and i like the CHOCOLATE <3", 18,
    "Monterrey", "Jun 2017")
console.log(user1)
console.log("/////////////////////////////////////////////")
console.log("Joined in " + user1.joined)
console.log(user1.getUsernameAndBio())
console.log(user1.getNameAndAge())
console.log("*********************************************")

console.log(TrendingTopic)
console.log("---------------------------------------------")
const trendTopic1 = new TrendingTopic(5, "Movie", "Ruby Rose", ['movie', 'action'], 890)
console.log(trendTopic1)
console.log("/////////////////////////////////////////////")
console.log(trendTopic1.hashtag)
console.log(trendTopic1.getRankingAndCategory())
console.log(trendTopic1.getGeneralInfo())
console.log("*********************************************")

console.log(Hashtag)
console.log("---------------------------------------------")
const hashtag1 = new Hashtag("Movie", "MovieActionAreCool", 5035)
console.log(hashtag1)
console.log("/////////////////////////////////////////////")
console.log("The top phrase in this moment is " + hashtag1.getPhrase())
console.log(hashtag1.getGeneralInfo())