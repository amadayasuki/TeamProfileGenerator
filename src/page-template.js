const Engineer = require("../lib/Engineer");

//Template Helper Code- Generating Page
module.exports = () => {
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
            <div class ="row">
                <div class="col justify-content-center">
                ${buildTeam(team)}
                </div>
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
//Manager

const buildTeam = (team) => {
    const createManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
            <p class="card-text">
                <ul class="">
                    <li class=""> Email:${manager.getEmail()}<li>
                    <li class=""> Office #: ${manager.getOfficeNumber()}<li>
                </ul>
            </p>
            </div>
        </div>
        `;

    };

//Engineer

    const createEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
            <p class="card-text">
                <ul class="">
                    <li class=""> Email:${engineer.getEmail()}<li>
                    <li class=""> Github: ${engineer.getGithub()}<li>
                    <li class=""> ID: ${engineer.getId()}<li>
                </ul>
            </p>
            </div>
        </div>
        `;

    };

//Interns

    const createIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
            <p class="card-text">
                <ul class="">
                    <li class=""> Email:${intern.getEmail()}<li>
                    <li class=""> School: ${intern.getSchool()}<li>
                    <li class=""> ID: ${intern.getId()}<li>
                </ul>
            </p>
            </div>
        </div>
        `;

    };

}