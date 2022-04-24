//Modelado de información a Objeto JS

//Modelado de Twitter => hashtag

const hashtag = {
    word: "Music",
    phrase: "MusicIsLove",
    numTweetsLastHour: 2000,
    getGeneralInfo: function(){
        return `This # ${this.word} have ${this.numTweetsLastHour} of tweets in the last hour`
    },
    getPhrase: function(){
        return this.phrase
    }
}
console.log(hashtag)
console.log("--------------------------------------------")
console.log("The top phrase in this moment is " + hashtag.getPhrase())
console.log("--------------------------------------------")
console.log(hashtag.getGeneralInfo())
