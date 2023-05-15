function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const usersss = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(usersss, 0, "name"));

// type B = {
//   [key in keyof Data]: string;
// };

// const numbers: B = {
//   num1: 20,
// };

interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}
