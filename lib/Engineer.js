const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name , id , email ) {
        super(name, id, email);

        this.githubUsername = this.githubUsername;
    }

    getGithub() {
        return this.githubUsername;
    
    }

        getRole() {
        return 'Role: Engineer'
    
    }
};

module.exports = Engineer;