## **Interview Questions**

1. What is TypeScript, and how is it different from JavaScript?

   ANS: TypeScript is a modern JavaScript development language. It is a statically compiled language to write clear and simple JavaScript code. It is a strict syntactical superset of JavaScript and augments elective static typing to the language.

---

2. Can you explain the difference between "interface" and "type" in TypeScript?

   ANS: Interface and Type are two ways to describe the structure of an object in Typescript. An interface generally serves as a blueprint for any class implementation. Interfaces support declaration merging and do not use accessibility modifiers, but Type does not support declaration merging and uses existing types with accessibility modifiers.

---

3. Can you give an example of how to use generics in TypeScript?

   ANS:

```js
type GenericArray<T> = Array<T>;
const randomNumber: GenericArray<number> = [1, 2, 3, 4, 5];
const randonString: GenericArray<string> = ["1", "2", "3", "4", "5"];

const userInfo = <T>(params: T): T => {
  const ab = params;
  return ab;
};
```

---

4. What is the difference between an "unknown" and "any" type in TypeScript?

   ANS: unknown and any are two special types that can hold any value in typescript. Any lets you do anything you want but Unknown doesn't let you do anything at all without checking the type first.

---

5. Can you give an example of how to use enums in TypeScript?

ANS:

```js
enum ProcessStep {
  step1,
  step2,
  step3,
}

interface IStep {
  process: ProcessStep;
}

const processsdfds: IStep = {
  process: ProcessStep.step1,
};
```

6. What is the "as" keyword used for in TypeScript?

   ANS: The "as" keyword is used for Type Assertion. It’s a way to force the TypeScript compiler to treat an object as whatever type it is.

---

7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

   ANS: One can determine whether a property exists or not in an object using the "in" operator. It can be utilized as a type guard to specify an object's type based on the existence of a particular property.
   The "typeof" operator enables runtime type checking for values. It can be utilized as a type guard to specify a variable's type based on its actual type.

```js
// Example of "in" operators
interface IActive {
  status?: string;
}
const checkActive = (status: IActive): string => {
  if ("status" in status) {
    return "This user is active";
  }
  return "This user is not active";
};
console.log(checkActive({}));

// Example of "typeof" operators
const stringLog = (paramaters: unknown) => {
  if (typeof paramaters === "string") {
    console.log(paramaters);
  } else {
    throw new Error("Invaliud parameters!! Parameters must be a string type.");
  }
};

stringLog("Asad santo");
// stringLog(10);
```
