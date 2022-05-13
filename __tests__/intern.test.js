test('creates new intern object', () => {
    const intern = new Intern();
    expect(intern.name).toBe('kayla');
    expect(intern.email).toBe('kayla.vangel@comcast.net');
    expect(intern.getName()).toEqual(expect.stringContaining('kayla'));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.stringContaining('kayla.vangel@comcast.net'));
    expect(intern.getRole()).toEqual(expect.stringContaining('employee'));
    expect(intern.school).toEqual(expect.stringContaining('school'));
    expect(intern.getSchool()).toEqual(expect.stringContaining('school'));
    expect(intern.getRole()).toEqual(expect.stringContaining('intern')); //over write the employee role//
})
