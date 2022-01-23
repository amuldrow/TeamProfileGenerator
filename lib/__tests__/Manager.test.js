const Manager = require("../Manager");
const manager = new Manager('Rebecca', '23764965', 'rebeccamoll@gmail.com', '1025');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Rebecca');
    expect(manager.id).toBe('23764965');
    expect(manager.email).toBe('rebeccamoll@gmail.com');
    expect(manager.officeNumber).toBe('1025')
});

test('can we get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Rebecca');
});

test('can we get the id from getId() method', () => {
    expect(manager.getId()).toBe('23764965');
});

test('can we get the email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('rebeccamoll@gmail.com');
});

test('can we getthe offce number from the getOfficeNumber() methode', () => {
    expect(manager.getOfficeNumber()).toBe('1025');
});