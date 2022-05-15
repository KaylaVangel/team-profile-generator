const Manager = require('../lib/managerClass.js');


test('creates new manager object', () => {
    const manager = new Manager('kayla', 1, 'kayla.vangel@comcast.net', 25);

    console.log(manager);

    expect(manager.name).toBe('kayla');
    expect(manager.email).toBe('kayla.vangel@comcast.net');
    expect(manager.getName()).toEqual(expect.stringContaining('kayla'));
    expect(manager.getId()).toEqual(expect.stringContaining('1'));
    expect(manager.getEmail()).toEqual(expect.stringContaining('kayla.vangel@comcast.net'));
    expect(manager.getRole()).toEqual(expect.stringContaining('employee'));
    expect(manager.officeNumber).toEqual(expect.any(Number)); 
    expect(manager.getRole()).toEqual(expect.stringContaining('manager')); //over write the employee role//
});