/* ===================================================================
   Shared layout: header, mobile drawer, footer, loader, toast root
=================================================================== */

function renderHeader(activePage=''){
  return `
  <div id="loader"><div class="loader-mark"><span></span><span></span></div></div>

  <header id="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo"><span class="dot"></span>PUL<b>SE</b></a>

      <nav class="main-nav">
        <a href="index.html" class="${activePage==='home'?'active':''}">Home</a>
        <a href="category.html" class="${activePage==='category'?'active':''}">Categories</a>
        <a href="index.html#new-releases">New Releases</a>
        <a href="index.html#offers">Offers</a>
        <a href="dashboard.html" class="${activePage==='dashboard'?'active':''}">My Account</a>
      </nav>

      <div class="header-search">
        ${icon('search')}
        <input type="text" placeholder="Search games...">
      </div>

      <div class="header-actions">
        <button class="lang-toggle">${icon('globe')} <span>EN</span></button>
        <a href="dashboard.html?tab=wishlist" class="btn-icon icon-wrap" aria-label="Wishlist">
          ${icon('heart')}
          <span class="badge-count" data-wishlist-count style="display:none;"></span>
        </a>
        <a href="cart.html" class="btn-icon icon-wrap" aria-label="Cart">
          ${icon('cart')}
          <span class="badge-count" data-cart-count style="display:none;"></span>
        </a>
        <a href="login.html" class="btn-icon" aria-label="Account">${icon('user')}</a>
        <button class="burger" aria-label="Menu">${icon('menu')}</button>
      </div>
    </div>
  </header>

  <div class="mobile-drawer">
    <div class="drawer-overlay"></div>
    <div class="drawer-panel">
      <button class="drawer-close">${icon('close')}</button>
      <div class="header-search">
        ${icon('search')}
        <input type="text" placeholder="Search games...">
      </div>
      <nav class="main-nav">
        <a href="index.html">Home</a>
        <a href="category.html">Categories</a>
        <a href="index.html#new-releases">New Releases</a>
        <a href="index.html#offers">Offers</a>
        <a href="dashboard.html">My Account</a>
        <a href="login.html">Login</a>
      </nav>
    </div>
  </div>
  `;
}

function renderFooter(){
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="index.html" class="logo"><span class="dot"></span>PUL<b>SE</b></a>
          <p class="footer-desc">Your trusted digital store for PlayStation games — Primary, Secondary, and Full Account licenses delivered fast and securely.</p>
          <div class="newsletter">
            <input type="email" placeholder="Your email">
            <button class="btn btn-primary btn-sm">Join</button>
          </div>
        </div>
        <div class="footer-col">
          <h5>Shop</h5>
          <ul>
            <li><a href="category.html">PS5 Games</a></li>
            <li><a href="category.html">PS4 Games</a></li>
            <li><a href="index.html#offers">Offers</a></li>
            <li><a href="index.html#new-releases">New Releases</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Account</h5>
          <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="dashboard.html?tab=orders">Order History</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Support</h5>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Connect</h5>
          <p class="footer-desc" style="margin-bottom:14px;">Get delivery updates and support directly on WhatsApp.</p>
          <div class="social-row">
            <a href="#" class="btn-icon" aria-label="WhatsApp">${icon('mail')}</a>
            <a href="#" class="btn-icon" aria-label="Twitter">${icon('globe')}</a>
            <a href="#" class="btn-icon" aria-label="Instagram">${icon('user')}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 PULSE Digital Store. All rights reserved.</span>
        <div class="pay-icons">
          <span>Vodafone Cash</span>
          <span>InstaPay</span>
          <span>Bank Transfer</span>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function mountLayout(activePage=''){
  document.getElementById('header-root').innerHTML = renderHeader(activePage);
  document.getElementById('footer-root').innerHTML = renderFooter();
}
