const PriceCalculator = require('../src/PriceCalculator');

const FruitTea = require('../src/products/FruitTea');
const Strawberries = require('../src/products/Strawberries');
const Coffee = require('../src/products/Coffee');

describe('PriceCalculator', () => {
  const fruitTea = new FruitTea();
  const strawberries = new Strawberries();
  const coffee = new Coffee();

  test('should calculate offer price', () => {
    const priceCalculator = new PriceCalculator();

    const mockItem = {
      product: fruitTea,
      quantity: 3
    }

    expect(priceCalculator.calculateOfferPrice(mockItem)).toEqual(6.22);
  });

  test('should calculate discount price', () => {
    const priceCalculator = new PriceCalculator();

    const mockItem = {
      product: strawberries,
      quantity: 3
    }

    expect(priceCalculator.calculateDiscountedPrice(mockItem)).toEqual(13.5);
  });


  test('should calculate total price', () => {
    const priceCalculator = new PriceCalculator();

    const mockShoppingCart = [{
      product: strawberries,
      quantity: 3
    },
    {
      product: fruitTea,
      quantity: 2
    },
    {
      product: coffee,
      quantity: 1
    },
  ]

    expect(priceCalculator.calculateTotal(mockShoppingCart)).toEqual(27.84);
  });


});
