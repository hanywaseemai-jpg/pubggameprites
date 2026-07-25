/* ===================================================================
   App shell — header behavior, cart/wishlist state, toasts, i18n
=================================================================== */

const Store = {
  cart: JSON.parse(localStorage.getItem('ps_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ps_wishlist') || '[]'),
  lang: localStorage.getItem('ps_lang') || 'en',

  saveCart(){ localStorage.setItem('ps_cart', JSON.stringify(this.cart)); this.updateBadges(); },
  saveWishlist(){ localStorage.setItem('ps_wishlist', JSON.stringify(this.wishlist)); this.updateBadges(); },

  addToCart(gameId, type, price){
    const existing = this.cart.find(i=>i.gameId===gameId && i.type===type);
    if(existing){ existing.qty++; }
    else { this.cart.push({ gameId, type, price, qty:1 }); }
    this.saveCart();
    toast(`Added to cart`, 'success');
  },
  removeFromCart(gameId, type){
    this.cart = this.cart.filter(i=>!(i.gameId===gameId && i.type===type));
    this.saveCart();
  },
  toggleWishlist(gameId){
    const idx = this.wishlist.indexOf(gameId);
    if(idx>-1){ this.wishlist.splice(idx,1); toast('Removed from wishlist','info'); }
    else { this.wishlist.push(gameId); toast('Added to wishlist','success'); }
    this.saveWishlist();
    return idx===-1;
  },
  isWishlisted(gameId){ return this.wishlist.includes(gameId); },
  cartCount(){ return this.cart.reduce((s,i)=>s+i.qty,0); },

  updateBadges(){
    document.querySelectorAll('[data-cart-count]').forEach(el=>{
      const c = this.cartCount();
      el.textContent = c;
      el.style.display = c>0 ? 'flex' : 'none';
    });
    document.querySelectorAll('[data-wishlist-count]').forEach(el=>{
      const c = this.wishlist.length;
      el.textContent = c;
      el.style.display = c>0 ? 'flex' : 'none';
    });
  }
};

/* ---------------- Toast ---------------- */
function toast(msg, type='success'){
  let wrap = document.getElementById('toast-wrap');
  if(!wrap){
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const el = document.createElement('div');
  el.className = 'toast' + (type==='error' ? ' error' : '');
  const icon = type==='error'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
  el.innerHTML = `<span class="t-icon">${icon}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(), 500);
  }, 2800);
}

/* ---------------- Header scroll ---------------- */
function initHeaderScroll(){
  const header = document.getElementById('site-header');
  if(!header) return;
  const onScroll = ()=>{
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

/* ---------------- Mobile drawer ---------------- */
function initMobileDrawer(){
  const burger = document.querySelector('.burger');
  const drawer = document.querySelector('.mobile-drawer');
  if(!burger || !drawer) return;
  const close = ()=> drawer.classList.remove('open');
  burger.addEventListener('click', ()=> drawer.classList.add('open'));
  drawer.querySelector('.drawer-overlay')?.addEventListener('click', close);
  drawer.querySelector('.drawer-close')?.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));
}

/* ---------------- Scroll reveal ---------------- */
function initScrollReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
  els.forEach(el=>io.observe(el));
}

/* ---------------- Search suggestions ---------------- */
function initSearch(){
  document.querySelectorAll('.header-search input, .drawer-panel .header-search input').forEach(input=>{
    const wrap = input.closest('.header-search');
    let box = wrap.querySelector('.search-suggestions');
    if(!box){
      box = document.createElement('div');
      box.className = 'search-suggestions';
      wrap.appendChild(box);
    }
    input.addEventListener('input', ()=>{
      const q = input.value.trim().toLowerCase();
      if(q.length < 2){ box.classList.remove('open'); return; }
      const matches = GAMES.filter(g=> g.title.toLowerCase().includes(q)).slice(0,5);
      if(!matches.length){
        box.innerHTML = `<div class="suggestion-item"><span class="s-info"><b>No results</b><span>Try another search term</span></span></div>`;
      } else {
        box.innerHTML = matches.map(g=>`
          <a href="game-details.html?slug=${g.slug}" class="suggestion-item">
            <img src="${g.cover}" alt="${g.title}">
            <span class="s-info"><b>${g.title}</b><span>${g.platform.join(' / ')}</span></span>
          </a>
        `).join('');
      }
      box.classList.add('open');
    });
    document.addEventListener('click', (e)=>{
      if(!wrap.contains(e.target)) box.classList.remove('open');
    });
  });
}

/* ---------------- Loader ---------------- */
function initLoader(){
  const loader = document.getElementById('loader');
  if(!loader) return;
  window.addEventListener('load', ()=>{
    setTimeout(()=> loader.classList.add('hidden'), 350);
  });
  // fallback in case load already fired
  setTimeout(()=> loader.classList.add('hidden'), 1800);
}

/* ---------------- Language toggle (stub for AR/EN) ---------------- */
function initLangToggle(){
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const next = Store.lang === 'en' ? 'ar' : 'en';
      Store.lang = next;
      localStorage.setItem('ps_lang', next);
      toast(next==='ar' ? 'سيتم دعم اللغة العربية بالكامل قريباً' : 'Full Arabic UI coming in next phase', 'info');
    });
  });
}

/* ---------------- Init everything ---------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  initLoader();
  initHeaderScroll();
  initMobileDrawer();
  initScrollReveal();
  initSearch();
  initLangToggle();
  Store.updateBadges();
});
