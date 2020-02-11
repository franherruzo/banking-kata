enum TransactionTypes {
  deposit,
  withdraw,
}

export default class Transaction {
  private _date: Date;
  private _amount: number;
  readonly balance: number;

  readonly type: TransactionTypes;

  constructor(
    type: TransactionTypes,
    date: Date,
    amount: number,
    balance: number,
  ) {
    this.type = type;
    this._date = date;
    this._amount = amount;
    this.balance = balance;
  }

  get date() {
    return `${this._date.getDate()}.${this._date.getMonth() +
      1}.${this._date.getFullYear()}`;
  }

  get amount() {
    return this.type === TransactionTypes.deposit
      ? `+${this._amount}`
      : `-${this._amount}`;
  }

  static createDeposit(date: Date, amount: number, balance: number) {
    return new Transaction(TransactionTypes.deposit, date, amount, balance);
  }
  static createWithdraw(date: Date, amount: number, balance: number) {
    return new Transaction(TransactionTypes.withdraw, date, amount, balance);
  }
}
