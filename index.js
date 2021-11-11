let balance = 500.00;

class Transaction {

   // Pass in the account that the withdrawal this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) return false;
    this.time = new Date();
    this.account.addTransactions(this);
  }
}

class Withdrawal extends Transaction{
  // Update the balance in the account
  get value() {
    return -(this.amount);
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

}

class Deposit extends Transaction{
  // Update the balance in the account
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    let bal = 0;
    for (let item of this.transactions) {
      bal += item.value;
    }
    return bal;
  }
  addTransactions(transaction) {
    this.transactions.push(transaction);
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(70, myAccount);
t2.commit();
console.log('Transaction 2:', t);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Ending Balance:', myAccount.balance);
