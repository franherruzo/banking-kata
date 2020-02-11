import Transaction from './Transaction';
class Account {
  constructor(private transactions: Transaction[]) {}
  printStatement() {
    const lines = [`Date Amount Balance`];
    this.transactions.forEach(t => {
      lines.push(`${t.date} ${t.amount} ${t.balance}`);
    });
    return lines.join('\n');
  }
}

export default Account;
