/* ── Helpers ── */
function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function sectionCard(icon, title, bodyFn) {
  const card = el('div', 'section-card');
  const header = el('div', 'section-header');
  header.appendChild(el('span', 'icon', icon));
  header.appendChild(el('h2', null, title));
  card.appendChild(header);
  const body = el('div', 'section-body');
  bodyFn(body);
  card.appendChild(body);
  return card;
}

/* ── Nav ── */
const NAV_LINKS = [
  { href: 'index.html',     label: '🏠 概覽' },
  { href: 'itinerary.html', label: '🗺️ 行程' },
  { href: 'day.html?day=1', label: 'Day 1' },
  { href: 'day.html?day=2', label: 'Day 2' },
  { href: 'day.html?day=3', label: 'Day 3' },
  { href: 'day.html?day=4', label: 'Day 4' },
  { href: 'day.html?day=5', label: 'Day 5' },
  { href: 'day.html?day=6', label: 'Day 6' },
];

function renderNav(activePage) {
  const nav = el('nav', 'site-nav');
  const inner = el('div', 'nav-inner');
  NAV_LINKS.forEach(link => {
    const a = el('a', null, link.label);
    a.href = link.href;
    // Mark active: match by page file name (and day param if applicable)
    const currentFile = location.pathname.split('/').pop() || 'index.html';
    const currentDay  = new URLSearchParams(location.search).get('day');
    const linkFile    = link.href.split('?')[0];
    const linkDay     = new URLSearchParams(link.href.split('?')[1] || '').get('day');
    const isActive    = linkFile === currentFile &&
                        (linkDay === null || linkDay === currentDay);
    if (isActive) a.classList.add('active');
    inner.appendChild(a);
  });
  nav.appendChild(inner);
  document.body.insertBefore(nav, document.body.firstChild);
}

/* ── Footer ── */
function renderFooter(container) {
  container.appendChild(el('footer', null, 'Made with IBM Bob'));
}

/* ── Hero (index only) ── */
function renderHero(container) {
  const hero = el('div', 'hero');
  hero.appendChild(el('h1', null, TRIP.title));
  hero.appendChild(el('p', 'subtitle', TRIP.subtitle));
  const row = el('div', 'badge-row');
  TRIP.badges.forEach(b => row.appendChild(el('span', 'badge', b)));
  hero.appendChild(row);
  container.appendChild(hero);
}

/* ── Flights ── */
function renderFlights(container) {
  container.appendChild(sectionCard('✈️', '1. 機票 Flights', (body) => {
    const grid = el('div', 'info-grid');
    TRIP.flights.forEach(f => {
      const card = el('div', 'info-card');
      card.appendChild(el('div', 'label', f.label));
      card.appendChild(el('div', 'value', f.flight));
      const detail = el('div', 'detail');
      detail.innerHTML = f.route.replace('→', '<span class="arrow">→</span>');
      card.appendChild(detail);
      card.appendChild(el('div', 'meta', f.airline));
      grid.appendChild(card);
    });
    body.appendChild(grid);
  }));
}

/* ── Car Rental ── */
function renderCar(container) {
  container.appendChild(sectionCard('🚙', '2. 租車 Car Rental', (body) => {
    const grid = el('div', 'info-grid');
    TRIP.car.forEach(c => {
      const card = el('div', 'info-card');
      card.appendChild(el('div', 'label', c.label));
      card.appendChild(el('div', 'value', c.value));
      card.appendChild(el('div', 'detail', c.detail));
      if (c.detail2) card.appendChild(el('div', 'detail', c.detail2));
      if (c.meta)    card.appendChild(el('div', 'meta', c.meta));
      grid.appendChild(card);
    });
    body.appendChild(grid);
  }));
}

/* ── Accommodation ── */
function renderAccommodation(container) {
  container.appendChild(sectionCard('🏨', '3. 住宿 Accommodation', (body) => {
    TRIP.accommodation.forEach(a => {
      const block = el('div', 'accom-block' + (a.style === 'second' ? ' second' : ''));
      block.appendChild(el('div', 'period', a.period));
      block.appendChild(el('div', 'name', a.name));
      block.appendChild(el('div', 'addr', a.addr));
      block.appendChild(el('div', 'note', a.note));
      body.appendChild(block);
    });
  }));
}

/* ── Itinerary page: Summary + Overview Grid ── */
function renderItineraryPage(container) {
  // Page header
  const ph = el('div', 'page-header');
  ph.appendChild(el('h1', null, '🗺️ 行程總覽'));
  ph.appendChild(el('p', 'page-subtitle', TRIP.subtitle));
  container.appendChild(ph);

  // Summary box
  const box = el('div', 'summary-box');
  box.innerHTML = TRIP.summary.text;
  const list = el('div', 'principle-list');
  TRIP.summary.principles.forEach(p => list.appendChild(el('span', 'principle-tag', p)));
  box.appendChild(list);
  container.appendChild(box);

  // Overview grid
  const grid = el('div', 'itinerary-grid');
  TRIP.days.forEach((day, i) => {
    const a = el('a', 'itinerary-overview-card');
    a.href = `day.html?day=${i + 1}`;

    const header = el('div', 'ioc-header');
    header.appendChild(el('span', 'ioc-badge', day.badge));
    header.appendChild(el('span', 'ioc-title', day.title));
    a.appendChild(header);

    const body = el('div', 'ioc-body');
    const ul = el('ul', 'ioc-spots');
    day.spots.slice(0, 3).forEach(s => ul.appendChild(el('li', null, s.name)));
    body.appendChild(ul);
    body.appendChild(el('span', 'ioc-link', '查看詳情 →'));
    a.appendChild(body);

    grid.appendChild(a);
  });
  container.appendChild(grid);
}

/* ── Day page ── */
function renderDayPage(container) {
  const params  = new URLSearchParams(location.search);
  const dayNum  = parseInt(params.get('day') || '1', 10);
  const idx     = Math.max(0, Math.min(dayNum - 1, TRIP.days.length - 1));
  const day     = TRIP.days[idx];

  // Prev / next nav
  const nav = el('div', 'day-nav');
  const prevA = el('a', 'day-nav-btn' + (dayNum <= 1 ? ' disabled' : ''), '← 前一天');
  prevA.href  = `day.html?day=${dayNum - 1}`;
  const nextA = el('a', 'day-nav-btn' + (dayNum >= TRIP.days.length ? ' disabled' : ''), '後一天 →');
  nextA.href  = `day.html?day=${dayNum + 1}`;
  const center = el('div', 'day-nav-center', `第 ${dayNum} 天，共 ${TRIP.days.length} 天`);
  nav.appendChild(prevA);
  nav.appendChild(center);
  nav.appendChild(nextA);
  container.appendChild(nav);

  // Day detail card
  const card = el('div', 'day-card');

  const dh = el('div', 'day-header');
  dh.appendChild(el('span', 'day-badge', day.badge));
  dh.appendChild(el('span', 'day-title', day.title));
  card.appendChild(dh);

  const body = el('div', 'day-body');

  if (day.spots.length) {
    body.appendChild(el('div', 'block-label', '景點'));
    const ul = el('ul', 'spot-list');
    day.spots.forEach(s => {
      const li = el('li');
      li.appendChild(el('span', 'spot-name', s.name));
      li.appendChild(el('span', 'spot-note', s.note));
      ul.appendChild(li);
    });
    body.appendChild(ul);
  }

  if (day.foods.length) {
    body.appendChild(el('div', 'block-label', '美食'));
    const row = el('div', 'food-row');
    day.foods.forEach(f => row.appendChild(el('span', 'food-tag', f)));
    body.appendChild(row);
  }

  card.appendChild(body);
  container.appendChild(card);
}

/* ── Page init ── */
document.addEventListener('DOMContentLoaded', () => {
  const page = (location.pathname.split('/').pop() || 'index.html');
  renderNav(page);

  const root = document.getElementById('app');

  if (page === 'index.html' || page === '') {
    renderHero(root);
    renderFlights(root);
    renderCar(root);
    renderAccommodation(root);
  } else if (page === 'itinerary.html') {
    renderItineraryPage(root);
  } else if (page === 'day.html') {
    renderDayPage(root);
  }

  renderFooter(root);
});
