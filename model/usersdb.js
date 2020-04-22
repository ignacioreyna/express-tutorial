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
    const isValid = await validator.validateUserSchema(user)
    if(isValid) {
        users.push(user)
        return user
    } else {
        return undefined
    }
}

function getUserById(userid){
    return _.find(users, {id: userid})
}

function deleteById(userid){
    return _.remove(users, {id: userid})
}

module.exports = {
    users,
    add,
    getUserById,
    deleteById,
}