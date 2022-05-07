const Wattpad = {
    user: "@FannyRM",
    name: "Estefanía Ramírez",
    published: 9,
    drafts: 50, 
    reading_list: 10,
    followers: 205,
    following: 49,
    notifications: 56,
    messages: 76,
    conversations: 39,
    about_it: "Bienvenid@ a mi perfil de Wattpad...",
    Works: function(){
      return this.published + this.drafts
    },
    Administrador: function(){
      return `Esta cuenta es administrada por: ${this.user}`
    }
   }
   
   console.log(`${Wattpad.user} pertenece a ` + Wattpad.name)
   console.log(`Ella tiene ${Wattpad.published} libros publicados en la plataforma y ${Wattpad.drafts} en borradores. En total tiene ${Wattpad.Works()} libros` )
   console.log(`Tiene ${Wattpad.followers} seguidores en su cuenta`)
   console.log(`Sigue a ${Wattpad.following} escritores como ella`)
   console.log(Wattpad.Administrador())
   