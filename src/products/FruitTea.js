const Product = require('./Product');

class FruitTea extends Product {
  constructor(discount, offer) {
    super('FR1', 'Fruit Tea', 3.11);
    this.discount = discount
    this.offer = offer
  }
}

module.exports = FruitTea;
