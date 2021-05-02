import PaymentClassification from './PaymentClassification';

class HourlyClassification implements PaymentClassification {
  private hourlyRate: number;

  constructor(hourlyRate: number) {
    this.hourlyRate = hourlyRate;
  }

  getHourlyRate() { return this.hourlyRate; }
}

export default HourlyClassification;
