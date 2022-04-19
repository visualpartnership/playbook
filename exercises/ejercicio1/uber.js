const userUber = {
    nombre: "Yael Villarreal",
    stars: 5,
    profile: "Ejemplo de perfil de Uber para Yael",
    travel: "Condesa - Coyoacán",

    getUser: function(){
        return `Nombre: ${userUber.nombre} Estrellas: ${userUber.stars} Perfil: ${userUber.profile} Último viaje: ${userUber.travel}`
    }
}
console.log(userUber.getUser())