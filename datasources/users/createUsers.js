const _ = require('lodash')

const validator = require('../model/validator')
const { User } = require('../model/User')

class dbUsers {

    constructor() {
        this.users = [
            new User('Ramon', 'Male', 1),
            new User('Cleopatra', 'Female', 25),
            new User('Agatha', 'Female', 12)
        ]
    }

    //me hace ruido ponerle async al add
    async add(body)  {

        const user = new User(...body)

        if(await validator.validateUserSchema(user)) {
            //users.push(user)
            const newUsers = [...this.users, user]
            this.users = newUsers;
            return user
        }
    }

    getUserById(userid){
        return _.find(this.users, {id: userid})
    }

    deleteById(userid){
        return _.remove(this.users, {id: userid})
    }

    //las async devuelven promises?
    async updateById(req){

        const userid = req.query.userId

        let newUserData = new User(req.body)

        let userToUpdate = this.getUserById(userid)

        const schemaIsValid = await validator.validateUserSchema(newUserData)
        if(userToUpdate !== undefined && schemaIsValid){


            //let newUsers = [...this.users, newUserData]
            const userToModify = _.findIndex(this.users, user => user.id === userid);
            const updatedUser = userToModify.updateValues(req.body)

            this.deleteById(userToUpdate.id)
            newUserData.id = userid

            this.users = [...newUsers]
            return newUserData
        }
    }

}
module.exports = new dbUsers();