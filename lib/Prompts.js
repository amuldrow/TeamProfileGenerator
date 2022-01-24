const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const generatePage = require("./template");
const fs = require("fs")
const { exportDefaultSpecifier } = require("@babel/types");
const { writeFile } = require("istanbul-lib-report");
const { ConsoleWriter } = require("istanbul-lib-report"); 
const { green } = require("chalk");
const { default: generate } = require("@babel/generator");

class Prompts {
    constructor() {
        this.employees = [];
    }

    promptUser() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message:'What is your managers name?'
                },
                {
                    type:'text',
                    name: 'id',
                    message: 'What is your managers id?'
                },
                {
                    type:'text',
                    name: 'email',
                    message: 'What is your managers email?'
                },
                {
                    type:'text',
                    name:'officeNumber',
                    message:'What is your managers office number?'
                }
            ])

            .then(({ name, id, email, officeNumber }) => {
                this.employees.push(new Manager(name, id, email, officeNumber ));

                this.addEmployee();
                })
    }

    addEmployee() {
        inquirer
            .prompt({
                type: 'list',
                name: 'confirmAddEmp',
                message: 'Would you like to add an Engineer, add a Itern, or are you finished?',
                choices: ['Add Engineer', 'Add Intern', 'I am finished adding employees']
            })
            .then((data)) => {
                if (data.confirmAddEmp === 'Add Engineer') {
                    this.addEngineer();
                } else if (data.confirmAddEmp === 'Add Intern') {
                    this.addIntern();
                }
                }
            }
    }