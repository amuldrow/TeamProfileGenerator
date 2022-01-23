const Employee = require('../Employee');


test('creates new employee object', () => {
    const employee = new Employee('Nancy', '67382930', 'nancytim@gmail.com');

    expect(employee.name).toBe('Nancy');
    expect(employee.id).toBe('67382930');
    expect(employee.email).toBe('nancytim@gmail.com');
});

test('get employee name', () => {
    const employee = new Employee('Nancy', '67382930', 'nancytim@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employees Id', () => {
    const employee = new Employee('nancy', '67382930', 'nancytim@gmail.com');


    expect(employee.getId()).toEqual(expect.any(String));
});

test('get employees email address', () => {
    const employee = new Employee('nancy', '67382930', 'nancytim@gmail.com');

   
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get the employees role', () => {
    const employee = new Employee('nancy', '67382930', 'nancytim@gmail.com');

    expect(employee.getRole()).toBe("Role: Employee");
});