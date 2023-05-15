class BankAc {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalace() {
    console.log("my current balance is " + this._balance);
  }

  addDeposit(amount: number) {
    this._balance += amount;
  }
}

const myAc = new BankAc(121, "aasd", 45);
// myAc.balance = 0;
console.log(myAc);
