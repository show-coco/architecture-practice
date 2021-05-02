import Employee from '../eneity/employee/Employee';

class EmployeeRepo {
  private static employees: Employee[] = [];

  static getEmployee(empID: number): Employee | undefined {
    const emp = this.employees.find((e) => e.getID() === empID);

    return emp;
  }

  static saveEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  static deleteEmployee(empID: number) {
    this.employees = this.employees.filter((emp) => emp.getID() !== empID);
  }

  static clear() {
    this.employees = [];
  }
}

export default EmployeeRepo;
