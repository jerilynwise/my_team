// Look at employee to see where I reference this info

const Intern = require('../lib/Intern')

// Intern is name, id email, role, school 
test('creates an itern object', () => {
    const intern = new Intern('Pam', 3, 'pambeesly@paper.com', 'Intern', 'Pratt Institute');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})