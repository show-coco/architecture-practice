import EmployeeRepo from '../../repository/EmployeeRepo';
import ITransaction from '../ITransaction';

class DeleteEmployee implements ITransaction {
  private empID: number;

  constructor(empID: number) {
    this.empID = empID;
  }

  execute() {
    EmployeeRepo.deleteEmployee(this.empID);
  }
}

export default DeleteEmployee;
