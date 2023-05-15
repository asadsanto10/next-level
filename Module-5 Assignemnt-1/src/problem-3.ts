const reverse = <T>(...string: T[]): T[] => {
  const reverseString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString.push(string[i]);
  }
  // console.log(reverseString);
  return reverseString;
};

// const arrayString: Array<string> = ["santo", "zzaman", "asadu"];

const result: Array<string> = reverse("santo", "zzaman", "asadu");

console.log(result);
