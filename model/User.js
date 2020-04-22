const uuid = require('uuid')

class User {
    constructor(name, gender, count) {
        this.id = uuid.v4();
        this.name = name;
        this.gender = gender;
        this.count = count;

        //todo le quise agregar que los id no fuesen mutables pero rompi todo. y al final me di cuenta que no
        //todo queria hacer eso tampoco porque me sirvo de que no sea inmutable
        /*Object.defineProperty(this, "id", {
            writable: false
        });*/
    }
}

module.exports = {
    User,
}