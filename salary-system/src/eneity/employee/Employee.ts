import PaymentClassification from '../../valueObject/paymentClassification/PaymentClassification';

class Employee {
  private empID: number;

  private name: string;

  private address: string;

  private hourlyRate?: number;

  private classification?: PaymentClassification;

  constructor(empID: number, name: string, address: string) {
    this.empID = empID;
    this.name = name;
    this.address = address;
  }

  setClassification(classification: PaymentClassification) {
    this.classification = classification;
  }

  getClassification() {
    return this.classification;
  }

  getID() {
    return this.empID;
  }

  getName() {
    return this.name;
  }
}

export default Employee;
