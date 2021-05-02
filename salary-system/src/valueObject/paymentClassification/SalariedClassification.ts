import PaymentClassification from './PaymentClassification';

class SalariedClassification implements PaymentClassification {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

export default SalariedClassification;
