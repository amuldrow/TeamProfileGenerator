const Employee = require('../Employee');
const employee = new Employee('nancy', '67382930', 'nancytim@gmail.com');

test('test if we can get the constructor value for the employee object', () =>{
    expect(employee.name).toBe('nancy');
    expect(employee.id).toBe('67382930');
    expect(employee.email).toBe('nancytim@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('nancy');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('67382930');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('nancytim@gmail.com');
});
