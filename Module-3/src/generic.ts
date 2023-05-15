type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
const rollNumbers2: GenericArray<string> = ["1", "2", "3", "4", "5"];

const users: GenericArray<{ name: string; email: string }> = [
  {
    name: "asdad",
    email: "asds",
  },
];

const user = <T>(params: T): T => {
  const ab = params;
  return ab;
};

user("ads");
user(14);

type GTuple<T, T1> = [T, T1];

const tupleArray: GTuple<string, number> = ["asd", 1];

//?? generic interface

interface IAginUser<T> {
  name: string;
  info: T;
}

const againInfo: IAginUser<number> = {
  name: "adas",
  info: 12,
};

//?? Constraints in Generics
// <T extends type or interfase>

// Generic Constraints Using Key Of
const asadSanto = <T, Y extends keyof T>(obj: T, key: Y) => {
  obj[key];
};

asadSanto({ name: "asad", info: "samnt" }, "info");
