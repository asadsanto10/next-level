interface IPerson {
  name: string;
  age: number;
}

const personheckAge = (personInfo: IPerson[]): IPerson[] => {
  return personInfo.filter(({ age }) => age >= 18);
};

const persons: IPerson[] = [
  {
    name: "asad",
    age: 17,
  },
  {
    name: "asad santo",
    age: 18,
  },
  {
    name: "asad 10",
    age: 25,
  },
  {
    name: "asad 20",
    age: 21,
  },
];

console.log(personheckAge(persons));
