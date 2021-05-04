import TimeCard from '../../eneity/employee/TimeCard';
import EmployeeRepo from '../../repository/EmployeeRepo';
import HourlyClassification from '../../valueObject/paymentClassification/HourlyClassification';
import ITransaction from '../ITransaction';

class TimeCardTransaction implements ITransaction {
  private empID: number;

  private date: number;

  private hours: number;

  constructor(empID: number, date: number, hours: number) {
    this.empID = empID;
    this.date = date;
    this.hours = hours;
  }

  execute() {
    const emp = EmployeeRepo.getEmployee(this.empID);

    if (emp) {
      const pc = emp.getClassification();

      if (pc instanceof HourlyClassification) {
        const tc = new TimeCard(this.date, this.hours);
        pc.setTimeCard(this.date, tc);
      } else {
        throw new Error('時間給従業員ではない従業員にタイムカードを追加しようとしています');
      }
    } else {
      throw new Error('従業員が存在しません');
    }
  }
}

export default TimeCardTransaction;
