class Wattpad{
    constructor(user, name, published, drafts, reading_list, followers, following, notifications, messages, conversations, about_it){
        this.user = user,
        this.name = name, 
        this.published = published, 
        this.drafts = drafts, 
        this.reading_list = reading_list,
        this.followers = followers,
        this.following = following,
        this.notifications = notifications,
        this.messages = messages,
        this.conversations = conversations,
        this.about_it = about_it
    }
  }
  const c1 = new Wattpad("@FannyRM", "Estefanía Ramírez", 9, 50, 10, 205, 49, 56, 76, 39, "Bienvenid@ a mi perfil de Wattpad...")
  
  console.log(c1)
  console.log(+ Wattpad.user `pertenece a ` + Wattpad.name)
  console.log(`Ella tiene ${Wattpad.published} libros publicados en la plataforma y ${Wattpad.drafts} en borradores. En total tiene libros` )
  console.log(`Tiene ${Wattpad.followers} seguidores en su cuenta`)
  console.log(`Sigue a ${Wattpad.following} escritores como ella`)
   