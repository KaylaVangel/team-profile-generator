const inquirer = require('inquirer');
const Manager = require('./lib/managerClass.js');
const Engineer = require('./lib/engineerClass.js');
const Intern = require('./lib/internClass.js');

const team = [];


const createManager = () => { console.log(createManager);

    return inquirer.prompt([
        {
            type: 'input',
            name: "managerName",
            message: 'What is your managers name? (Required)',
        },
        {
            type: 'input',
            name: "managerId",
            message: 'What is your managers ID? (Required)',
        },
        {
            type: 'input',
            name: "managerEmail",
            message: 'What is your managers email address? (Required)',
        },
        {
            type: 'input',
            name: "managerOfficeNumber",
            message: 'What is your managers office number? (Required)',
        }
    ]).then(manager => {
        team.push(new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOfficeNumber))
    })

}

const createEngineer = () => { console.log(createEngineer);
    return inquirer.prompt([
        {
            type: 'input',
            name: "engineerName",
            message: 'What is your engineers name? (Required)',
        },
        {
            type: 'input',
            name: "engineerId",
            message: 'What is your engineers ID? (Required)',
        },
        {
            type: 'input',
            name: "engineerEmail",
            message: 'What is your engineers email address? (Required)',
        },
        {
            type: 'input',
            name: "gitHubUsername",
            message: 'What is your Git Hub Username? (Required)',
        }
    ]).then(engineer => {
        team.push(new Engineer(engineer.engineerName, engineer.engineerId, engineer.engineerEmail, engineer.gitHubUsername))
    })

}


const createIntern = () => { console.log(createIntern);
    return inquirer.prompt([
        {
            type: 'input',
            name: "internName",
            message: 'What is your interns name? (Required)',
        },
        {
            type: 'input',
            name: "internId",
            message: 'What is your interns ID? (Required)',
        },
        {
            type: 'input',
            name: "internEmail",
            message: 'What is your interns email address? (Required)',
        },
        {
            type: 'input',
            name: "school",
            message: 'School name? (Required)',
        }
    ]).then(intern => {
        team.push(new Intern(intern.internName, intern.internId, intern.internEmail, intern.school))
    })
}



const menu = () => { console.log(menu);

    return inquirer.prompt([
        {
            type: 'checkbox',
            name: "menu",
            message: "What do you want to do?",
            choices: ["Enter another Engineer?", "Enter another Intern?", "Exit"],
            
        }
    ]).then(choice => {
        if (choice.menu[0] === "Enter another Engineer?") {
            createEngineer().then(() => menu());
        } else if (choice.menu[0] === "Enter another Intern?") {
            createIntern().then(() => menu());
        } else {
            return;
        }
    })

}

function writeTeam(fileName) {
    fs.writeFile(fileName, team, err => {
        if (err) throw err;
    });
}


const init = () => { console.log(init);
    createManager()
        .then(() => {
            menu()
                .then(() => { 
                    writeTeam('index.html');
                })

        })
}

init();