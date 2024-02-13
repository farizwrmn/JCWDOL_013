// Exercise 6.2 //

class Product {
  constructor() {
    this.name;
    this.price;
  }
}

class Transaction extends Product {
  constructor() {
    super();
    this.total = 0;
    this.product = [];
  }

  addToCart() {
    this.product.push({
      name: this.name,
      price: this.price,
      qty: this.qty,
    });
  }

  totalTransactions() {
    let sum = 0;
    for (let i = 0; i < this.product.length; i++) {
      sum += this.product[i].qty * this.product[i].price;
    }
    return sum;
  }

  getTransaction() {
    return {
      total: this.totalTransactions(),
      product: this.product,
    };
  }
}

const transact = new Transaction();

transact.name = "Shoes";
transact.price = 100;
transact.qty = 1;
transact.addToCart();

console.log(transact.name);
console.log(transact.product);

transact.name = "PS";
transact.price = 400;
transact.qty = 1;
transact.addToCart();

console.log(transact.name);
console.log(transact.product);

transact.name = "Adidas";
transact.price = 200;
transact.qty = 1;
transact.addToCart();

console.log(transact.name);
console.log(transact.product);

console.log(transact.getTransaction());

//------------------------------------------------------------------------//
