// Look at employee to see where I reference this info

const Manager = require('../lib/Manager')

// Manager is name, id email, role, and office number
test('creates a manager object', () => {
    const manager = new Manager('Dwight', 4, 'dwightscrute@paper.com', 'Manager', 2);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})