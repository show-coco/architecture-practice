import PaymentClassification from '../../valueObject/paymentClassification/PaymentClassification';
import SalariedClassification from '../../valueObject/paymentClassification/SalariedClassification';
import AddEmployeeTransaction from './AddEmployee';

class AddSalariedEmployee extends AddEmployeeTransaction {
  private salary: number;

  constructor(empID: number, name: string, address: string, salary: number) {
    super(empID, name, address);
    this.salary = salary;
  }

  getClassification(): PaymentClassification {
    return new SalariedClassification(this.salary);
  }
}

export default AddSalariedEmployee;
