const FruitTea = require('../src/products/FruitTea')

describe('FruitTea', () => {
  test('should have basic instance variables', () => {
    const fruitTea = new FruitTea(null, null)

    expect(fruitTea.code).toEqual('FR1')
    expect(fruitTea.name).toEqual('Fruit Tea')
    expect(fruitTea.price).toEqual(3.11)
  });

  test('should have discount instance variable', () => {
    const discount = { type: 'multiBuy', quantityRequired: 3, price: 1.5 };

    const fruitTea = new FruitTea(discount, null)

    expect(fruitTea.code).toEqual('FR1')
    expect(fruitTea.name).toEqual('Fruit Tea')
    expect(fruitTea.price).toEqual(3.11)
    expect(fruitTea.discount).toEqual(discount)
  });

  test('should have offer instance variable', () => {
    const offer = "OFFER"

    const fruitTea = new FruitTea(null, offer)

    expect(fruitTea.code).toEqual('FR1')
    expect(fruitTea.name).toEqual('Fruit Tea')
    expect(fruitTea.price).toEqual(3.11)
    expect(fruitTea.discount).toEqual(null)
    expect(fruitTea.offer).toEqual("OFFER")
  });

});
