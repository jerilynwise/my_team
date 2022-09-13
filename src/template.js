const generateWebsite = (team) => {
    console.log(team);
    // create an empty array to push html elements into 
    const website = []

    // make the html template for manager
    const addManager = manager => {
        console.log('manager', manager);
        let managerCard = `
        <div class="card text-black bg-success mb-3" style="width: 18rem;">
            <div class="card-header">
           ${manager.getName()} <br/>
           <i class="fa-solid fa-user-tie"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
        website.push(managerCard);
    }



    const addEngineer = engineer => {
        console.log(engineer);
        let engineerCard = ` 
        <div class="card text-black bg-primary mb-3" style="width: 18rem;">
            <div class="card-header">
        ${engineer.getName()} <br/>
        <i class="fa-solid fa-gear"></i></i>Engineer</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        `;
        website.push(engineerCard);
    }

    const addIntern = intern => {
        console.log(intern);
        let internCard = ` 
        <div class="card text-black bg-warning mb-3" style="width: 18rem;">
            <div class="card-header">
           ${intern.getName()} <br/>
           <i class="fa-solid fa-user-pen"></i></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;
        website.push(internCard);
    }


        // create a loop for all of the employees
        for (let i = 0; i < team.length; i++) {
            if (team[i].getRole() === "Manager") {
                addManager(team[i]);
            }
            if (team[i].getRole() === "Engineer") {
                addEngineer(team[i]);
            }
            if (team[i].getRole() === "Intern") {
                addIntern(team[i]);
            }
        }

        return website;
    }
          // export function to generate entire page
module.exports = team => {

    return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/319c4f69f5.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../output/style.css" />
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header class="alert alert-primary" role="alert">
            <h2 class="alert-heading"> My Team </h2>
            </header>
            <main class= "d-inline-flex"> ${generateWebsite(team)} </main>
            
        </body>
        </html>
            `;
    }  
