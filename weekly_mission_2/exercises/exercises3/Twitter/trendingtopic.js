// Convirtiendo objeto trendingtopic a definición de clase TrendingTopic

export default class TrendingTopic{
    constructor(ranking, category, tag, hashtag, tweets){
    this.ranking = ranking
    this.category = category
    this.tag = tag
    this.hashtag = hashtag
    this.tweets = tweets
    }

    getRankingAndCategory(){
        return `In the ranking ${this.ranking} this the category ${this.category}`
    }
    getGeneralInfo(){
        return `The tag ${this.tag} this in the ranking number ${this.ranking} with ${this.tweets} tweets`
    }
}