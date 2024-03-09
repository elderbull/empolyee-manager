// const Manager = require("./manager");

class Employee {
    constructor(name,salary,title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if (this.manager) {
          this.manager.addEmployee(this);
        }
}
}

/********   Exporting ************/
try {
    module.exports = Employee
  } catch {
    module.exports = null;
  }
