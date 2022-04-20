const Messenger = {
    username: "Estefania.Ramirez.M.9843",
    name: "Estefanía Ramírez",
    chats: 36,
    people: 53,
    active_status: "On",
    stories: 25,
    contacts: 333,
    Status: function(){
      return `${this.name} tiene su estado de actividad en: ${this.active_status}`
    }
   }
   
   console.log(`El nombre de esta cuenta es: ${Messenger.name} y el usuario es: ` + Messenger.username)
   console.log(`${Messenger.name} tiene ${Messenger.chats} chats y ${Messenger.contacts} contactos`)
   console.log(Messenger.Status())