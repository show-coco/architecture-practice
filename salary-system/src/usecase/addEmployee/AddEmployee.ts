import Employee from '../../eneity/Employee';
import EmployeeRepo from '../../repository/EmployeeRepo';

class AddEmployee {
  private employeeRepo: EmployeeRepo;

  constructor(employeeRepo: EmployeeRepo) {
    this.employeeRepo = employeeRepo;
  }

  execute(empID: number, name: string, address: string): void {
    this.employeeRepo.saveEmployee(new Employee(empID, name, address));
  }
}

export default AddEmployee;
