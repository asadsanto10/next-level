const stringLog = (paramaters: unknown) => {
  if (typeof paramaters === "string") {
    console.log(paramaters);
  } else {
    throw new Error("Invaliud parameters!! Parameters must be a string type.");
  }
};

stringLog("Asad santo");
// stringLog(10);
