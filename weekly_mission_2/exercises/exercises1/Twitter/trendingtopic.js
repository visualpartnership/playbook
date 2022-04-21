//Modelado de información a Objeto JS

//Modelado de Twitter => trendingtopic

const trendingtopic = {
    ranking: 25,
    category: "Music",
    tag: "Lenny Kravitz",
    hashtag: ['song', 'music'],
    tweets: 4735,
    getRankingAndCategory: function(){
        return `In the ranking ${this.ranking} this the category ${this.category}`
    },
    getGeneralInfo: function(){
        return `The tag ${this.tag} this in the ranking number ${this.ranking} with ${this.tweets} tweets`
    }
}
console.log(trendingtopic)
console.log("---------------------------------------------")
console.log(trendingtopic.hashtag)
console.log("---------------------------------------------")
console.log(trendingtopic.getRankingAndCategory())
console.log("---------------------------------------------")
console.log(trendingtopic.getGeneralInfo())