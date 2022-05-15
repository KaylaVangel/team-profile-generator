const Employee = require('./employeeClass.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email, "manager"); //?does this take on new role or one from employee? not sure but we want new role.....//
      this.officeNumber = officeNumber;
  
    };
    getOfficenumber() {
        return this.officeNumber;
      }
  }



module.exports = Manager;