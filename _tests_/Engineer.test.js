// Look at employee to see where I reference this info

const Engineer = require('../lib/Engineer')

// Engineer is name, id email, role, github 
test('creates an engineer object', () => {
    const engineer = new Engineer('Jim', 2, 'jimhalpert@paper.com', 'Engineer', 'github.com/jimhalpert');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})