//classwork example: 
// const checkIfEqual = require('../lib/random.js');

// test('checks if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10)).toBe(true);
//   });
test('creates a new employee objext', () => {
    const employee = new Employee ();
    
    expect(employee.name).toBe('kayla');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('kayla.vangel@comcast.net');
    expect(employee.getName()).toEqual(expect.stringContianing('kayla'));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContianing('kayla.vangel@comcast.net'));
    expect(employee.getRole()).toEqual(expect.stringContianing('employee'));
});

test('creates new manager object', () => {
    const manager = new Manager ();
    expect(manager.name).toBe('kayla');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('kayla.vangel@comcast.net');
    expect(manager.getName()).toEqual(expect.stringContianing('kayla'));
    expect(manager.getId()).toEqual(expect.stringContianing('1'));
    expect(manager.getEmail()).toEqual(expect.stringContianing('kayla.vangel@comcast.net'));
    expect(manager.getRole()).toEqual(expect.stringContianing('employee'));
    expect(manager.officeNumber).toEqual(expect.any(Number)); 
    expect(manager.getRole()).toEqual(expect.stringContianing('manager')); //over write the employee role//
});

test('creates new engineer object', () => {
    expect(engineer.name).toBe('kayla');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('kayla.vangel@comcast.net');
    expect(engineer.getName()).toEqual(expect.stringContianing('kayla'));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.stringContianing('kayla.vangel@comcast.net'));
    expect(engineer.getRole()).toEqual(expect.stringContianing('employee'));
    expect(engineer.github).toEqual(expect.stringContaining('github'));
    expect(engineer.getGithub()).toEqual(expect.stringContaining('github'));
    expect(engineer.getRole()).toEqual(expect.stringContianing('engineer')); //over write the employee role//
});

test('creates new intern object', () => {
    expect(intern.name).toBe('kayla');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('kayla.vangel@comcast.net');
    expect(intern.getName()).toEqual(expect.stringContianing('kayla'));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.stringContianing('kayla.vangel@comcast.net'));
    expect(intern.getRole()).toEqual(expect.stringContianing('employee'));
    expect(intern.school).toEqual(expect.stringContianing('school'));
    expect(intern.getSchool()).toEqual(expect.stringContianing('school'));
    expect(intern.getRole()).toEqual(expect.stringContianing('intern')); //over write the employee role//
})

//when to use tob or to equal?//