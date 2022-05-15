const Employee = require('./employeeClass.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, "intern"); //?does this take on new role or one from employee? not sure but we want new role.....//
      this.school = school;
  
    }
    getSchool() {
        return this.school;
      };
  }
  



module.exports = Intern;