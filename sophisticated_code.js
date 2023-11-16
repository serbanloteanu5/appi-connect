/*
 * Filename: sophisticated_code.js
 * Description: Sophisticated and complex JavaScript code example.
 * 
 * This code demonstrates a simulated e-commerce shopping cart system with various functionalities, such as adding and removing items, calculating total price, applying discounts, etc.
 * Please note that this code is a simplified representation and doesn't cover all edge cases or error handling.
 */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity=1) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  }

  removeItem(product) {
    const index = this.items.findIndex(item => item.name === product.name);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  applyDiscount(discountPercentage) {
    const discount = this.getTotalPrice() * discountPercentage / 100;
    return this.getTotalPrice() - discount;
  }

  print() {
    console.log("=== Shopping Cart Contents ===");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Price: $${item.price}`);
    });
    console.log("=============================");
  }
}

// Usage example
const laptop = new Product("Laptop", 1200);
const headphones = new Product("Headphones", 150);
const mouse = new Product("Mouse", 30);

const cart = new ShoppingCart();
cart.addItem(laptop);
cart.addItem(headphones);
cart.addItem(mouse, 2);
cart.removeItem(headphones);
cart.print();

const totalPrice = cart.getTotalPrice();
console.log(`Total Price: $${totalPrice}`);

const discountedPrice = cart.applyDiscount(10);
console.log(`Discounted Price: $${discountedPrice}`);
