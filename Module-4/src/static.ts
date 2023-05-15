class UserAc {
  static counter: number = 0;

  static increment() {
    return (UserAc.counter += 1);
  }
  static decrement() {
    return (UserAc.counter -= 1);
  }
}

console.log(UserAc.increment());
console.log(UserAc.increment());
