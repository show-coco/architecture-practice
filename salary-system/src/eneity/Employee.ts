class Employee {
  private empID: number;

  private name: string;

  private address: string;

  private hourlyRate?: number;

  private salaried?: number;

  private comissionRate?: number;

  constructor(
    empID: number, name: string, address: string,
    hourlyRate?: number, salaried?: number, comissionRate?: number,
  ) {
    this.empID = empID;
    this.name = name;
    this.address = address;
    this.hourlyRate = hourlyRate;
    this.salaried = salaried;
    this.comissionRate = comissionRate;
  }

  getID() {
    return this.empID;
  }

  getName() {
    return this.name;
  }
}

export default Employee;
