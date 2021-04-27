import Employee from '../../eneity/Employee';
import EmployeeRepo from '../../repository/EmployeeRepo';

type EmployeeType = 'Hourly' | 'Salary' | 'Comission';

class AddEmployee {
  private employeeRepo: EmployeeRepo;

  constructor(employeeRepo: EmployeeRepo) {
    this.employeeRepo = employeeRepo;
  }

  execute(
    empID: number, name: string, address: string, type: EmployeeType,
    hourlyRate?: number, salary?: number, comissionRate?: number,
  ): void {
    let emp: Employee;

    if (type === 'Hourly') {
      if (!hourlyRate) {
        throw new Error('Please enter hourlyRate for Hourly type');
      }
      emp = new Employee(empID, name, address, hourlyRate, undefined, undefined);
    } else if (type === 'Salary') {
      if (!salary) {
        throw new Error('Please enter salary for Salary type');
      }
      emp = new Employee(empID, name, address, undefined, salary, undefined);
    } else {
      if (!salary || !comissionRate) {
        throw new Error('Please enter salary and comissionRate for Comission type');
      }
      emp = new Employee(empID, name, address, undefined, salary, comissionRate);
    }

    this.employeeRepo.saveEmployee(emp);
  }
}

export default AddEmployee;
