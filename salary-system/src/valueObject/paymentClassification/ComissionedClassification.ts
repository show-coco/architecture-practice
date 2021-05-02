import PaymentClassification from './PaymentClassification';

class ComissionedClassification implements PaymentClassification {
  private salary: number;

  private comissionRate: number;

  constructor(salary: number, comissionRate: number) {
    this.salary = salary;
    this.comissionRate = comissionRate;
  }

  getSalary() {
    return this.salary;
  }

  getComissionRate() {
    return this.comissionRate;
  }
}

export default ComissionedClassification;
