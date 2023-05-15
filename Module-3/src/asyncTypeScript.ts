// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetching";
    if (data) {
      resolve(data);
    } else {
      reject("data is not fetching");
    }
  });
};
