const Product = require('./Product');

class FruitTea extends Product {
  constructor() {
    super('FR1', 'Fruit Tea', 3.11);
    this.offer = "buyOneGetOneFree"
  }
}

module.exports = FruitTea;
