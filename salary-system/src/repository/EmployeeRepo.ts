import Employee from '../eneity/employee/Employee';

class EmployeeRepo {
  private static employees: Employee[] = [];

  static getEmployee(empID: number): Employee {
    const emp = this.employees.find((e) => e.getID() === empID);
    if (!emp) {
      throw new Error(`Employee which empID is ${empID}  is not found`);
    }

    return emp;
  }

  static saveEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}

export default EmployeeRepo;
