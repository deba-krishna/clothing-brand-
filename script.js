// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    if (navLinks.classList.contains("active")) {
      menuBtn.classList.remove("ri-menu-3-line");
      menuBtn.classList.add("ri-close-line");
    } else {
      menuBtn.classList.remove("ri-close-line");
      menuBtn.classList.add("ri-menu-3-line");
    }
  });
}

// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}

// ==========================
// Scroll Indicator
// ==========================

const scrollText = document.querySelector(".scroll-text");
const footer = document.querySelector(".footer");

if (scrollText && footer) {
  
  scrollText.style.opacity = "1";
  scrollText.style.pointerEvents = "none";
  
  let scrollTimer;
  
  window.addEventListener("scroll", () => {
    
    scrollText.style.opacity = "0";
    
    clearTimeout(scrollTimer);
    
    scrollTimer = setTimeout(() => {
      
      const footerTop = footer.getBoundingClientRect().top;
      
      if (footerTop > window.innerHeight) {
        scrollText.style.opacity = "1";
      }
      
    }, 700);
    
    const footerTop = footer.getBoundingClientRect().top;
    
    if (footerTop <= window.innerHeight) {
      scrollText.style.opacity = "0";
    }
    
  });
  
}

// ==========================
// Sort Bottom Sheet
// ==========================

const sortBtn = document.querySelector(".sort-btn");
const sortSheet = document.querySelector(".sort-sheet");
const sortOverlay = document.querySelector(".sort-overlay");
const cancelSort = document.querySelector(".cancel-sort");

if (sortBtn && sortSheet) {
  
  sortBtn.addEventListener("click", () => {
    sortSheet.classList.add("active");
  });
  
}

function closeSort() {
  
  if (sortSheet) {
    sortSheet.classList.remove("active");
  }
  
}

if (sortOverlay) {
  sortOverlay.addEventListener("click", closeSort);
}

if (cancelSort) {
  cancelSort.addEventListener("click", closeSort);
}

// ==========================
// Product Sorting
// ==========================

const productGrid = document.querySelector(".product-grid");
const sortOptions = document.querySelectorAll(".sort-option");

if (productGrid && sortOptions.length > 0) {
  
  sortOptions.forEach(option => {
    
    option.addEventListener("click", () => {
      
      // Active state
      sortOptions.forEach(btn => btn.classList.remove("active"));
      option.classList.add("active");
      
      let cards = [...productGrid.querySelectorAll(".product-card")];
      
      switch (option.dataset.sort) {
        
        case "low":
          
          cards.sort((a, b) => {
            
            const priceA = parseInt(a.querySelector(".price").textContent.replace("₹", ""));
            const priceB = parseInt(b.querySelector(".price").textContent.replace("₹", ""));
            
            return priceA - priceB;
            
          });
          
          break;
          
        case "high":
          
          cards.sort((a, b) => {
            
            const priceA = parseInt(a.querySelector(".price").textContent.replace("₹", ""));
            const priceB = parseInt(b.querySelector(".price").textContent.replace("₹", ""));
            
            return priceB - priceA;
            
          });
          
          break;
          
        case "newest":
          
          cards.reverse();
          
          break;
          
        case "best":
          
          // Demo only
          alert("Best Selling sorting will work after products are connected to Supabase.");
          break;
          
      }
      
      cards.forEach(card => productGrid.appendChild(card));
      
      closeSort();
      
    });
    
  });
  
}

/*================ PRODUCT GALLERY ================*/

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

if (mainImage) {
  
  thumbs.forEach((thumb) => {
    
    thumb.addEventListener("click", () => {
      
      mainImage.src = thumb.src;
      
      thumbs.forEach((img) => {
        
        img.classList.remove("active");
        
      });
      
      thumb.classList.add("active");
      
    });
    
  });
  
}

/*================ IMAGE ZOOM ================*/

if (mainImage) {
  
  mainImage.addEventListener("click", () => {
    
    mainImage.classList.toggle("zoom");
    
  });
  
}

/*================ WISHLIST ================*/

const wishlist = document.querySelector(".wishlist");

if (wishlist) {
  
  wishlist.addEventListener("click", () => {
    
    const icon = wishlist.querySelector("i");
    
    icon.classList.toggle("ri-heart-line");
    
    icon.classList.toggle("ri-heart-fill");
    
    wishlist.classList.toggle("liked");
    
  });
  
}

/*================ SIZE SELECTOR ================*/

const sizes = document.querySelectorAll(".size");

sizes.forEach((size) => {
  
  size.addEventListener("click", () => {
    
    sizes.forEach((btn) => {
      
      btn.classList.remove("active");
      
    });
    
    size.classList.add("active");
    
  });
  
});

/*================ QUANTITY ================*/

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const qty = document.getElementById("qty");

let quantity = 1;

if (minus && plus) {
  
  minus.addEventListener("click", () => {
    
    if (quantity > 1) {
      
      quantity--;
      
      qty.textContent = quantity;
      
    }
    
  });
  
  plus.addEventListener("click", () => {
    
    quantity++;
    
    qty.textContent = quantity;
    
  });
  
}

/*================ ADD TO CART ================*/

const cartBtn = document.querySelector(".cart");

if (cartBtn) {
  
  cartBtn.addEventListener("click", () => {
    
    cart.innerHTML = '<i class="ri-check-line"></i>';
    
    cart.style.background = "#16a34a";
    
    setTimeout(() => {
      
      cart.innerHTML = '<i class="ri-shopping-bag-line"></i>';
      
      cart.style.background = "";
      
    }, 1800);
    
  });
  
}

/*================ BUY NOW ================*/

const buy = document.querySelector(".buy");

if (buy) {
  
  buy.addEventListener("click", () => {
    
    window.location.href = "checkout.html";
    
  });
  
}

/*================ ACCORDION ================*/

const details = document.querySelectorAll("details");

details.forEach((item) => {
  
  item.addEventListener("toggle", () => {
    
    if (item.open) {
      
      details.forEach((other) => {
        
        if (other !== item) {
          
          other.removeAttribute("open");
          
        }
        
      });
      
    }
    
  });
  
});

/*================ PRODUCT PAGE ACCORDION ================*/

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  
  header.addEventListener("click", () => {
    
    const item = header.parentElement;
    
    const isActive = item.classList.contains("active");
    
    document.querySelectorAll(".accordion-item").forEach((el) => {
      
      el.classList.remove("active");
      
    });
    
    if (!isActive) {
      
      item.classList.add("active");
      
    }
    
  });
  
});

/*================ SCROLL ANIMATION ================*/

const reveal = document.querySelectorAll(".review-card,.related-card,.feature");

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("show");
      
    }
    
  });
  
}, { threshold: .15 });

reveal.forEach((el) => {
  
  observer.observe(el);
  
});

/*================ CART FUNCTIONALITY ================*/

class Cart {
  
  constructor() {
    
    this.items = this.loadCart();
    
    this.init();
    
  }
  
  loadCart() {
    
    const saved = localStorage.getItem('cart');
    
    return saved ? JSON.parse(saved) : [];
    
  }
  
  saveCart() {
    
    localStorage.setItem('cart', JSON.stringify(this.items));
    
  }
  
  addItem(product) {
    
    const existing = this.items.find(item => item.id === product.id);
    
    if (existing) {
      
      existing.quantity += product.quantity;
      
    } else {
      
      this.items.push(product);
      
    }
    
    this.saveCart();
    
  }
  
  removeItem(productId) {
    
    this.items = this.items.filter(item => item.id !== productId);
    
    this.saveCart();
    
  }
  
  updateQuantity(productId, quantity) {
    
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      
      item.quantity = Math.max(1, quantity);
      
      this.saveCart();
      
    }
    
  }
  
  getTotal() {
    
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
  }
  
  getTax() {
    
    return Math.round(this.getTotal() * 0.18 * 100) / 100;
    
  }
  
  getGrandTotal() {
    
    return this.getTotal() + this.getTax();
    
  }
  
  init() {
    
    if (document.querySelector('.cart-page')) {
      
      this.renderCart();
      
      this.attachEventListeners();
      
    }
    
  }
  
  renderCart() {
    
    const emptyCart = document.getElementById('emptyCart');
    
    const itemsContainer = document.getElementById('cartItemsContainer');
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (this.items.length === 0) {
      
      emptyCart.style.display = 'flex';
      
      itemsContainer.style.display = 'none';
      
      checkoutBtn.disabled = true;
      
    } else {
      
      emptyCart.style.display = 'none';
      
      itemsContainer.style.display = 'block';
      
      checkoutBtn.disabled = false;
      
      itemsContainer.innerHTML = this.items.map(item => `
        
        <div class="cart-item">
          
          <div class="cart-item-image">
            
            <img src="${item.image}" alt="${item.name}">
            
          </div>
          
          <div class="cart-item-details">
            
            <div class="cart-item-header">
              
              <div class="cart-item-name">${item.name}</div>
              
              <button class="cart-item-remove" data-id="${item.id}">
                
                <i class="ri-close-line"></i>
                
              </button>
              
            </div>
            
            <div class="cart-item-meta">
              
              <span>Size: <strong>${item.size}</strong></span>
              
              <span>Color: <strong>${item.color || 'Black'}</strong></span>
              
            </div>
            
            <div class="cart-item-controls">
              
              <div class="quantity-control">
                
                <button class="qty-minus" data-id="${item.id}">
                  
                  <i class="ri-subtract-line"></i>
                  
                </button>
                
                <span>${item.quantity}</span>
                
                <button class="qty-plus" data-id="${item.id}">
                  
                  <i class="ri-add-line"></i>
                  
                </button>
                
              </div>
              
              <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
              
            </div>
            
          </div>
          
        </div>
        
      `).join('');
      
    }
    
    this.updateSummary();
    
  }
  
  updateSummary() {
    
    const subtotal = this.getTotal();
    
    const tax = this.getTax();
    
    const total = this.getGrandTotal();
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    
    document.getElementById('tax').textContent = `₹${tax.toLocaleString('en-IN')}`;
    
    document.getElementById('total').textContent = `₹${total.toLocaleString('en-IN')}`;
    
  }
  
  attachEventListeners() {
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      
      btn.addEventListener('click', (e) => {
        
        const id = parseInt(e.currentTarget.dataset.id);
        
        this.removeItem(id);
        
        this.renderCart();
        
      });
      
    });
    
    document.querySelectorAll('.qty-minus').forEach(btn => {
      
      btn.addEventListener('click', (e) => {
        
        const id = parseInt(e.currentTarget.dataset.id);
        
        const item = this.items.find(item => item.id === id);
        
        if (item && item.quantity > 1) {
          
          this.updateQuantity(id, item.quantity - 1);
          
          this.renderCart();
          
        }
        
      });
      
    });
    
    document.querySelectorAll('.qty-plus').forEach(btn => {
      
      btn.addEventListener('click', (e) => {
        
        const id = parseInt(e.currentTarget.dataset.id);
        
        const item = this.items.find(item => item.id === id);
        
        if (item) {
          
          this.updateQuantity(id, item.quantity + 1);
          
          this.renderCart();
          
        }
        
      });
      
    });
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (checkoutBtn) {
      
      checkoutBtn.addEventListener('click', () => {
        
        if (this.items.length > 0) {
          
          window.location.href = 'checkout.html';
          
        }
        
      });
      
    }
    
    const applyPromo = document.getElementById('applyPromo');
    
    if (applyPromo) {
      
      applyPromo.addEventListener('click', () => {
        
        const code = document.getElementById('promoCode').value;
        
        if (code === 'NOIR20') {
          
          alert('Promo code applied! 20% off on your next purchase.');
          
          document.getElementById('promoCode').value = '';
          
        } else if (code) {
          
          alert('Invalid promo code');
          
        }
        
      });
      
    }
    
  }
  
}

const cart = new Cart();

/*================ CHECKOUT FUNCTIONALITY ================*/

class Checkout {
  
  constructor() {
    
    this.cart = cart;
    
    this.init();
    
  }
  
  init() {
    
    if (document.querySelector('.checkout-page')) {
      
      this.renderOrderSummary();
      
      this.attachEventListeners();
      
    }
    
  }
  
  renderOrderSummary() {
    
    const orderItems = document.getElementById('orderItems');
    
    const items = this.cart.items;
    
    if (items.length > 0) {
      
      orderItems.innerHTML = items.map(item => `
        
        <div class="order-item">
          
          <div>
            
            <div class="order-item-name">${item.name}</div>
            
            <div style="font-size: 0.85rem; color: #999;">Qty: ${item.quantity}</div>
            
          </div>
          
          <div class="order-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
          
        </div>
        
      `).join('');
      
    }
    
    const subtotal = this.cart.getTotal();
    
    const tax = this.cart.getTax();
    
    const total = this.cart.getGrandTotal();
    
    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    
    document.getElementById('checkoutTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
    
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
    
  }
  
  attachEventListeners() {
    
    const paymentBtn = document.getElementById('paymentBtn');
    
    const form = document.getElementById('checkoutForm');
    
    const termsCheck = document.getElementById('termsCheck');
    
    if (paymentBtn) {
      
      paymentBtn.addEventListener('click', () => {
        
        if (this.validateForm()) {
          
          this.processPayment();
          
        }
        
      });
      
    }
    
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    
    paymentMethods.forEach(method => {
      
      method.addEventListener('change', (e) => {
        
          this.updatePaymentDetails(e.target.value);
        
      });
      
    });
    
  }
  
  validateForm() {
    
    const form = document.getElementById('checkoutForm');
    
    const termsCheck = document.getElementById('termsCheck');
    
    if (!form.checkValidity()) {
      
        alert('Please fill all required fields');
      
        return false;
      
    }
    
    if (!termsCheck.checked) {
      
        alert('Please accept the terms and conditions');
      
        return false;
      
    }
    
    const selectedPayment = document.querySelector('input[name="payment"]:checked')?.value;
    
    if (selectedPayment === 'card') {
      
      const cardNumber = document.getElementById('cardNumber').value;
      
      const cardExpiry = document.getElementById('cardExpiry').value;
      
      const cardCVV = document.getElementById('cardCVV').value;
      
      if (!cardNumber || !cardExpiry || !cardCVV) {
        
        alert('Please enter card details');
        
        return false;
        
      }
      
    }
    
    return true;
    
  }
  
  updatePaymentDetails(method) {
    
    const cardPayment = document.getElementById('cardPayment');
    
    if (method === 'card') {
      
        cardPayment.style.display = 'block';
      
    } else {
      
        cardPayment.style.display = 'none';
      
    }
    
  }
  
  processPayment() {
    
    const firstName = document.getElementById('firstName').value;
    
    localStorage.setItem('lastOrder', JSON.stringify({
      
      customer: firstName,
      
      total: this.cart.getGrandTotal(),
      
      items: this.cart.items,
      
      timestamp: new Date()
      
    }));
    
    localStorage.removeItem('cart');
    
    window.location.href = 'success.html';
    
  }
  
}

const checkout = new Checkout();

/*================ SUCCESS PAGE FUNCTIONALITY ================*/

class Success {
  
  constructor() {
    
    this.init();
    
  }
  
  init() {
    
    if (document.querySelector('.success-page')) {
      
      this.displayOrderInfo();
      
    }
    
  }
  
  displayOrderInfo() {
    
    const lastOrder = localStorage.getItem('lastOrder');
    
    if (lastOrder) {
      
      const order = JSON.parse(lastOrder);
      
      const orderInfo = document.getElementById('orderInfo');
      
      const orderNumber = document.getElementById('orderNumber');
      
      const orderDate = new Date(order.timestamp).toLocaleDateString('en-IN', {
        
        year: 'numeric',
        
        month: 'long',
        
        day: 'numeric'
        
      });
      
      const orderHtml = order.items.map(item => `
        
        <div class="order-item">
          
          <div class="order-item-header">${item.name} (Qty: ${item.quantity})</div>
          
          <div class="order-item-detail">Size: ${item.size} | Price: ₹${item.price.toLocaleString('en-IN')}</div>
          
        </div>
        
      `).join('');
      
      orderInfo.innerHTML = orderHtml + `
        
        <div class="order-item">
          
          <div class="order-item-header">Total Amount: ₹${order.total.toLocaleString('en-IN')}</div>
          
          <div class="order-item-detail">Order Date: ${orderDate}</div>
          
        </div>
        
      `;
      
      orderNumber.textContent = '#ORD' + Date.now().toString().slice(-7);
      
    }
    
  }
  
}

const success = new Success();

/*================ CONTACT FORM FUNCTIONALITY ================*/

class ContactForm {
  
  constructor() {
    
    this.init();
    
  }
  
  init() {
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      
      contactForm.addEventListener('submit', (e) => {
        
        this.handleSubmit(e);
        
      });
      
    }
    
  }
  
  handleSubmit(e) {
    
    e.preventDefault();
    
    const form = e.target;
    
    const name = document.getElementById('contactName').value.trim();
    
    const email = document.getElementById('contactEmail').value.trim();
    
    const subject = document.getElementById('contactSubject').value.trim();
    
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !email || !subject || !message) {
      
      this.showMessage('Please fill in all required fields', 'error');
      
      return;
      
    }
    
    if (!this.isValidEmail(email)) {
      
      this.showMessage('Please enter a valid email address', 'error');
      
      return;
      
    }
    
    this.submitForm(form);
    
  }
  
  isValidEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
  }
  
  submitForm(form) {
    
    const formData = new FormData(form);
    
    const data = {
      
      name: document.getElementById('contactName').value,
      
      email: document.getElementById('contactEmail').value,
      
      phone: document.getElementById('contactPhone').value,
      
      subject: document.getElementById('contactSubject').value,
      
      message: document.getElementById('contactMessage').value,
      
      timestamp: new Date()
      
    };
    
    localStorage.setItem('contactMessages', JSON.stringify({
      
      ...data,
      
      id: Date.now()
      
    }));
    
    this.showMessage('Thank you for your message! We&apos;ll get back to you soon.', 'success');
    
    form.reset();
    
    setTimeout(() => {
      
      document.getElementById('formMessage').style.display = 'none';
      
    }, 5000);
    
  }
  
  showMessage(text, type) {
    
    const messageDiv = document.getElementById('formMessage');
    
    messageDiv.textContent = text;
    
    messageDiv.className = `form-message ${type === 'error' ? 'error' : 'success'}`;
    
    messageDiv.style.display = 'block';
    
  }
  
}

const contactForm = new ContactForm();
