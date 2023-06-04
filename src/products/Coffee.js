const Product = require('./Product');

class Coffee extends Product {
  constructor(discount, offer) {
    super('CF1', 'Coffee', 11.23);
    this.discount = discount
    this.offer = offer
  }
}

module.exports = Coffee;
