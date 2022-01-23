const Manager = require("../Manager");
const manager = new Manager('Rebecca', '23764965', 'rebeccamoll@gmail.com', '1025');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Rebecca');
    expect(manager.id).toBe('23764965');
    expect(manager.email).toBe('rebeccamoll@gmail.com');
    expect(manager.officeNumber).toBe('1025')
});