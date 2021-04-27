import EmployeeRepo from '../../repository/EmployeeRepo';
import AddEmployee from './AddEmployee';

describe('addEmployee', () => {
  describe('When adding salaried employee', () => {
    it('should be stored', () => {
      const empRepo = new EmployeeRepo();
      const addEmployee = new AddEmployee(empRepo);

      addEmployee.execute(1, 'Ropital', 'Hiroshima');
      const emp = empRepo.getEmployee(1);

      expect(emp.getName()).toBe('Ropital');
    });
  });
});
