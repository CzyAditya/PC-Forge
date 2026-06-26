/* ============================================================
   PC FORGE — Vanilla JS
   ============================================================ */

// ---------- COMPONENT CATALOG ----------
const COMPONENTS = {
  cpu: [
    { id: 'cpu1', name: 'Intel Core i5-13400F',      brand: 'Intel',  price: 195, perf: 72, socket: 'LGA1700', tdp: 65 },
    { id: 'cpu2', name: 'Intel Core i7-13700K',      brand: 'Intel',  price: 395, perf: 88, socket: 'LGA1700', tdp: 125 },
    { id: 'cpu3', name: 'Intel Core i9-14900K',      brand: 'Intel',  price: 569, perf: 98, socket: 'LGA1700', tdp: 125 },
    { id: 'cpu4', name: 'AMD Ryzen 5 7600X',         brand: 'AMD',    price: 229, perf: 76, socket: 'AM5',     tdp: 105 },
    { id: 'cpu5', name: 'AMD Ryzen 7 7800X3D',       brand: 'AMD',    price: 399, perf: 92, socket: 'AM5',     tdp: 120 },
    { id: 'cpu6', name: 'AMD Ryzen 9 7950X',         brand: 'AMD',    price: 549, perf: 96, socket: 'AM5',     tdp: 170 },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA RTX 4060',           brand: 'NVIDIA', price: 299, perf: 65, tdp: 115 },
    { id: 'gpu2', name: 'NVIDIA RTX 4070 Super',     brand: 'NVIDIA', price: 599, perf: 82, tdp: 220 },
    { id: 'gpu3', name: 'NVIDIA RTX 4080 Super',     brand: 'NVIDIA', price: 999, perf: 94, tdp: 320 },
    { id: 'gpu4', name: 'NVIDIA RTX 4090',           brand: 'NVIDIA', price: 1799, perf: 100, tdp: 450 },
    { id: 'gpu5', name: 'AMD RX 7700 XT',            brand: 'AMD',    price: 449, perf: 74, tdp: 245 },
    { id: 'gpu6', name: 'AMD RX 7900 XTX',           brand: 'AMD',    price: 949, perf: 90, tdp: 355 },
  ],
  ram: [
    { id: 'ram1', name: 'Corsair Vengeance 16GB DDR5-5600', brand: 'Corsair', price: 65,  perf: 60, type: 'DDR5' },
    { id: 'ram2', name: 'G.Skill Trident Z5 32GB DDR5-6000', brand: 'G.Skill', price: 125, perf: 80, type: 'DDR5' },
    { id: 'ram3', name: 'Kingston Fury 64GB DDR5-6400',     brand: 'Kingston', price: 245, perf: 92, type: 'DDR5' },
    { id: 'ram4', name: 'Corsair Vengeance 16GB DDR4-3600', brand: 'Corsair', price: 49,  perf: 50, type: 'DDR4' },
  ],
  motherboard: [
    { id: 'mb1', name: 'ASUS ROG STRIX Z790-E',  brand: 'ASUS',   price: 449, perf: 90, socket: 'LGA1700', ramType: 'DDR5' },
    { id: 'mb2', name: 'MSI MAG B760 Tomahawk',  brand: 'MSI',    price: 229, perf: 78, socket: 'LGA1700', ramType: 'DDR5' },
    { id: 'mb3', name: 'Gigabyte X670E AORUS',   brand: 'Gigabyte', price: 469, perf: 92, socket: 'AM5',   ramType: 'DDR5' },
    { id: 'mb4', name: 'ASRock B650M Pro',       brand: 'ASRock', price: 179, perf: 70, socket: 'AM5',     ramType: 'DDR5' },
    { id: 'mb5', name: 'MSI B550 Gaming Plus',   brand: 'MSI',    price: 139, perf: 60, socket: 'AM4',     ramType: 'DDR4' },
  ],
  ssd: [
    { id: 'ssd1', name: 'Samsung 980 1TB NVMe',        brand: 'Samsung', price: 89,  perf: 75 },
    { id: 'ssd2', name: 'Samsung 990 Pro 2TB NVMe',    brand: 'Samsung', price: 199, perf: 95 },
    { id: 'ssd3', name: 'WD Black SN850X 1TB',         brand: 'WD',      price: 109, perf: 90 },
    { id: 'ssd4', name: 'Crucial P3 500GB',            brand: 'Crucial', price: 45,  perf: 55 },
  ],
  psu: [
    { id: 'psu1', name: 'Corsair RM650x 650W Gold',    brand: 'Corsair', price: 109, perf: 70, watts: 650 },
    { id: 'psu2', name: 'Corsair RM850x 850W Gold',    brand: 'Corsair', price: 149, perf: 82, watts: 850 },
    { id: 'psu3', name: 'Seasonic Prime TX 1000W',     brand: 'Seasonic', price: 279, perf: 95, watts: 1000 },
    { id: 'psu4', name: 'EVGA SuperNOVA 1300W',        brand: 'EVGA',    price: 329, perf: 96, watts: 1300 },
  ],
  case: [
    { id: 'case1', name: 'NZXT H7 Flow',         brand: 'NZXT',     price: 129, perf: 80 },
    { id: 'case2', name: 'Lian Li O11 Dynamic',  brand: 'Lian Li',  price: 169, perf: 90 },
    { id: 'case3', name: 'Fractal Meshify 2',    brand: 'Fractal',  price: 149, perf: 85 },
    { id: 'case4', name: 'Corsair 4000D Airflow',brand: 'Corsair',  price: 104, perf: 78 },
  ],
};

const PART_LABELS = {
  cpu: 'CPU', gpu: 'GPU', ram: 'RAM',
  motherboard: 'Motherboard', ssd: 'Storage', psu: 'Power Supply', case: 'Case'
};

// ---------- NAV ----------
function initNav() {
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  if (burger && links) burger.addEventListener('click', () => links.classList.toggle('open'));
  // active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ---------- HOME ----------
function initHome() {
  const featured = document.getElementById('featuredBuilds');
  if (!featured) return;
  const builds = [
    { name: 'Starter Gamer', tag: 'BUDGET', price: 899, desc: '1080p high-FPS esports build', perf: 65 },
    { name: 'Mid-Range Beast', tag: 'POPULAR', price: 1599, desc: '1440p ultra settings, ray tracing ready', perf: 82 },
    { name: 'Ultimate Rig', tag: 'EXTREME', price: 3499, desc: '4K maxed-out, content creation monster', perf: 98 },
  ];
  featured.innerHTML = builds.map(b => `
    <div class="card fade-in">
      <span class="tag ${b.tag==='POPULAR'?'hot':'new'}">${b.tag}</span>
      <h3 style="margin-top:10px">${b.name}</h3>
      <p class="meta">${b.desc}</p>
      <div class="price">$${b.price.toLocaleString()}</div>
      <div class="perf-bar" style="margin-top:14px"><span style="width:${b.perf}%"></span></div>
      <a href="builder.html" class="btn btn-ghost" style="margin-top:14px">Customize →</a>
    </div>
  `).join('');

  // animated counters
  document.querySelectorAll('.stat .num').forEach(el => {
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur.toLocaleString() + (el.dataset.suffix || '');
    }, 20);
  });
}

// ---------- BUILDER ----------
function initBuilder() {
  const list = document.getElementById('partsList');
  if (!list) return;

  const types = ['cpu','motherboard','ram','gpu','ssd','psu','case'];
  const state = {};

  list.innerHTML = types.map(t => `
    <div class="part-row">
      <div class="ptype">${PART_LABELS[t]}</div>
      <select data-type="${t}">
        <option value="">— Select ${PART_LABELS[t]} —</option>
        ${COMPONENTS[t].map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
      <div class="pprice" id="price-${t}">$0</div>
    </div>
  `).join('');

  list.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', e => {
      const type = e.target.dataset.type;
      const id = e.target.value;
      state[type] = id ? COMPONENTS[type].find(c => c.id === id) : null;
      document.getElementById(`price-${type}`).textContent = state[type] ? `$${state[type].price}` : '$0';
      render();
    });
  });

  function render() {
    const items = Object.values(state).filter(Boolean);
    const total = items.reduce((s, p) => s + p.price, 0);
    const avgPerf = items.length ? Math.round(items.reduce((s,p)=>s+p.perf,0)/items.length) : 0;
    document.getElementById('sumTotal').textContent = `$${total.toLocaleString()}`;
    document.getElementById('sumCount').textContent = `${items.length} / ${types.length} parts`;
    document.getElementById('sumPerf').style.width = avgPerf + '%';
    document.getElementById('sumPerfLabel').textContent = avgPerf + ' / 100';

    // compatibility
    const compat = document.getElementById('compat');
    const issues = [];
    if (state.cpu && state.motherboard && state.cpu.socket !== state.motherboard.socket)
      issues.push(`CPU socket (${state.cpu.socket}) does not match motherboard (${state.motherboard.socket}).`);
    if (state.ram && state.motherboard && state.ram.type !== state.motherboard.ramType)
      issues.push(`RAM type (${state.ram.type}) does not match motherboard (${state.motherboard.ramType}).`);
    const draw = (state.cpu?.tdp||0) + (state.gpu?.tdp||0) + 100;
    if (state.psu && draw > state.psu.watts)
      issues.push(`PSU is too weak (${state.psu.watts}W) for estimated ${draw}W draw.`);
    if (issues.length) {
      compat.className = 'compat bad';
      compat.innerHTML = '⚠ ' + issues.join('<br>⚠ ');
    } else {
      compat.className = 'compat';
      compat.innerHTML = items.length ? '✓ All selected parts are compatible.' : 'Start selecting parts to check compatibility.';
    }
  }
  render();

  // SAVE / LOAD
  document.getElementById('saveBtn').addEventListener('click', () => {
    const items = Object.entries(state).filter(([,v])=>v);
    if (!items.length) return alert('Add some parts first!');
    const name = prompt('Name this build:', 'My Build');
    if (!name) return;
    const builds = JSON.parse(localStorage.getItem('pcforge_builds') || '[]');
    builds.push({
      id: Date.now(), name,
      parts: Object.fromEntries(items.map(([k,v])=>[k,v.id])),
      total: items.reduce((s,[,v])=>s+v.price,0)
    });
    localStorage.setItem('pcforge_builds', JSON.stringify(builds));
    renderSaved();
  });
  document.getElementById('resetBtn').addEventListener('click', () => {
    list.querySelectorAll('select').forEach(s => { s.value=''; });
    Object.keys(state).forEach(k => delete state[k]);
    types.forEach(t => document.getElementById(`price-${t}`).textContent='$0');
    render();
  });

  function renderSaved() {
    const wrap = document.getElementById('savedList');
    const builds = JSON.parse(localStorage.getItem('pcforge_builds') || '[]');
    if (!builds.length) { wrap.innerHTML = '<p class="meta" style="font-size:.85rem">No saved builds yet.</p>'; return; }
    wrap.innerHTML = builds.map(b => `
      <div class="saved-item">
        <span><strong>${b.name}</strong> — $${b.total.toLocaleString()}</span>
        <button data-id="${b.id}" title="Delete">×</button>
      </div>
    `).join('');
    wrap.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = +btn.dataset.id;
        const next = JSON.parse(localStorage.getItem('pcforge_builds')||'[]').filter(b=>b.id!==id);
        localStorage.setItem('pcforge_builds', JSON.stringify(next));
        renderSaved();
      });
    });
  }
  renderSaved();
}

// ---------- COMPONENTS PAGE ----------
function initComponents() {
  const grid = document.getElementById('compGrid');
  if (!grid) return;
  const search = document.getElementById('compSearch');
  const filter = document.getElementById('compFilter');
  const sort = document.getElementById('compSort');

  const all = [];
  Object.entries(COMPONENTS).forEach(([type, arr]) => arr.forEach(c => all.push({...c, type})));

  function render() {
    const q = search.value.toLowerCase().trim();
    const f = filter.value;
    const s = sort.value;
    let items = all.filter(c =>
      (!f || c.type === f) &&
      (!q || c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q))
    );
    if (s === 'price-asc') items.sort((a,b)=>a.price-b.price);
    if (s === 'price-desc') items.sort((a,b)=>b.price-a.price);
    if (s === 'perf-desc') items.sort((a,b)=>b.perf-a.perf);
    grid.innerHTML = items.length ? items.map(c => `
      <div class="card comp-card fade-in">
        <span class="tag">${PART_LABELS[c.type]}</span>
        <h3 style="margin-top:10px">${c.name}</h3>
        <div class="spec">Brand: ${c.brand}${c.socket?` · Socket: ${c.socket}`:''}${c.watts?` · ${c.watts}W`:''}${c.type==='ram'?` · ${c.type.toUpperCase()}`:''}</div>
        <div class="price">$${c.price}</div>
        <div class="perf">
          <span>Performance</span>
          <div class="bar"><span style="width:${c.perf}%"></span></div>
          <span>${c.perf}</span>
        </div>
      </div>
    `).join('') : '<p class="meta">No components match your filters.</p>';
  }
  [search, filter, sort].forEach(el => el.addEventListener('input', render));
  render();
}

// ---------- COMPARE PAGE ----------
function initCompare() {
  const a = document.getElementById('buildA');
  const b = document.getElementById('buildB');
  if (!a) return;
  const builds = JSON.parse(localStorage.getItem('pcforge_builds') || '[]');
  const empty = document.getElementById('compareEmpty');
  if (!builds.length) { empty.style.display = 'block'; return; }

  const opts = '<option value="">— Select —</option>' + builds.map(b => `<option value="${b.id}">${b.name} ($${b.total})</option>`).join('');
  a.innerHTML = opts; b.innerHTML = opts;
  [a,b].forEach(s => s.addEventListener('change', render));

  function partInfo(type, id) {
    return id ? COMPONENTS[type].find(c=>c.id===id) : null;
  }
  function render() {
    const ba = builds.find(x => x.id === +a.value);
    const bb = builds.find(x => x.id === +b.value);
    const cols = [['paneA', ba],['paneB', bb]];
    cols.forEach(([id, build]) => {
      const pane = document.getElementById(id);
      if (!build) { pane.innerHTML = '<p class="meta">Select a build to compare.</p>'; return; }
      const parts = Object.entries(build.parts).map(([t,pid]) => {
        const p = partInfo(t,pid);
        return { type:t, name: p?.name||'—', price: p?.price||0, perf: p?.perf||0 };
      });
      const totalPerf = Math.round(parts.reduce((s,p)=>s+p.perf,0)/parts.length);
      const fps = Math.round(30 + totalPerf * 1.4);
      pane.innerHTML = `
        <h3>${build.name}</h3>
        <p class="meta">Total: <strong style="color:var(--primary)">$${build.total.toLocaleString()}</strong></p>
        <div style="margin-top:14px">
          ${parts.map(p => `<div class="row" style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed var(--line)"><span>${PART_LABELS[p.type]}</span><span>${p.name}</span></div>`).join('')}
        </div>
        <div style="margin-top:14px">
          <div class="meta">Estimated Gaming FPS (1440p Ultra)</div>
          <div class="stat" style="padding:16px;margin-top:6px"><div class="num">${fps}</div><div class="label">avg fps</div></div>
        </div>
      `;
    });
    // highlight differences
    if (ba && bb) {
      const aRows = document.querySelectorAll('#paneA .row');
      const bRows = document.querySelectorAll('#paneB .row');
      aRows.forEach((r,i) => {
        const av = r.children[1].textContent, bv = bRows[i].children[1].textContent;
        if (av !== bv) { r.classList.add('diff-highlight'); bRows[i].classList.add('diff-highlight'); }
      });
    }
  }
  render();
}

// ---------- CONTACT FORM ----------
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const alertBox = document.getElementById('formAlert');

  function setErr(field, msg) {
    form.querySelector(`[data-err="${field}"]`).textContent = msg || '';
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    alertBox.innerHTML = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let ok = true;
    setErr('name'); setErr('email'); setErr('subject'); setErr('message');
    if (name.length < 2) { setErr('name','Please enter your name (min 2 chars).'); ok=false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('email','Enter a valid email address.'); ok=false; }
    if (subject.length < 3) { setErr('subject','Subject is too short.'); ok=false; }
    if (message.length < 10) { setErr('message','Message must be at least 10 characters.'); ok=false; }
    if (!ok) {
      alertBox.innerHTML = '<div class="alert bad">Please fix the highlighted fields.</div>';
      return;
    }
    alertBox.innerHTML = '<div class="alert ok">✓ Thanks! Your message has been received. We\'ll get back to you soon.</div>';
    form.reset();
  });
}

// ---------- BOOT ----------
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHome();
  initBuilder();
  initComponents();
  initCompare();
  initContact();
});
