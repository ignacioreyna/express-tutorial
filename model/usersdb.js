const _ = require('lodash')

const validator = require('./validator')
const User = require('./User').User

let users = [
    new User('Ramon', 'Male', 1),
    new User('Cleopatra', 'Female', 25),
    new User('Agatha', 'Female', 12)
]

//me hace ruido ponerle async al add
async function add(body)  {

    const user = new User(body.name, body.gender, body.count)

    if(await validator.validateUserSchema(user)) {
        users.push(user)
        return user
    }
}

function getUserById(userid){
    return _.find(users, {id: userid})
}

function deleteById(userid){
    return _.remove(users, {id: userid})
}

async function updateById(req){

    const name = req.body.name
    const gender = req.body.gender
    const count = req.body.count

    const userid = req.query.userId

    let newUserData = new User(name, gender, count)

    let userToUpdate = getUserById(userid)

    const schemaIsValid = await validator.validateUserSchema(newUserData)
    if(userToUpdate !== undefined && schemaIsValid){
        deleteById(userToUpdate.id)
        newUserData.id = userid
        users.push(newUserData)
        return newUserData
    }
}

module.exports = {
    users,
    add,
    getUserById,
    deleteById,
    updateById,
}