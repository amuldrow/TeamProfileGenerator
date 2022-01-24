const Engineer = require("../Engineer");

test('creates engineer object', () => {
    const engineer = new Engineer('Roy', '98345784', 'royholiday@gmail.com', 'royholiday');

    expect(engineer.name).toBe('Ashley');
    expect(engineer.id).toBe('98345784');
    expect(engineer.email).toBe('amuldrow@gmail.com');
    expect(engineer.github).toBe('amuldrow');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Ashley', '98345784', 'amuldrow@gmail.com', 'royholiday');

    expect(engineer.getGithub()).toBe('https://github.com/amuldrow/')
});

test('gets engineers role', () => {
    const engineer = new Engineer('Roy', '98345784', 'royholiday@gmail.com', 'royholiday');

    expect(engineer.getRole())('Role:Engineer')
});