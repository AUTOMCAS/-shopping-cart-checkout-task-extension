const PriceCalculator = require('./PriceCalculator')

class ShoppingCartCheckout {
  constructor() {
    this.shoppingCart = [];
    this.priceCalculator = new PriceCalculator()
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addProduct(product) {
    const existingItem = this.shoppingCart.find(
      (item) => item.product === product,
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = {
        product,
        quantity: 1,
      };

      this.shoppingCart.push(newItem);
    }
  }

  calculateTotalPrice() {
    const total = this.priceCalculator.calculateTotal(this.shoppingCart)

    return total;
  }

  getTotalPrice() {
    const totalPrice = this.calculateTotalPrice();

    return `£${totalPrice.toFixed(2)}`;
  }
}

module.exports = ShoppingCartCheckout;
