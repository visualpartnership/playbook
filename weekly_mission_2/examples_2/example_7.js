// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
  }
  
  console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
  const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")
  
  console.log(missionCommanderNode.getStudents) // 0 por default
  console.log(missionCommanderNode.getLives)// 0 por default
  
  // actualizamos los atributos por medio de los setters
  missionCommanderNode.setStudents = 100
  missionCommanderNode.setLives = 3
  
  console.log(missionCommanderNode.getStudents) // 0 por default
  console.log(missionCommanderNode.getLives)// 0 por default