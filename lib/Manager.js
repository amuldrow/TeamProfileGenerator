const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // Get methods from Employee
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }  
}

module.exports = Manager;

