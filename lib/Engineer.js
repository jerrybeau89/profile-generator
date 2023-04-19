// Extends the employee class
const Employee = require('./Employee');

// Creates the engineer class and makes it exportable.
class Engineer extends Employee {
  constructor(name, id, email, gitHub){
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }
  getRole(){
    return "Engineer";
  }
  getGitHub(){
    return this.gitHub;
  }
}

module.exports = Engineer;