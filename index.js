//packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//manager + eng + intern
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//render
const render = require("./src/page-template.js");

//Array to hold info
const teamArray = [];
const idArray = [];

const outPut = path.resolve('./dist', 'TeamGen')
path.join('./dist', 'teamprofile.html')
/* The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
   The path.join() method joins the specified path segments into one path.
*/

function runApp() {

    function addManager() {

        console.log("Are you ready to build your team?");
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "Please enter your manager's name."
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter your manager's office number.",
            },

            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your manager's email.",
            },

            {
                type: "input",
                name: "managerId",
                message: "Please enter manager ID",
            }

        ]).then(answers => {

            const manager = new Manager(answers.managerName, answers.managerOfficeNumber, answers.managerEmail, answers.mangaerId);
            teamArray.push(manager);
            idArray.push(answers.mangaerId);
            createTeam();
        });

    }

    function createTeam() {

        inquirer.prompt([

            {
                type: "list",
                name: "teamPick",
                message: "What position would you like to add to the team?",
                choices: [
                    "Intern",
                    "Engineer",
                    "None"
                ]
            }

        ]).then(userPick => {
            switch (userPick.teamPick) {
                case "Intern":
                    addIntern();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                default:
                    generateTeam();

            }
        });
    }

    function addIntern() {

        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "Please enter intern's name."
            },

            {
                type: "input",
                name: "internEmail",
                message: "Please enter intern's email."
            },

            {
                type: "input",
                name: "internSchool",
                message: "Please enter intern's school."
            },

            {
                type: "input",
                name: "internId",
                message: "Please enter intern's ID."
            }

        ]).then(answers => {

            const intern = new Intern(answers.internName, answers.internEmail, answers.internSchool, answers.internId);
            teamArray.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });   
    }

    function addEngineer() {

        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "Please enter engineers name."
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter engineer's email."
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter engineer's Github username."
            },

            {
                type: "input",
                name: "engineerId",
                message: "Please enter engineer's ID."
            }

        ]).then(answers => {

            const engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerGithub, answers.engineerId);
            teamArray.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });   
    }




    function generateTeam() {
        if (!fs.existsSync(outPut)) {
            fs.mkdirSync(outPut)
        }
        fs.writeFileSync(path, render(teamArray), "utf-8");
    }

        addManager();
}

runApp();