class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email, "engineer"); //?does this take on new role or one from employee? not sure but we want new role.....//
      this.github = github;
    };
  
    getGitHub() {
      return this.github;
    };
  }


module.exports = Engineer;