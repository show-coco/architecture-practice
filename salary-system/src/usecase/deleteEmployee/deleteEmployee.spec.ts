import EmployeeRepo from '../../repository/EmployeeRepo';
import AddComissionedEmployee from '../addEmployee/AddComissionedEmployee';
import DeleteEmployee from './DeleteEmployee';

describe('deleteEmployee', () => {
  it('When delete employee, employee is deleted from database', () => {
    const addComissionedEmployee = new AddComissionedEmployee(1, 'Ropital', 'Hiroshima', 320000, 10000);
    addComissionedEmployee.execute();

    let emp = EmployeeRepo.getEmployee(1);
    expect(emp).not.toBeUndefined();

    const deleteEmployee = new DeleteEmployee(1);
    deleteEmployee.execute();

    emp = EmployeeRepo.getEmployee(1);
    expect(emp).toBeUndefined();
  });
});
