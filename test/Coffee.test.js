const Coffee = require('../src/products/Coffee')

describe('Coffee', () => {
  test('should have instance variables', () => {
    const coffee = new Coffee()

    expect(coffee.code).toEqual('CF1')
    expect(coffee.name).toEqual('Coffee')
    expect(coffee.price).toEqual(11.23)
  });

  test('should have discount instance variable', () => {
    const discount = { type: 'multiBuy', quantityRequired: 3, price: 1.5 };
    
    const coffee = new Coffee(discount, null)

    expect(coffee.code).toEqual('CF1')
    expect(coffee.name).toEqual('Coffee')
    expect(coffee.price).toEqual(11.23)
    expect(coffee.discount).toEqual(discount)
  });

  test('should have offer instance variable', () => {
    const offer = "OFFER"

    const coffee = new Coffee(null, offer)

    expect(coffee.code).toEqual('CF1')
    expect(coffee.name).toEqual('Coffee')
    expect(coffee.price).toEqual(11.23)
    expect(coffee.discount).toEqual(null)
    expect(coffee.offer).toEqual("OFFER")
  });
});
