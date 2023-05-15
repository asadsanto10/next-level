class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  getDetails = (): string => {
    return `Name is: ${this._name}, and age: ${this._age}`;
  };
}

// const person = new Person("Asad santo", 25);

// console.log(person.getDetails());

class Student extends Person {
  private _grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this._grade = grade;
  }

  getGrade = (): string => {
    return `Student grade: ${this._grade}`;
  };
}

const student = new Student("Asad santo", 25, "A+");
console.log(student.getDetails());
console.log(student.getGrade());
