const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name = "", id = "", email = "", officeNumber = "") {
    // Get methods from Employee
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Role: Manager'

    }
    
    getOfficeNumber() {
        return '1025';

    }  
}

module.exports = Manager;

