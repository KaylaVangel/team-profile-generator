



test('creates new engineer object', () => {
    const engineer = new Engineer ();
    expect(engineer.name).toBe('kayla');
    expect(engineer.email).toBe('kayla.vangel@comcast.net');
    expect(engineer.getName()).toEqual(expect.stringContaining('kayla'));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.stringContaining('kayla.vangel@comcast.net'));
    expect(engineer.getRole()).toEqual(expect.stringContaining('employee'));
    expect(engineer.github).toEqual(expect.stringContaining('github'));
    expect(engineer.getGithub()).toEqual(expect.stringContaining('github'));
    expect(engineer.getRole()).toEqual(expect.stringContaining('engineer')); //over write the employee role//
});