class TimeCard {
  private date: number;

  private hours: number;

  constructor(date: number, hours: number) {
    this.date = date;
    this.hours = hours;
  }

  getHours() { return this.hours; }

  getDate() { return this.date; }
}

export default TimeCard;
