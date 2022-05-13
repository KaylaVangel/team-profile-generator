class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;

  };

  getId() {
    return this.name
  };

  getEmail() {
    return this.email
  };

  getRole() {
    return this.role
  };

}


class Manager extends Employee {
  constructor(officeNumber, role) {
    super(name, id, email, "manager"); //?does this take on new role or one from employee? not sure but we want new role.....//
    this.officeNumber = officeNumber;
  };

  getRole() {
    super.getRole();
  };
}

class Engineer extends Employee {
  constructor(github) {
    super(role); //?does this take on new role or one from employee? not sure but we want new role.....//
    this.github = github;
  };
  getRole() {
    return this.role
  };
  getGitHub() {
    return this.github;
  };
}


class Intern extends Employee {
  constructor(school) {
    super(role); //?does this take on new role or one from employee? not sure but we want new role.....//
    this.officeNumber = officeNumber;
  };
  getRole() {
    return this.role
  };
}

const exportClasses = {
  Employee,
  Manager,
  Engineer,
  Intern
}




module.exports = exportClasses;