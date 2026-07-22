// ==========================
// Cart Management
// ==========================

class ShoppingCart {
  constructor() {
    this.cartEmpty = document.getElementById('cartEmpty');
    this.cartItemsContainer = document.getElementById('cartItems');
    this.subtotalEl = document.getElementById('subtotal');
    this.taxEl = document.getElementById('tax');
    this.totalEl = document.getElementById('total');
    this.checkoutBtn = document.getElementById('checkoutBtn');
    
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  getCartItems() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  saveCart(items) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  render() {
    const items = this.getCartItems();

    if (items.length === 0) {
      this.cartEmpty.style.display = 'block';
      this.cartItemsContainer.style.display = 'none';
      this.updateSummary([]);
      return;
    }

    this.cartEmpty.style.display = 'none';
    this.cartItemsContainer.style.display = 'block';
    this.cartItemsContainer.innerHTML = '';

    items.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>Size: ${item.size}</p>
          <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-quantity">
            <button class="qty-decrease" data-index="${index}">−</button>
            <span>${item.quantity}</span>
            <button class="qty-increase" data-index="${index}">+</button>
          </div>
          <div class="cart-item-total">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
          <button class="cart-item-remove" data-index="${index}">
            <i class="ri-delete-bin-line"></i>
          </button>
        </div>
      `;
      this.cartItemsContainer.appendChild(itemElement);
    });

    this.updateSummary(items);
  }

  updateSummary(items) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const total = subtotal + tax;

    this.subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    this.taxEl.textContent = `₹${tax.toLocaleString('en-IN')}`;
    this.totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  setupEventListeners() {
    // Event delegation for cart item buttons
    this.cartItemsContainer.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('button')?.dataset.index);
      
      if (e.target.closest('.qty-increase')) {
        this.increaseQuantity(index);
      } else if (e.target.closest('.qty-decrease')) {
        this.decreaseQuantity(index);
      } else if (e.target.closest('.cart-item-remove')) {
        this.removeItem(index);
      }
    });

    // Checkout button
    if (this.checkoutBtn) {
      this.checkoutBtn.addEventListener('click', () => {
        const items = this.getCartItems();
        if (items.length > 0) {
          // Navigate to success page or payment page
          window.location.href = 'success.html';
        }
      });
    }
  }

  increaseQuantity(index) {
    const items = this.getCartItems();
    if (items[index]) {
      items[index].quantity += 1;
      this.saveCart(items);
      this.render();
    }
  }

  decreaseQuantity(index) {
    const items = this.getCartItems();
    if (items[index]) {
      if (items[index].quantity > 1) {
        items[index].quantity -= 1;
        this.saveCart(items);
        this.render();
      }
    }
  }

  removeItem(index) {
    const items = this.getCartItems();
    items.splice(index, 1);
    this.saveCart(items);
    this.render();
  }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
  new ShoppingCart();
});
