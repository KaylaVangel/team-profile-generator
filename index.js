const inquirer = require('inquirer');
const Manager = require('./lib/managerClass.js');
const Engineer = require('./lib/engineerClass.js');
const Intern = require('./lib/internClass.js');
const fs = require('fs');

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

const createEngineer = () => { 
    console.log(createEngineer);
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
            writeTeam('./dist/index.html', team);
        }
    })

}

function writeTeam(fileName) {

    let htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel = "stylesheet" href="style.css">
    </head>
    <body>
    `;

    htmlFile += `<div class= "banner"><h1> My Team <h1></div>
    <div class= "container">`

    team.forEach(member => {

        htmlFile +=`
        <div  class= "box" >
            <div class= "header"> 
                ${member.name}<br />
                ${member.role}<br/>
            </div>
            <div class= "text">
                "ID:" ${member.id} <br />
                "email:" <a href = "mailto: ${member.email}">${member.email}</a><br />`;
                if (member.role == "manager")
                    htmlFile += `Office Number: ${member.officeNumber}`
            
                if (member.role == "engineer") {
                    htmlFile += `GitHub: <a href="https://github.com/${member.github}">${member.github}</a>`
                    console.log(member)
                }
               
               if (member.role == "intern")
                    htmlFile += `School: ${member.school}`



            htmlFile += `</div>
        </div>`

    })


    htmlFile += `   
    </div>
    </body>
    </html>
    `;




    fs.writeFile(fileName, htmlFile, err => {
        if (err) throw err;
    });
}


const init = () => { console.log(init);
    createManager()
        .then(() => {
            menu()
                // .then(() => { 
                //     writeTeam('index.html');
                // })

        })
}

init();