
class Post{
    constructor(userN,content,contentType, likes){
        this.userN = userN;
        this.content = content;
        this.contentType = contentType;
        this.likes = likes;
        this.dateCreated= new Date();
    }
    getContentAndLikes(){
        return `El comentario es ${this.content} y los ${this.likes} likes`
    }
    getGeneralInfo(){
      return `El comentario fue creado la feccha ${this.dateCreated} por ${this.userN} con estos numero ${this.likes} likes`
    }
   }
   
   class Profile{
       constructor(userName,Link,NumFri,postNum){
        this.userName = userName; 
        this.Link = Link;
        this.NumFri = NumFri; 
        this.postNum = postNum;
        this.dateCreated = new Date();
       }
    getNumberOfFriends(){
        return `${this.userName} tiene ${this.NumFri} amigos`
    }
    getGeneralInfo(){
      return `El perfil ${this.Link} Fue creado ${this.dateCreated}`
    }
   }
   
    class User{
        constructor(name,City,school,FeNa){
            this.name = name;
            this.City = City;
            this.school = school;
            this.FeNa = FeNa;
        }
    getNameAndBirthday(){
        return `${this.name} nacio el ${this.FeNa}`
    }
    getGeneralInfo(){
      return `El usuario ${this.name} vive en ${this.City}`
    }
   }
   

   
   console.log("Instancia de Post");
   const post = new Post("Luis Enrique","Buenas noches grupo","Text",50)
   console.log("Nombre del usuario: " + post.userN)
   console.log("Tipo de post: " + post.contentType)
   console.log(post.getContentAndLikes())
   console.log(post.getGeneralInfo())

   console.log("\nInstancia de Profile");
   const profile = new Profile("Luis Enrique","https://www.facebook.com/",138,56)
   console.log("Enlace personalizado: " + profile.Link)
   console.log("Numero de posts: " + profile.postNum)
   console.log(profile.getNumberOfFriends())
   console.log(profile.getGeneralInfo())

  
   console.log("\nInstancia de User");
   const user = new User("Luis Enrique","Cuautla","ITC","21/06/1997")
   console.log("Nombre del usuario: " + user.name)
   console.log(user.getNameAndBirthday())
   console.log(user.getGeneralInfo())