// key of guard

type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return "I am a Administrator and my role is " + user.role;
  } else {
    return "I am a normal user";
  }
}

const normalUser1: NormalUserType = {
  name: "adad",
};

const adminUser1: AdminUserType = { name: "adad santo", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instaceof guard

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am makeing sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log("I am meawing");
  }
}

// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

// alternative waye

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("german bhai", "dog");
const animal2 = new Cat("Cat bhai", "Cat");
getAnimal(animal1);
getAnimal(animal2);
