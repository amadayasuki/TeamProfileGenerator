const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

//Template Helper Code- Generating Page
module.exports = (team) => {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>The Team</title>
      </head>

      <body>

        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h1 class="text-center>This Is The Team</h1>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class ="row justify-content-center">
                
                ${buildTeam(team)}
                
            </div>
        </div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>

    `;
};


// Building Team:


const buildTeam = team => {
    //Manager
    const buildManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-success text-white">
            <h1 class="card-title">${manager.getName()}</h1>
            <h1 class="card-subtitle mb-2 text-dark">${manager.getRole()}</h1>
            <p class="card-text font-weight-light">
               
                    Email:${manager.getEmail()}<br>
                    Office #: ${manager.getOfficeNumber()}<br>
                    Office #: ${manager.getId()}<br>
               
            </p>
            </div>
        </div>
        `;

    };

//Engineer

    const buildEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-success">
            <h1 class="card-title">${engineer.getName()}</h1>
            <h1 class="card-subtitle mb-2 text-dark">${engineer.getRole()}</h1>
            <p class="card-text font-weight-light">
            
                Email:${engineer.getEmail()}<br>
                Github: ${engineer.getGithub()}<br>
                ID: ${engineer.getId()}<br>
                
            </p>
            </div>
        </div>
        `;

    };

//Interns

    const buildIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-success text-white">
            <h1 class="card-title">${intern.getName()}</h1>
            <h1 class="card-subtitle mb-2 text-dark">${intern.getRole()}</h1>
            <p class="card-text font-weight-light">
               
                Email:${intern.getEmail()}<br>
                School: ${intern.getSchool()}<br>
                ID: ${intern.getId()}<br>
                
            </p>
            </div>
        </div>
        `;

    };

    const html = [];

    html.push(team
    .filter (employee => employee.getRole() === "Manager" )
    .map (manager => buildManager (manager))
    );

    html.push(team
    .filter(employee => employee.getRole () === "Engineer")
    .map(engineer => buildEngineer(engineer))
    .join('')
    );

    html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => buildIntern(intern))
    .join('')
    );

    return html.join('');
}