class Employee {
  private empID: number;

  private name: string;

  private address: string;

  constructor(empID: number, name: string, address: string) {
    this.empID = empID;
    this.name = name;
    this.address = address;
  }

  getID() {
    return this.empID;
  }

  getName() {
    return this.name;
  }
}

export default Employee;
