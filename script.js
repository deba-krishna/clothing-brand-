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

const cart = document.querySelector(".cart");

if (cart) {
  
  cart.addEventListener("click", () => {
    
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