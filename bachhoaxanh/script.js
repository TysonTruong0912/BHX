// ===== PRODUCT DATA =====
const products = [
  // Rau củ
  {
    id: 1,
    name: "Rau muống sạch",
    category: "rau-cu",
    price: 12000,
    oldPrice: 15000,
    unit: "bó 500g",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop",
    desc: "Rau muống tươi sạch, trồng theo tiêu chuẩn VietGAP, không thuốc trừ sâu."
  },
  {
    id: 2,
    name: "Cải thìa hữu cơ",
    category: "rau-cu",
    price: 18000,
    oldPrice: 22000,
    unit: "bó 400g",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    desc: "Cải thìa hữu cơ tươi ngon, giàu chất xơ và vitamin."
  },
  {
    id: 3,
    name: "Cà chua bi Đà Lạt",
    category: "rau-cu",
    price: 35000,
    oldPrice: 40000,
    unit: "hộp 500g",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
    desc: "Cà chua bi Đà Lạt ngọt thanh, thích hợp ăn sống hoặc chế biến."
  },
  {
    id: 4,
    name: "Khoai tây Đà Lạt",
    category: "rau-cu",
    price: 28000,
    oldPrice: 32000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    desc: "Khoai tây Đà Lạt củ to, chắc, thích hợp chiên, nướng, nấu canh."
  },
  {
    id: 5,
    name: "Cà rốt Nhật",
    category: "rau-cu",
    price: 45000,
    oldPrice: 50000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    desc: "Cà rốt Nhật ngọt, giòn, giàu beta-carotene."
  },
  {
    id: 6,
    name: "Bắp cải trắng",
    category: "rau-cu",
    price: 15000,
    oldPrice: 18000,
    unit: "cái",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d804c5e4?w=400&h=400&fit=crop",
    desc: "Bắp cải trắng tươi, lá dày, thích hợp muối chua hoặc xào."
  },

  // Trái cây
  {
    id: 7,
    name: "Cam sành Vinh",
    category: "trai-cay",
    price: 45000,
    oldPrice: 55000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
    desc: "Cam sành Vinh ngọt thanh, mọng nước, giàu vitamin C."
  },
  {
    id: 8,
    name: "Chuối sứ",
    category: "trai-cay",
    price: 25000,
    oldPrice: 30000,
    unit: "nải",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c1b04d6?w=400&h=400&fit=crop",
    desc: "Chuối sứ chín tự nhiên, thơm ngon, bổ dưỡng."
  },
  {
    id: 9,
    name: "Dưa hấu đỏ",
    category: "trai-cay",
    price: 18000,
    oldPrice: 22000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587049352846-4a7b0d0d8b0b?w=400&h=400&fit=crop",
    desc: "Dưa hấu đỏ ngọt mát, ruột đỏ tươi."
  },
  {
    id: 10,
    name: "Táo Mỹ",
    category: "trai-cay",
    price: 89000,
    oldPrice: 99000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    desc: "Táo Mỹ giòn ngọt, nhập khẩu chính hãng."
  },
  {
    id: 11,
    name: "Nho xanh không hạt",
    category: "trai-cay",
    price: 120000,
    oldPrice: 135000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop",
    desc: "Nho xanh không hạt nhập khẩu, ngọt thanh, giòn."
  },
  {
    id: 12,
    name: "Xoài cát Hòa Lộc",
    category: "trai-cay",
    price: 65000,
    oldPrice: 75000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    desc: "Xoài cát Hòa Lộc chín cây, thơm ngon đặc trưng."
  },

  // Thịt cá
  {
    id: 13,
    name: "Thịt ba chỉ heo",
    category: "thit-ca",
    price: 125000,
    oldPrice: 140000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop",
    desc: "Thịt ba chỉ heo tươi sạch, nguồn gốc rõ ràng."
  },
  {
    id: 14,
    name: "Ức gà tươi",
    category: "thit-ca",
    price: 85000,
    oldPrice: 95000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    desc: "Ức gà tươi không da, giàu protein, ít béo."
  },
  {
    id: 15,
    name: "Cá basa fillet",
    category: "thit-ca",
    price: 75000,
    oldPrice: 85000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop",
    desc: "Cá basa fillet đông lạnh, thịt trắng ngọt."
  },
  {
    id: 16,
    name: "Tôm sú tươi",
    category: "thit-ca",
    price: 280000,
    oldPrice: 320000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1565680018434-b513bf5c4a0a?w=400&h=400&fit=crop",
    desc: "Tôm sú tươi sống, size lớn, thịt chắc ngọt."
  },
  {
    id: 17,
    name: "Thịt bò Úc",
    category: "thit-ca",
    price: 320000,
    oldPrice: 350000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1603048297172-c925447c8e5e?w=400&h=400&fit=crop",
    desc: "Thịt bò Úc nhập khẩu, mềm, thơm, thích hợp nướng, xào."
  },

  // Sữa & Đồ uống
  {
    id: 18,
    name: "Sữa tươi Vinamilk 1L",
    category: "sua",
    price: 32000,
    oldPrice: 35000,
    unit: "hộp",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    desc: "Sữa tươi tiệt trùng Vinamilk 100% từ sữa bò."
  },
  {
    id: 19,
    name: "Sữa chua ăn Vinamilk",
    category: "sua",
    price: 28000,
    oldPrice: 32000,
    unit: "lốc 4 hộp",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    desc: "Sữa chua ăn Vinamilk vị tự nhiên, tốt cho tiêu hóa."
  },
  {
    id: 20,
    name: "Nước ép cam TH True Juice",
    category: "sua",
    price: 25000,
    oldPrice: 28000,
    unit: "chai 350ml",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    desc: "Nước ép cam nguyên chất, không đường."
  },
  {
    id: 21,
    name: "Sữa đậu nành Fami",
    category: "sua",
    price: 8000,
    oldPrice: 10000,
    unit: "hộp 200ml",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    desc: "Sữa đậu nành Fami nguyên chất, không đường."
  },

  // Đồ khô
  {
    id: 22,
    name: "Gạo ST25 túi 5kg",
    category: "do-kho",
    price: 145000,
    oldPrice: 160000,
    unit: "túi 5kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    desc: "Gạo ST25 ngon nhất thế giới, dẻo thơm."
  },
  {
    id: 23,
    name: "Mì gói Hảo Hảo",
    category: "do-kho",
    price: 4500,
    oldPrice: 5000,
    unit: "gói",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop",
    desc: "Mì Hảo Hảo tôm chua cay, hương vị quen thuộc."
  },
  {
    id: 24,
    name: "Đậu xanh hạt",
    category: "do-kho",
    price: 35000,
    oldPrice: 40000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop",
    desc: "Đậu xanh hạt sạch, thích hợp nấu chè, làm bánh."
  },
  {
    id: 25,
    name: "Bún khô",
    category: "do-kho",
    price: 22000,
    oldPrice: 25000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    desc: "Bún khô sợi nhỏ, dai ngon."
  },

  // Gia vị
  {
    id: 26,
    name: "Nước mắm Nam Ngư",
    category: "gia-vi",
    price: 45000,
    oldPrice: 50000,
    unit: "chai 500ml",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    desc: "Nước mắm Nam Ngư truyền thống, đậm đà."
  },
  {
    id: 27,
    name: "Dầu ăn Neptune",
    category: "gia-vi",
    price: 55000,
    oldPrice: 62000,
    unit: "chai 1L",
    image: "https://images.unsplash.com/photo-1474979266404-7ea403c0a1f2?w=400&h=400&fit=crop",
    desc: "Dầu ăn Neptune tinh luyện, tốt cho sức khỏe."
  },
  {
    id: 28,
    name: "Muối iod",
    category: "gia-vi",
    price: 8000,
    oldPrice: 10000,
    unit: "gói 500g",
    image: "https://images.unsplash.com/photo-1518110925495-5fe2aa6c2841?w=400&h=400&fit=crop",
    desc: "Muối iod tinh khiết, bổ sung iod."
  },
  {
    id: 29,
    name: "Đường cát trắng",
    category: "gia-vi",
    price: 25000,
    oldPrice: 28000,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587049352846-4a7b0d0d8b0b?w=400&h=400&fit=crop",
    desc: "Đường cát trắng tinh luyện."
  },
  {
    id: 30,
    name: "Tương ớt Cholimex",
    category: "gia-vi",
    price: 18000,
    oldPrice: 20000,
    unit: "chai 270g",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    desc: "Tương ớt Cholimex cay nồng, hương vị Việt."
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem("bhx_cart")) || [];
let currentCategory = "all";
let currentProducts = [...products];
let detailQty = 1;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  updateCartCount();
  showPage("home");
});

// ===== PAGE NAVIGATION =====
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  
  const pageMap = {
    home: "homePage",
    products: "productsPage",
    detail: "detailPage",
    cart: "cartPage",
    checkout: "checkoutPage",
    success: "successPage"
  };

  const pageId = pageMap[page];
  if (pageId) {
    document.getElementById(pageId).classList.add("active");
  }

  if (page === "cart") renderCart();
  if (page === "checkout") renderCheckout();
  if (page === "home") renderFeatured();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== RENDER PRODUCTS =====
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:#666;">Không tìm thấy sản phẩm</p>`;
    return;
  }

  container.innerHTML = list.map(p => {
    const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    return `
      <div class="product-card" onclick="showDetail(${p.id})">
        ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-unit">${p.unit}</div>
          <div class="product-price">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Thêm vào giỏ
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function renderFeatured() {
  // Lấy 8 sản phẩm có giảm giá nhiều nhất
  const featured = [...products]
    .filter(p => p.oldPrice)
    .sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price))
    .slice(0, 8);
  renderProducts(featured, "featuredProducts");
}

// ===== FILTER & SORT =====
function filterCategory(cat) {
  currentCategory = cat;
  currentProducts = cat === "all" 
    ? [...products] 
    : products.filter(p => p.category === cat);

  const titles = {
    all: "Tất cả sản phẩm",
    "rau-cu": "Rau củ",
    "trai-cay": "Trái cây",
    "thit-ca": "Thịt cá",
    sua: "Sữa & Đồ uống",
    "do-kho": "Đồ khô",
    "gia-vi": "Gia vị"
  };

  document.getElementById("categoryTitle").textContent = titles[cat] || "Sản phẩm";
  renderProducts(currentProducts, "productsGrid");
  showPage("products");
}

function sortProducts() {
  const sort = document.getElementById("sortSelect").value;
  let sorted = [...currentProducts];

  if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  else if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "vi"));

  renderProducts(sorted, "productsGrid");
}

// ===== SEARCH =====
function handleSearch(e) {
  if (e.key === "Enter") performSearch();
}

function performSearch() {
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!keyword) {
    filterCategory("all");
    return;
  }

  currentProducts = products.filter(p => 
    p.name.toLowerCase().includes(keyword) || 
    p.desc.toLowerCase().includes(keyword)
  );
  currentCategory = "search";
  document.getElementById("categoryTitle").textContent = `Kết quả tìm kiếm: "${keyword}"`;
  renderProducts(currentProducts, "productsGrid");
  showPage("products");
}

// ===== PRODUCT DETAIL =====
function showDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  detailQty = 1;
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  document.getElementById("productDetail").innerHTML = `
    <div class="detail-image">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="detail-info">
      <h1>${p.name}</h1>
      <div class="detail-unit">${p.unit}</div>
      <div class="detail-price">
        <span class="price-current">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
        ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ""}
      </div>
      <p class="detail-desc">${p.desc}</p>
      <div class="quantity-control">
        <button onclick="changeDetailQty(-1)">−</button>
        <input type="number" id="detailQtyInput" value="1" min="1" onchange="detailQty = parseInt(this.value) || 1" />
        <button onclick="changeDetailQty(1)">+</button>
      </div>
      <div class="detail-actions">
        <button class="btn-add" onclick="addToCart(${p.id}, detailQty)">
          <i class="fas fa-cart-plus"></i> Thêm vào giỏ
        </button>
        <button class="btn-buy" onclick="buyNow(${p.id})">
          Mua ngay
        </button>
      </div>
    </div>
  `;
  showPage("detail");
}

function changeDetailQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById("detailQtyInput").value = detailQty;
}

function buyNow(id) {
  addToCart(id, detailQty);
  showPage("cart");
}

// ===== CART =====
function addToCart(id, qty = 1) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, unit: p.unit, qty });
  }

  saveCart();
  updateCartCount();
  showToast(`Đã thêm "${p.name}" vào giỏ hàng`, "success");
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng");
}

function updateCartQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCartCount();
  renderCart();
}

function saveCart() {
  localStorage.setItem("bhx_cart", JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = total;
}

function renderCart() {
  const emptyEl = document.getElementById("emptyCart");
  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummary");

  if (cart.length === 0) {
    emptyEl.style.display = "block";
    itemsEl.innerHTML = "";
    summaryEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  summaryEl.style.display = "block";

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)} / ${item.unit}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateCartQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
      <div style="font-weight:600;min-width:90px;text-align:right;">
        ${formatPrice(item.price * item.qty)}
      </div>
      <i class="fas fa-trash cart-item-remove" onclick="removeFromCart(${item.id})"></i>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 300000 ? 0 : 30000;
  const total = subtotal + shipping;

  document.getElementById("subtotal").textContent = formatPrice(subtotal);
  document.getElementById("shipping").textContent = shipping === 0 ? "Miễn phí" : formatPrice(shipping);
  document.getElementById("total").textContent = formatPrice(total);
}

// ===== CHECKOUT =====
function renderCheckout() {
  if (cart.length === 0) {
    showPage("cart");
    return;
  }

  const itemsEl = document.getElementById("checkoutItems");
  itemsEl.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <span>${item.name} × ${item.qty}</span>
      <span>${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 300000 ? 0 : 30000;
  document.getElementById("checkoutTotal").textContent = formatPrice(subtotal + shipping);
}

function placeOrder() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !phone || !address) {
    showToast("Vui lòng điền đầy đủ thông tin bắt buộc");
    return;
  }

  if (!/^0\d{9}$/.test(phone)) {
    showToast("Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0)");
    return;
  }

  // Tạo mã đơn hàng
  const orderId = "BHX" + Date.now().toString().slice(-8);
  document.getElementById("orderId").textContent = orderId;

  // Xóa giỏ hàng
  cart = [];
  saveCart();
  updateCartCount();

  showPage("success");
  showToast("Đặt hàng thành công!", "success");
}

// ===== UTILITIES =====
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "₫";
}

function showToast(message, type = "") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show " + type;
  setTimeout(() => {
    toast.className = "toast";
  }, 2500);
}

function toggleUserMenu() {
  showToast("Tính năng đăng nhập đang phát triển. Bạn có thể mua hàng không cần đăng nhập.");
}
