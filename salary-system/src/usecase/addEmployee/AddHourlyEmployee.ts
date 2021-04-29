import HourlyClassification from '../../valueObject/paymentClassification/HourlyClassification';
import PaymentClassification from '../../valueObject/paymentClassification/PaymentClassification';
import AddEmployeeTransaction from './AddEmployee';

class AddHourlyEmployee extends AddEmployeeTransaction {
  private hourlyRate: number;

  constructor(empID: number, name: string, address: string, hourlyRate: number) {
    super(empID, name, address);
    this.hourlyRate = hourlyRate;
  }

  getClassification(): PaymentClassification {
    return new HourlyClassification(this.hourlyRate);
  }
}

export default AddHourlyEmployee;
