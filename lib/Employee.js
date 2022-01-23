class Employee {
    constructor(name,id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.id;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Role: Employee';
    }
}

module.exports = Employee;



