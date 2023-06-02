const Product = require('./Product');

class Strawberries extends Product {
  constructor() {
    super('SR1', 'Strawberries', 5.0);
    this.discount = { type: 'multiBuy', quantityRequired: 3, price: 4.5 };
  }
}

module.exports = Strawberries;
