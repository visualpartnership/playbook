// Convirtiendo objeto biography a definición de clase Biography

export default class Biography{
    constructor(author, numFriends, numPhotos, academicTrainig, placeResidence, placeOrigin, emotionalSituation){
    this.author = author
    this.numFriends = numFriends
    this.numPhotos = numPhotos
    this.academicTrainig = academicTrainig
    this.placeResidence = placeResidence
    this.placeOrigin = placeOrigin
    this.emotionalSituation = emotionalSituation
    }

    getGeneralInfo(){
        return `The profile of ${this.author}, shows academic trainig in the ${this.academicTrainig} and place of residence in ${this.placeResidence}`
     }
     getTotalFriendAndPhotos(){
         return this.numFriends + this.numPhotos
     }  
}