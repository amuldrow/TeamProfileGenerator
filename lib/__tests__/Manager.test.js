const { test, expect } = require("@jest/globals")
const Manager = require("../Manager");
 
test('creates manager object', () => {
    manager = new Manager('Rebecca', '23764965', 'rebeccamoll@gmail.com', '1025');

    expect(manager.name).toBe('Rebecca');
    expect(manager.id).toBe('23764965');
    expect(manager.email).toBe('rebeccamoll@gmail.com');
    expect(manager.officeNumber).toBe('1025')
});

test('get managers role', () => {
    manager = new Manager('Rebecca', '23764965', 'rebeccamoll@gmail.com', '1025');

    expect(manager.getRole()).toBe("Role: Manager");
});

test('get managers office number', () => {
    manager = new Manager('Rebecca', '23764965', 'rebeccamoll@gmail.com', '1025');

    expect(manager.getOfficeNumber()).toBe('1025');
});