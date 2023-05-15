const logSting = (text: string, repeat: number = 3): void => {
  for (let index = 0; index < repeat; index++) {
    console.log(`${index + 1} ${text}`);
  }
};

// logSting("This is test string");
logSting("This is test string", 5);
