const ShoppingCartCheckout = require('../src/ShoppingCartCheckout')
const Product = require('../src/Product')

describe('ShoppingCartCheckout', () => {
  test('should return shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()

    expect(shoppingCartCheckout.getShoppingCart()).toEqual([])
  });

  test('should add product to shopping cart', () => {

    const shoppingCartCheckout = new ShoppingCartCheckout()
    const product = new Product('FR1', 'Fruit Tea', 3.11)

    shoppingCartCheckout.addProduct(product)

    const shoppingCart = shoppingCartCheckout.getShoppingCart()

    expect(shoppingCart[0]).toEqual(product)
  });

});
