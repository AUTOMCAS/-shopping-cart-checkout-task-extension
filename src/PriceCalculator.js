class PriceCalculator {
  calculateDiscountedPrice(item) {
    const discount = item.product.discount;

    if (
      discount.type === 'multiBuy' &&
      item.quantity >= discount.quantityRequired
    ) {
      return discount.price * item.quantity;
    }

    return item.product.price;
  }

  calculateOfferPrice(item) {
    if (item.product.offer === 'buyOneGetOneFree') {
      const totalPrice =
        Math.ceil(item.quantity / 2) * item.product.price;
        
      return totalPrice; 
    }

    return item.product.price;
  }

  calculateTotal(shoppingCart) {
    let total = 0;

    shoppingCart.forEach((item) => {
      if (item.product.discount) {
        total += this.calculateDiscountedPrice(item);
      } else if (item.product.offer) {
        total += this.calculateOfferPrice(item);
      } else {
        total += item.product.price * item.quantity;
      }
    });

    return total;
  }
}


module.exports = PriceCalculator;