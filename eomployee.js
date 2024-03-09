
class Employee {
    constructor(name,salary,title, manager = null) {
        this.name = name;
        this.salaray = salary;
        this.title = title;
        this.manager = manager;
    }



}

/********   Exporting ************/
try {
    module.exports.employee = Employee
  } catch {
    module.exports = null;
  }
