//Modelado de información a Objeto JS

//Modelado de Facebook => biography

const biography = {
    author: "Gloria Coral Cerecedo",
    friends: 500, 
    photos: 200,
    academicTrainig: "TECNM Campues Chetumal", 
    placeResidence: "Quintana Roo",
    placeOrigin: "Mérida",
    emotionalSituation: "Single",
    getGeneralInfo: function(){
       return `The profile of ${this.author}, shows academic trainig in the ${this.academicTrainig} and place of residence in ${this.placeResidence}`
    },
    getTotalFriendAndPhotos: function(){
        return this.friends + this.photos
    }   
}
console.log(biography)
console.log("---------------------------------------------")
console.log("Place of origin " + biography.placeOrigin)
console.log("---------------------------------------------")
console.log("The sum of friend and photos is " + biography.getTotalFriendAndPhotos())
console.log("---------------------------------------------")
console.log(biography.getGeneralInfo())