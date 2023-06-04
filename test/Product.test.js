const Product = require('../src//products/Product')

describe('Product', () => {
  test('should have "code" instance variable', () => {
    const product = new Product('codeExample')

    expect(product.code).toEqual('codeExample')
  });

  test('should have "name" instance variable', () => {
    const product = new Product('codeExample', 'Product Name')

    expect(product.name).toEqual('Product Name')
  });

  test('should have "price" instance variable', () => {
    const product = new Product('codeExample', 'Product Name', 3.11)

    expect(product.price).toEqual(3.11)
  });

  test('should have discount instance variable', () => {
    const discount = { type: 'multiBuy', quantityRequired: 3, price: 1.5 };
    
    const product = new Product('codeExample', 'Product Name', 3.11, discount, null)

    expect(product.discount).toEqual(discount)
  });

  test('should have offer instance variable', () => {
    const offer = "OFFER"

    const product = new Product('codeExample', 'Product Name', 3.11, null, offer)

    expect(product.offer).toEqual("OFFER")
  });


});
