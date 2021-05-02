import Employee from '../../eneity/employee/Employee';
import EmployeeRepo from '../../repository/EmployeeRepo';
import PaymentClassification from '../../valueObject/paymentClassification/PaymentClassification';
import ITransaction from '../ITransaction';

// Template Method Pattern
// Command Pattern
abstract class AddEmployeeTransaction implements ITransaction {
  private empID: number;

  private name: string;

  private address: string;

  constructor(empID: number, name: string, address: string) {
    this.empID = empID;
    this.name = name;
    this.address = address;
  }

  execute(): void {
    const classification = this.getClassification();

    const emp = new Employee(this.empID, this.name, this.address);
    emp.setClassification(classification);

    EmployeeRepo.saveEmployee(emp);
  }

  abstract getClassification(): PaymentClassification;
}

export default AddEmployeeTransaction;
