const Employee = require('../lib/employeeClass.js');


test('creates a new employee objext', () => {
    const employee = new Employee('kayla', 1, 'kayla.vangel@comcast.net', "employee");
    
    console.log(employee.name);
    console.log(employee.getName());

    expect(employee.name).toBe('kayla');
    expect(employee.email).toBe('kayla.vangel@comcast.net');
    expect(employee.getName()).toEqual(expect.stringContaining('kayla'));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaiing('kayla.vangel@comcast.net'));
    expect(employee.getRole()).toEqual(expect.stringContaining('employee'));
});

