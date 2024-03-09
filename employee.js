
class Employee {
    constructor(name,salary,title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
    }



}

/********   Exporting ************/
try {
    module.exports = Employee
  } catch {
    module.exports = null;
  }
