// user interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vechicle: IVehicle = {
//   name: "car",
//   model: "2000",
// };

interface Ivehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements Ivehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("I am stoping engine");
  }
  move(): void {
    console.log("moving engine");
  }
  test() {}
}

const vechicle1 = new Vehicle("Car", "Toyota", 2000);

// abstract class

abstract class CVeicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
}

class Car extends CVeicle {
  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("I am stoping engine");
  }
  move(): void {
    console.log("moving engine");
  }
}

const car1 = new Car("car", "Toyota", 2001);
car1.startEngine();
