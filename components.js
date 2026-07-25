/* ===================================================================
   Component renderers
=================================================================== */

function renderGameCard(g){
  const wished = Store.isWishlisted(g.id);
  const badges = [];
  if(g.newRelease) badges.push('<span class="badge new">New</span>');
  if(g.bestSeller) badges.push('<span class="badge best">Best Seller</span>');
  if(g.price.oldPrimary && g.price.oldPrimary > g.price.primary) badges.push('<span class="badge sale">Sale</span>');

  return `
  <div class="game-card" data-game-id="${g.id}" onclick="if(!event.target.closest('.card-wish, .card-quickadd')) location.href='game-details.html?slug=${g.slug}'">
    <div class="card-media">
      <img src="${g.cover}" alt="${g.title}" loading="lazy">
      <div class="card-badges">${badges.join('')}</div>
      <button class="card-wish ${wished?'active':''}" aria-label="Toggle wishlist" onclick="handleWishClick(event,'${g.id}')">
        ${icon('heart')}
      </button>
      <div class="card-info">
        <div class="card-plat-row">${g.platform.map(p=>`<span class="mini-tag">${p}</span>`).join('')}</div>
        <h3>${g.title}</h3>
        <div class="card-price-row">
          <div class="card-price">
            <span class="now">$${g.price.primary}</span>
            ${g.price.oldPrimary ? `<span class="old">$${g.price.oldPrimary}</span>` : ''}
          </div>
          <div class="card-rating">${icon('star')}${g.rating}</div>
        </div>
      </div>
      <button class="card-quickadd" aria-label="Quick add to cart" onclick="handleQuickAdd(event,'${g.id}')">
        ${icon('plus')}
      </button>
    </div>
  </div>`;
}

function handleWishClick(e, gameId){
  e.stopPropagation();
  const added = Store.toggleWishlist(gameId);
  e.currentTarget.classList.toggle('active', added);
}

function handleQuickAdd(e, gameId){
  e.stopPropagation();
  const g = getGameById(gameId);
  Store.addToCart(gameId, 'primary', g.price.primary);
}

function renderCardsInto(selector, games){
  const el = document.querySelector(selector);
  if(!el) return;
  el.innerHTML = games.map(renderGameCard).join('');
}

/* ---------------- Skeleton loading then real cards ---------------- */
function renderRailWithSkeleton(selector, games, count=6){
  const el = document.querySelector(selector);
  if(!el) return;
  el.innerHTML = Array.from({length:count}).map(()=>`<div class="skel" style="flex:0 0 240px;"></div>`).join('');
  setTimeout(()=>{ el.innerHTML = games.map(renderGameCard).join(''); }, 500);
}
function renderGridWithSkeleton(selector, games, count=8){
  const el = document.querySelector(selector);
  if(!el) return;
  el.innerHTML = Array.from({length:count}).map(()=>`<div class="skel"></div>`).join('');
  setTimeout(()=>{ el.innerHTML = games.map(renderGameCard).join(''); }, 500);
}

/* ---------------- Hero Slider ---------------- */
function initHeroSlider(){
  const track = document.querySelector('.hero-track');
  if(!track) return;
  const slides = HERO_SLIDES.map(s=>({ ...s, game:getGameById(s.gameId) }));

  track.innerHTML = slides.map((s,i)=>`
    <div class="hero-slide ${i===0?'active':''}" data-index="${i}">
      <img class="hero-bg" src="${s.game.gallery[0] || s.game.cover}" alt="${s.game.title}">
      <div class="hero-content">
        <span class="hero-eyebrow">${icon('disc')} ${s.tag}</span>
        <h1 class="hero-title">${s.game.title}</h1>
        <div class="hero-meta">
          ${s.game.platform.map(p=>`<span class="pill blue">${p}</span>`).join('')}
          <span class="pill gold">${icon('star')} ${s.game.rating}</span>
        </div>
        <p class="hero-desc">${s.game.description}</p>
        <div class="hero-cta">
          <a href="game-details.html?slug=${s.game.slug}" class="btn btn-primary">${icon('cart')} Buy Now — $${s.game.price.primary}</a>
          <a href="game-details.html?slug=${s.game.slug}" class="btn btn-ghost">View Details</a>
        </div>
      </div>
    </div>
  `).join('');

  const dotsWrap = document.querySelector('.hero-nav');
  if(dotsWrap){
    dotsWrap.innerHTML = slides.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" data-go="${i}" aria-label="Go to slide ${i+1}"></button>`).join('');
  }

  let current = 0;
  const slideEls = track.querySelectorAll('.hero-slide');
  const dotEls = dotsWrap ? dotsWrap.querySelectorAll('.hero-dot') : [];
  let timer;

  function goTo(i){
    slideEls[current].classList.remove('active');
    dotEls[current]?.classList.remove('active');
    current = (i + slideEls.length) % slideEls.length;
    slideEls[current].classList.add('active');
    dotEls[current]?.classList.add('active');
    resetTimer();
  }
  function next(){ goTo(current+1); }
  function prev(){ goTo(current-1); }
  function resetTimer(){
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  dotEls.forEach(d=> d.addEventListener('click', ()=> goTo(parseInt(d.dataset.go))));
  document.querySelector('.hero-arrow.next')?.addEventListener('click', next);
  document.querySelector('.hero-arrow.prev')?.addEventListener('click', prev);

  resetTimer();
}

/* ---------------- Category grid ---------------- */
function renderCategories(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  el.innerHTML = CATEGORIES.map(c=>`
    <a href="category.html?name=${encodeURIComponent(c.name)}" class="cat-card reveal">
      <span class="cat-icon">${icon(c.icon)}</span>
      <h4>${c.name}</h4>
      <span>${c.count} Games</span>
    </a>
  `).join('');
}

/* ---------------- Filter bar (Home) ---------------- */
function initFilterBar(){
  const bar = document.querySelector('.filter-bar');
  if(!bar) return;
  bar.querySelectorAll('.filter-chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chip.classList.toggle('active');
    });
  });
}
