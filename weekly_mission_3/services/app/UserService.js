const User = require('../../twitter/app/models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        return Object.values(user)
        //const userInfoInList = UserService.values(UserService)
    }
    static updateUserUsername(user, username){
        user.setUsername = username
    }
    static getAllUsernames([user1, user2, user3]){
        let usernames = [user1.username, user2.username, user3.username]
        return usernames
    }
}

module.exports = UserService