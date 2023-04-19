const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const createTeam  = require('./src/templateHTML');

let team = [];

// used to add a new teammate, if query answer is no, it inits the writeToFile func. 
const addTeamMate = () => {
  inquirer.prompt([
      {
          type: 'confirm',
          message: 'Would you like to add another teammate?',
          name: 'addQuery',
      },
  ]).then((response) => {
      if (response.addQuery == true) {
          employeeType();
      } else {
          writeToFile('./dist/index.html', createTeam(team));
      }
  }

  )
};

// used to determine employee type, if query answer is cancel, it inits the writeToFile func. 
const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of employee is this?',
            choices: ['Engineer', 'Intern', 'Cancel'],
            name: 'type',

        }
    ]).then((response) => {
        if (response.type === 'Engineer') {
            addEngineer();
        } else if (response.type === 'Intern') {
            addIntern();
        } else {
            writeToFile('./dist/index.html', createTeam(team));
        }
    }
    )
};

// prompts questions for adding an engineer
const addEngineer = () => {;
    inquirer.prompt([
      {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Please provide an ID for the Engineer:",
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub?",
        name: 'github',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    }
    ]).then((answers) => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(newEngineer);
        addTeamMate();
    })
};

// prompts questions for adding an intern
const addIntern = () => {;
    inquirer.prompt([
      {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Please provide an ID for the Intern:",
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What school does/did the intern attend?",
        name: 'school',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    }
    ]).then((answers) => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(newIntern);
        addTeamMate();
    })
};

// prompts questions for adding a manager
const addManager = () => {;
    inquirer.prompt([
      {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Please provide an ID for the Manager:",
        name: 'id',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'email',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
        validate: (response) => {
            if (!response) {
                return console.log('This response is required.');
            } else {
                return true;
            }
        }
    }
    ]).then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(newManager);
        addTeamMate();
    })
};

// writes data to a html file
const writeToFile = (fileName, data) => {
  fs.writeFile(`${fileName}`, data, (err) =>
      err ? console.error('Error! : ' + err) : console.log('Your HTML has been successfully generated!'))
}

// initializes the program
function init() {
    addManager();
};

init();
