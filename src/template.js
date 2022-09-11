const generateWebsite = (team) => {
    console.log(team);
    // create an empty array to push html elements into 
    const website = []

    // make the html template for manager
    const addManager = manager => {
        console.log(manager);
        let managerCard = `
        <div class="card text-white bg-success mb-3" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fa-solid fa-user-tie"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        website.push(managerCard);
    }



    const addEngineer = engineer => {
        console.log(engineer);
        let engineerCard = ` 
        <div class="card text-white bg-primary mb-3" style="width: 18rem;">
            <div class="card-header">
        ${engineer.name} <br/>
        <i class="fa-solid fa-gear"></i></i>Engineer</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        `;
        website.push(engineerCard);
    }

    const addIntern = intern => {
        console.log(intern);
        let internCard = ` 
        <div class="card text-white bg-warning mb-3" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fa-solid fa-user-pen"></i></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
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
            <link rel="stylesheet" href="../dist/style.css" />
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h2> My Team </h2>
            </header>
            <main> ${generateWebsite(team)} </main>
            
        </body>
        </html>
            `;
    }  














}