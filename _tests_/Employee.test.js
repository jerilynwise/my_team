
// Example used:
// test('creates a player object', () => {
//     const player = new Player('Dave');
  
//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));
  

const Employee = require('../lib/Employee')

// Employee is name, id email, role 
test('creates a employee object', () => {
    const employee = new Employee('Michael', 1, 'michaelscott@paper.com', 'Manager');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})