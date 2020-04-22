const yup = require('yup')
const User = require('./User').User

const userSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    gender: yup.string().required().oneOf(['Female', 'Male']),
    counter: yup.number().required().positive().integer(),
});

//use async y await aca pero no me sirvio
function validateUserSchema(user) {
    return user instanceof User ? userSchema.isValid(user, valid => valid) : false
}

module.exports = {
    validateUserSchema,
}