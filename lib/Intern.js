// Used to extend the employee class
const Employee = require('./Employee')
// Creates the intern class and makes it exportable.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern