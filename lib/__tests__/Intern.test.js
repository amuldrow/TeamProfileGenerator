const { test, expect } = require("@jest/globals")
const Intern = require("../Intern")

test('create intern object', () => {
    const intern = new Intern('Alex', '23450985', 'alexhill@gmail.com', 'UCLA');

    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe('23450985');
    expect(intern.email).toBe('alexhill@gmail.com');
    expect(intern.school).toBe('UCLA');
});

test('get the interns school', () => {
    const intern = new Intern('Alex', '23450985', 'alexhill@gmail.com', 'School:UCLA');

    expect(intern.getSchool()).toBe('School:UCLA');
});

test('get interns role', () => {
    const intern = new Intern('Alex', '23450985', 'alexhill@gmail.com', 'UCLA');

    expect(intern.getRole()).toBe('Role: Intern');
});