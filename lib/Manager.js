// Used to extend the employee class
const Employee = require('./Employee')
// Creates the manager class and makes it exportable.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager