const Product = require('./Product');

class Strawberries extends Product {
  constructor(discount, offer) {
    super('SR1', 'Strawberries', 5.0);
    this.discount = discount;
    this.offer = offer;
  }
}

module.exports = Strawberries;
