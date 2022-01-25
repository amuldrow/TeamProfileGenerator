const Engineer = require("../Engineer");
const engineer = new Engineer('Ashley', '98345784', 'amuldrow@gmail.com', 'amuldrow');


test('creates engineer object', () => {

    expect(engineer.name).toBe('Ashley');
    expect(engineer.id).toBe('98345784');
    expect(engineer.email).toBe('amuldrow@gmail.com');
    expect(engineer.github).toBe('amuldrow');
});

test('gets engineers github', () => {

    expect(engineer.getGithub()).toBe('https://github.com/amuldrow/')
});

test('gets engineers role', () => {

    expect(engineer.getRole())('Role:Engineer')
});