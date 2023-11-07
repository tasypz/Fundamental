// dibantu chatgpt

class Product {
    constructor(name, stock, category, color) {
      this.name = name;
      this.stock = stock;
      this.category = category;
      this.color = color;
    }
  }
  
  class Clothing extends Product {
    constructor(name, stock, category, color, size, brand) {
      super(name, stock, category, color);
      this.size = size;
      this.brand = brand;
    }
  }
  
  class Book extends Product {
    constructor(name, stock, category, color, author, totalPage) {
      super(name, stock, category, color);
      this.author = author;
      this.totalPage = totalPage;
    }
  }
  
  class Tokopedia {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    editProduct(productIndex, updatedProduct) {
      if (productIndex >= 0 && productIndex < this.products.length) {
        this.products[productIndex] = updatedProduct;
      }
    }
  
    deleteProduct(productIndex) {
      if (productIndex >= 0 && productIndex < this.products.length) {
        this.products.splice(productIndex, 1);
      }
    }
  
    addToCart(productIndex, quantity) {
      if (productIndex >= 0 && productIndex < this.products.length) {
        const product = this.products[productIndex];
        if (quantity > 0 && product.stock >= quantity) {
          this.cart.push({ product, quantity });
          product.stock -= quantity;
        } else {
          console.log('Not enough stock for this product.');
        }
      } else {
        console.log('Product not found.');
      }
    }
  
    checkout() {
      this.cart.forEach((cartItem) => {
        const product = cartItem.product;
        const quantity = cartItem.quantity;
        product.stock += quantity;
      });
  
      this.cart = [];
    }
  }
  
  // Example usage:
  const tokopedia = new Tokopedia();
  const tShirt = new Clothing('T-Shirt', 10, 'Pakaian', 'Red', 'M', 'Nike');
  const novel = new Book('Great Expectations', 5, 'Buku', 'Blue', 'Charles Dickens', 400);
  
  tokopedia.addProduct(tShirt);
  tokopedia.addProduct(novel);
  
  tokopedia.addToCart(0, 3);
  tokopedia.addToCart(1, 2);
  
  console.log(tokopedia.cart); // Output: [ { product: Clothing {...}, quantity: 3 }, { product: Book {...}, quantity: 2 } ]
  
  tokopedia.checkout();
  console.log(tokopedia.cart); // Output: []
  
  console.log(tShirt.stock); // Output: 7
  console.log(novel.stock); // Output: 3