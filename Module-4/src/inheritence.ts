class ParentClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep ${hours}`;
  }
}

class Student extends ParentClass {
  // name: string;
  // age: number;
  // address: string;
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  // makeSleep(hours: number): string {
  //   return `this ${this.name} will sleep ${hours}`;
  // }
}

const student1 = new Student("adad", 22, "tet");
console.log(student1.makeSleep(10));

class Teacher extends ParentClass {
  // name: string;
  // age: number;
  // address: string;
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
    this.designation = designation;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep ${hours}`;
  }

  takeClasses(classNumber: number): string {
    return `This ${this.name} will take ${classNumber} classes`;
  }
}

const teacher1 = new Teacher("ada", 35, "add", "Teacher");
console.log(teacher1.takeClasses(5));
