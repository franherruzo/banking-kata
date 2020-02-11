import Account from './Account';

class Printer {
  constructor() {}

  printStatement(account: Account) {
    return account.printStatement();
  }
}

export default Printer;
