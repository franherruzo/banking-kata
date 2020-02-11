import Account from '../../src/Modules/Account';
import Transaction from '../../src/Modules/Transaction';

describe('Account', () => {
  it('should print an empty statement', () => {
    const account = new Account([]);

    const expectedStatement = `Date Amount Balance`;
    const printedStatement = account.printStatement();

    expect(printedStatement).toBe(expectedStatement);
  });
  it('should print with several transactions', () => {
    const transactions: Transaction[] = [
      Transaction.createDeposit(new Date('2015-12-24'), 500, 500),
      Transaction.createWithdraw(new Date('2016-08-23'), 100, 400),
    ];
    const account = new Account(transactions);

    const expectedStatement = `Date Amount Balance
24.12.2015 +500 500
23.8.2016 -100 400`;
    const printedStatement = account.printStatement();

    expect(printedStatement).toBe(expectedStatement);
  });

  //   it('should print with several transactions', () => {
  //     const account = new Account([]);

  //     account.deposit(500);

  //     const expectedStatement = `Date Amount Balance
  // 24.12.2015 +500 500`;
  //     const printedStatement = account.printStatement();

  //     expect(printedStatement).toBe(expectedStatement);
  //   });
});
