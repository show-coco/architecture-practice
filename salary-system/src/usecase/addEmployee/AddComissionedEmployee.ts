import ComissionedClassification from '../../valueObject/paymentClassification/ComissionedClassification';
import PaymentClassification from '../../valueObject/paymentClassification/PaymentClassification';
import AddEmployeeTransaction from './AddEmployee';

class AddComissionedEmployee extends AddEmployeeTransaction {
  private salary: number;

  private comissionRate: number;

  constructor(empID: number, name: string, address: string, salary: number, comissionRate:number) {
    super(empID, name, address);
    this.salary = salary;
    this.comissionRate = comissionRate;
  }

  getClassification(): PaymentClassification {
    return new ComissionedClassification(this.salary, this.comissionRate);
  }
}

export default AddComissionedEmployee;
