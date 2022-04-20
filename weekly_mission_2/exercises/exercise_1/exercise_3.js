const Telegram = {
    username: "@FannyyRM",
    name: "Estefanía Ramírez",
    number: +529513413098,
    bio: "Mi perfil de Telegram...", 
    contacts: 34,
    calls: 3,
    messages: 52,
    new_group: 0,
    people_nearby: 0,
    People: function(){
      return this.contacts + this.people_nearby
    },
    Cuenta: function(){
      return `La cuenta pertenece a ${this.name}`
    }
   }
   
   console.log(`${Telegram.name} es la cuenta de ` + Telegram.username)
   console.log(`${Telegram.username} usa el número telefónico ${Telegram.number}`)
   console.log(`Esta cuenta tiene ${Telegram.contacts} contactos y ha detectado ${Telegram.people_nearby} personas cercanas a este usuario. Tiene un total de ${Telegram.People()} personas para contactar`)
   console.log(`En su cuenta tiene ${Telegram.calls} llamadas y ${Telegram.messages} mensajes`)
   console.log(Telegram.Cuenta())