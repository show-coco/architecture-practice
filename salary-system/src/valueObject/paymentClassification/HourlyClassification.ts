import TimeCard from '../../eneity/employee/TimeCard';
import PaymentClassification from './PaymentClassification';

class HourlyClassification implements PaymentClassification {
  private hourlyRate: number;

  private timeCard: { [date: number]: TimeCard } = {};

  constructor(hourlyRate: number) {
    this.hourlyRate = hourlyRate;
  }

  getHourlyRate() { return this.hourlyRate; }

  getTimeCard(date:number): TimeCard { return this.timeCard[date]; }

  setTimeCard(date: number, timeCard: TimeCard) {
    this.timeCard[date] = timeCard;
  }
}

export default HourlyClassification;
