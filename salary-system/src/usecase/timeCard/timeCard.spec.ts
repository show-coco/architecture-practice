import EmployeeRepo from '../../repository/EmployeeRepo';
import HourlyClassification from '../../valueObject/paymentClassification/HourlyClassification';
import AddHourlyEmployee from '../addEmployee/AddHourlyEmployee';
import TimeCardTransaction from './TimeCard';

describe('TimeCardTransaction', () => {
  describe('When add time-card to employee', () => {
    it('time-card is stored in HourlyClassification', () => {
      const addHourlyEmployee = new AddHourlyEmployee(1, 'Ropital', 'Hiroshima', 1000);
      addHourlyEmployee.execute();

      const timeCardTransaction = new TimeCardTransaction(1, 20210504, 8.0);
      timeCardTransaction.execute();

      const emp = EmployeeRepo.getEmployee(1);
      const pc = emp?.getClassification();
      const hc = pc as HourlyClassification;
      expect(hc).not.toBeNull();
      const tc = hc.getTimeCard(20210504);
      expect(tc).not.toBeNull();
      expect(tc.getHours()).toBe(8.0);
    });
  });
});
