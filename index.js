// Dependencies needed
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const fs = require('fs')
const path = require('path');
const generateSite = require('./src/template')
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];

const addManager = () => {
    console.log(`
    ============================
     Fill out your information 
    to start building your team!
    ============================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameEntered => {
                if(nameEntered) {
                    return true;
                } else {
                    console.log ('Please enter your name to start!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id? (Required)',
            validate: idEntered => {
                if(idEntered) {
                    return true;
                } else {
                    console.log ('Please enter your id to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailEntered => {
                if(emailEntered) {
                    return true;
                } else {
                    console.log ('Please enter your email to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: numberEntered => {
                if(numberEntered) {
                    return true;
                } else {
                    console.log ('Please enter your office number to continue!');
                    return false;
                } 
            }
        },
    ]).then(response => {
        console.log(`
        ============================
          You have added yourself 
                to the team!
        ===========================
        `);
        
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log('officeNumber', manager.officeNumber)
        team.push(manager);
        nextEmployee();
    })
}

// nextEmployee is the function to bring up the menu to choose which type of employee to add
const nextEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Who do you want to add to the team next:',
            choices: ['Engineer', 'Intern', 'Done']   
        }])
        .then(nextChoice => {
            switch (nextChoice.menu) {
                case 'Engineer': addEngineer();
                break;
                case 'Intern': addIntern();
                break;
                default: done();
            }
        });
};

// Engineer was selected from nextEmployee()
const addEngineer = () => {
    console.log(`
    ============================
      Let's add an engineer 
            to the team!
    ===========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name? (Required)',
            validate: nameEntered => {
                if(nameEntered) {
                    return true;
                } else {
                    console.log ('Please enter your engineers name to start!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers id? (Required)',
            validate: idEntered => {
                if(idEntered) {
                    return true;
                } else {
                    console.log ('Please enter your engineers id to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email? (Required)',
            validate: emailEntered => {
                if(emailEntered) {
                    return true;
                } else {
                    console.log ('Please enter your engineers email to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github username? (Required)',
            validate: githubEntered => {
                if(githubEntered) {
                    return true;
                } else {
                    console.log ('Please enter your engineers github username to continue!');
                    return false;
                } 
            }
        },
    ]).then(response => {
        console.log(`
        ==============================
          You have added an engineer 
                to the team!
        =============================
        `);
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        nextEmployee();
    })
};

// Intern is selected from next employee menu
const addIntern = () => {
    console.log(`
    ============================
      Let's add an intern 
            to the team!
    ===========================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your intern name? (Required)',
            validate: nameEntered => {
                if(nameEntered) {
                    return true;
                } else {
                    console.log ('Please enter your interns name to start!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns id? (Required)',
            validate: idEntered => {
                if(idEntered) {
                    return true;
                } else {
                    console.log ('Please enter your interns id to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email? (Required)',
            validate: emailEntered => {
                if(emailEntered) {
                    return true;
                } else {
                    console.log ('Please enter your interns email to continue!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your interns school name? (Required)',
            validate: schoolEntered => {
                if(schoolEntered) {
                    return true;
                } else {
                    console.log ('Please enter your interns school name to continue!');
                    return false;
                } 
            }
        },
    ]).then(response => {
        console.log(`
        ==============================
          You have added an intern 
                to the team!
        =============================
        `);
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        nextEmployee();
    })
};



// when done is selected the questions are finished and the info is pushed into the output directory- tutotr helped me create this

const done = () => {
    console.log(`
    ===================================
        You have finished building
      the team! Go to your webpage now!
    ===================================
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(path.join(__dirname, '/output/team.html'), generateSite(team), "utf-8");
}




addManager();