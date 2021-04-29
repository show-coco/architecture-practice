import EmployeeRepo from '../../repository/EmployeeRepo';
import HourlyClassification from '../../valueObject/paymentClassification/HourlyClassification';
import AddEmployeeTransaction from './AddEmployee';
import AddHourlyEmployee from './AddHourlyEmployee';

describe('addEmployee', () => {
  describe('When adding hourly employee', () => {
    const addEmployee = new AddHourlyEmployee(1, 'Ropital', 'Hiroshima', 1000);
    addEmployee.execute();
    const emp = EmployeeRepo.getEmployee(1);

    it('Employee is stored', () => {
      expect(emp.getName()).toBe('Ropital');
    });

    it('Classification is HourlyClassification', () => {
      const pc = emp.getClassification();
      const hc = pc as HourlyClassification;
      expect(hc).toBeTruthy();
      expect(hc.getHourlyRate()).toBe(1000);
    });
  });
});
