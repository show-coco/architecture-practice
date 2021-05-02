import EmployeeRepo from '../../repository/EmployeeRepo';
import HourlyClassification from '../../valueObject/paymentClassification/HourlyClassification';
import SalariedClassification from '../../valueObject/paymentClassification/SalariedClassification';
import AddHourlyEmployee from './AddHourlyEmployee';
import AddSalariedEmployee from './AddSalariedEmployee';

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

    EmployeeRepo.clear();
  });

  describe('When adding salaried employee', () => {
    const addEmployee = new AddSalariedEmployee(1, 'Ropital', 'Hiroshima', 320000);
    addEmployee.execute();
    const emp = EmployeeRepo.getEmployee(1);

    it('Employee is stored', () => {
      expect(emp.getName()).toBe('Ropital');
    });

    it('Classification is SalariedClassification', () => {
      const pc = emp.getClassification();
      const sc = pc as SalariedClassification;

      expect(sc).toBeTruthy();
      expect(sc.getSalary()).toBe(320000);
    });

    EmployeeRepo.clear();
  });
});
