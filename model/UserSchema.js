const yup = require('yup')

class UserSchema {

    #userSchema = yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        gender: yup.string().lowercase().required().oneOf(['female', 'male']),
        count: yup.number().required().positive().integer(),
    });

    get userSchema(){
        return this.#userSchema;
    }

}
module.exports = new UserSchema();
