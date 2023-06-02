class ShoppingCartCheckout {
  constructor() {
    this.shoppingCart = [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addProduct(product) {
    const existingProduct = this.shoppingCart.find(
      (item) => item.product === product,
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct = {
        product,
        quantity: 1,
      };
      this.shoppingCart.push(newProduct);
    }
  }

  calculateTotalPrice() {
    let total = 0;

    this.shoppingCart.forEach((item) => {
      if (item.product.code === 'FR1') {
        const buyOneGetOneFreePrice =
          Math.ceil(item.quantity / 2) * item.product.price;

        total += buyOneGetOneFreePrice;
      } else if (item.product.code === 'SR1' && item.quantity >= 3) {
        
        total += 4.5 * item.quantity;
      } else {
        
        total += item.product.price * item.quantity;
      }
    });

    return total;
  }

  getTotalPrice() {
    const totalPrice = this.calculateTotalPrice();

    return `£${totalPrice.toFixed(2)}`;
  }
}

module.exports = ShoppingCartCheckout;
