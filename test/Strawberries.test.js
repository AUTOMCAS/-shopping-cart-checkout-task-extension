const Strawberries = require('../src/products/Strawberries')

describe('Strawberries', () => {
  test('should have instance variables', () => {
    const strawberries = new Strawberries()

    expect(strawberries.code).toEqual('SR1')
    expect(strawberries.name).toEqual('Strawberries')
    expect(strawberries.price).toEqual(5.00)
  });

  test('should have discount instance variable', () => {
    const discount = { type: 'multiBuy', quantityRequired: 3, price: 1.5 };
    
    const strawberries = new Strawberries(discount, null)

    expect(strawberries.code).toEqual('SR1')
    expect(strawberries.name).toEqual('Strawberries')
    expect(strawberries.price).toEqual(5.00)
    expect(strawberries.discount).toEqual(discount)
  });

  test('should have offer instance variable', () => {
    const offer = "OFFER"

    const strawberries = new Strawberries(null, offer)

    expect(strawberries.code).toEqual('SR1')
    expect(strawberries.name).toEqual('Strawberries')
    expect(strawberries.price).toEqual(5.00)
    expect(strawberries.discount).toEqual(null)
    expect(strawberries.offer).toEqual("OFFER")
  });

});
