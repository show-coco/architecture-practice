import EmployeeRepo from '../../repository/EmployeeRepo';
import AddEmployee from './AddEmployee';

describe('addEmployee', () => {
  let empRepo: EmployeeRepo;
  let addEmployee: AddEmployee;
  beforeAll(() => {
    empRepo = new EmployeeRepo();
    addEmployee = new AddEmployee(empRepo);
  });

  describe('When adding salaried employee', () => {
    it('should be stored', () => {
      empRepo = new EmployeeRepo();
      addEmployee = new AddEmployee(empRepo);

      addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Salary', undefined, 30, undefined);
      const emp = empRepo.getEmployee(1);

      expect(emp.getName()).toBe('Ropital');
    });
  });

  describe('When adding salaried employee with wrong paramater', () => {
    test('should be throw an error', () => {
      expect(() => addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Salary', 1000, undefined, undefined)).toThrow('Please enter salary for Salary type');
    });
  });

  describe('When adding houly employee', () => {
    it('should be stored', () => {
      addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Hourly', 1000, undefined, undefined);
      const emp = empRepo.getEmployee(1);

      expect(emp.getName()).toBe('Ropital');
    });
  });

  describe('When adding houly employee with wrong paramater', () => {
    test('should be throw an error', () => {
      expect(() => addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Hourly', undefined, undefined, undefined)).toThrow('Please enter hourlyRate for Hourly type');
    });
  });

  describe('When adding comission employee', () => {
    it('should be stored', () => {
      addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Comission', undefined, 30, 10);
      const emp = empRepo.getEmployee(1);

      expect(emp.getName()).toBe('Ropital');
    });
  });

  describe('When adding comission employee with wrong paramater', () => {
    test('should be throw an error', () => {
      expect(() => addEmployee.execute(1, 'Ropital', 'Hiroshima', 'Comission', undefined, undefined, undefined)).toThrow('Please enter salary and comissionRate for Comission type');
    });
  });
});
