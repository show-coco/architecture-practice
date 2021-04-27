import Employee from '../eneity/Employee';

class EmployeeRepo {
  employees: Employee[] = [];

  getEmployee(empID: number): Employee {
    const emp = this.employees.find((e) => e.getID() === empID);
    if (!emp) {
      throw new Error(`Employee which empID is ${empID}  is not found`);
    }

    return emp;
  }

  saveEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}

export default EmployeeRepo;
