// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
import fs from  'fs'
import inquirer from 'inquirer';

//    load all questions into the questions array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of this project?",
    },
    {
        type: 'input',
        name: 'app_repo',
        message: "What is the address of your application repository?",
    },
    {
        type: 'input',
        name: 'github_un',
        message: "What is your GitHub username? ",
    },
    {
        type: 'input',
        name: 'email_addr',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of this project?",
    },
    {
        type: 'input',
        name: 'installation_instr',
        message: "How do you install this project?",
    },
    {
        type: 'input',
        name: 'usage_info',
        message: "How to use this project?",
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: "What are the guidelines to contributions to this project?",
    },
    {
        type: 'input',
        name: 'test',
        message: "How to test this project?",
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation to build this project?",
    },
    {
        type: 'input',
        name: 'why_build',
        message: "Why did you build this project?",
    },
    {
        type: 'input',
        name: 'problem_solved',
        message: "What problem does it solve?",
    },
    {
        type: 'input',
        name: 'what_learned',
        message: "What did you learn?",
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('README.md', data, err =>{
        if (err){
            console.error(err);
            return;
        }
    } );
}

// TODO: Create a function to initialize app
async function init() {
    try {
         const rsp =  await inquirer.prompt(questions);
         // create string to hold file data
         const str = rsp.title + "\n\n\n\n" + "DESCRIPTION\n" + rsp.description + "\n\n\n" + "TABLE OF CONTENTS: \n" + " --- Installation Instructions\n"
         + " --- Usage Guidelines\n" + " --- License\n" + " --- Contributing\n" + " --- Tests\n" + " --- Questions\n\n\n" +
         "INSTALLATION\n" + rsp.installation_instr + "\n\n\n" + "USAGE\n" + rsp.usage_info + "\n\n\n" + "LICENSE\n License info generated.\n\n\n" + "CONTRIBUTING\n" + rsp.contribution_guidelines + "\n\n\n" 
         + "TEST\n" + rsp.test + "\n\n\n" + "QUESTIONS\nGithub Profile: " + rsp.github_un + "\n" + "Additional Questions? Contact at: " + rsp.email_addr + "\n" +
         "What was your motivation for creating this project?\n" +  rsp.motivation + "\n" + "Why did you build this project? \n" 
         + rsp.why_build + "\n" + "What problem does it solve? \n" +  rsp.problem_solved + "\n" + "What did you learn? \n" + rsp.what_learned;
        // function call sending the str to be written to README FILE
         writeToFile("README", str);

    } catch(error){
        console.error('Err', error)
    }
}

// Function call to initialize app
init();
