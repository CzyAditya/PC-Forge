/* ============================================================
   PC FORGE — Vanilla JS
   ============================================================ */

// Stable Unsplash product photos
const IMG = {
  cpu: [
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80',
    'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=600&q=80',
  ],
  gpu: [
    'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80',
    'https://images.unsplash.com/photo-1591489630734-cfb9c33a9f72?w=600&q=80',
    'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600&q=80',
    'https://images.unsplash.com/photo-1623934199716-dc28818a3471?w=600&q=80',
    'https://images.unsplash.com/photo-1591405351990-4726e331f141?w=600&q=80',
  ],
  ram: [
    'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&q=80',
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80',
  ],
  motherboard: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    'https://images.unsplash.com/photo-1601737487795-dab272f52420?w=600&q=80',
  ],
  ssd: [
    'https://images.unsplash.com/photo-1601999205095-c66ec6dd6cb6?w=600&q=80',
    'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80',
  ],
  psu: [
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80',
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80',
  ],
  case: [
    'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=600&q=80',
    'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600&q=80',
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80',
  ],
  gaming_laptop: [
    'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&q=80',
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=700&q=80',
    'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=700&q=80',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&q=80',
  ],
  productivity_laptop: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80',
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80',
  ],
};
const pick = (arr, i) => arr[i % arr.length];

// ---------- COMPONENT CATALOG ----------
const COMPONENTS = {
  cpu: [
    { id: 'cpu1', name: 'Intel Core i5-13400F',      brand: 'Intel',  price: 195, perf: 72, socket: 'LGA1700', tdp: 65,  img: pick(IMG.cpu,0) },
    { id: 'cpu2', name: 'Intel Core i7-13700K',      brand: 'Intel',  price: 395, perf: 88, socket: 'LGA1700', tdp: 125, img: pick(IMG.cpu,1) },
    { id: 'cpu3', name: 'Intel Core i9-14900K',      brand: 'Intel',  price: 569, perf: 98, socket: 'LGA1700', tdp: 125, img: pick(IMG.cpu,2) },
    { id: 'cpu4', name: 'AMD Ryzen 5 7600X',         brand: 'AMD',    price: 229, perf: 76, socket: 'AM5',     tdp: 105, img: pick(IMG.cpu,3) },
    { id: 'cpu5', name: 'AMD Ryzen 7 7800X3D',       brand: 'AMD',    price: 399, perf: 92, socket: 'AM5',     tdp: 120, img: pick(IMG.cpu,0) },
    { id: 'cpu6', name: 'AMD Ryzen 9 7950X',         brand: 'AMD',    price: 549, perf: 96, socket: 'AM5',     tdp: 170, img: pick(IMG.cpu,1) },
    { id: 'cpu7', name: 'Intel Core Ultra 9 285K',   brand: 'Intel',  price: 629, perf: 99, socket: 'LGA1851', tdp: 125, img: pick(IMG.cpu,2) },
    { id: 'cpu8', name: 'AMD Ryzen 9 9950X3D',       brand: 'AMD',    price: 699, perf: 100,socket: 'AM5',     tdp: 170, img: pick(IMG.cpu,3) },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA RTX 4060',                       brand: 'NVIDIA', price: 299,  perf: 65,  tdp: 115, img: pick(IMG.gpu,0) },
    { id: 'gpu2', name: 'NVIDIA RTX 4070 Super',                 brand: 'NVIDIA', price: 599,  perf: 82,  tdp: 220, img: pick(IMG.gpu,1) },
    { id: 'gpu3', name: 'NVIDIA RTX 4080 Super',                 brand: 'NVIDIA', price: 999,  perf: 94,  tdp: 320, img: pick(IMG.gpu,2) },
    { id: 'gpu4', name: 'NVIDIA RTX 4090 Founders Edition',      brand: 'NVIDIA', price: 1799, perf: 100, tdp: 450, img: pick(IMG.gpu,3) },
    { id: 'gpu5', name: 'AMD Radeon RX 7700 XT',                 brand: 'AMD',    price: 449,  perf: 74,  tdp: 245, img: pick(IMG.gpu,4) },
    { id: 'gpu6', name: 'AMD Radeon RX 7900 XTX',                brand: 'AMD',    price: 949,  perf: 90,  tdp: 355, img: pick(IMG.gpu,0) },
    { id: 'gpu7', name: 'ASUS ROG Astral RTX 5090 OC',           brand: 'ASUS',   price: 2799, perf: 100, tdp: 575, img: pick(IMG.gpu,2) },
    { id: 'gpu8', name: 'ASUS ROG Matrix Platinum RTX 4090',     brand: 'ASUS',   price: 3499, perf: 100, tdp: 480, img: pick(IMG.gpu,3) },
    { id: 'gpu9', name: 'MSI SUPRIM X RTX 4080 Super',           brand: 'MSI',    price: 1099, perf: 94,  tdp: 320, img: pick(IMG.gpu,1) },
    { id: 'gpu10',name: 'Gigabyte AORUS RTX 4070 Ti Master',     brand: 'Gigabyte', price: 829,perf: 86,  tdp: 285, img: pick(IMG.gpu,4) },
    { id: 'gpu11',name: 'Sapphire NITRO+ RX 7900 XT',            brand: 'Sapphire', price: 799,perf: 87,  tdp: 315, img: pick(IMG.gpu,0) },
    { id: 'gpu12',name: 'NVIDIA RTX 5080',                       brand: 'NVIDIA', price: 1199, perf: 96,  tdp: 360, img: pick(IMG.gpu,2) },
  ],
  ram: [
    { id: 'ram1', name: 'Corsair Vengeance 16GB DDR5-5600',      brand: 'Corsair', price: 65,  perf: 60, type: 'DDR5', img: pick(IMG.ram,0) },
    { id: 'ram2', name: 'G.Skill Trident Z5 RGB 32GB DDR5-6000', brand: 'G.Skill', price: 125, perf: 80, type: 'DDR5', img: pick(IMG.ram,1) },
    { id: 'ram3', name: 'Kingston Fury Beast 64GB DDR5-6400',    brand: 'Kingston',price: 245, perf: 92, type: 'DDR5', img: pick(IMG.ram,0) },
    { id: 'ram4', name: 'Corsair Vengeance 16GB DDR4-3600',      brand: 'Corsair', price: 49,  perf: 50, type: 'DDR4', img: pick(IMG.ram,1) },
  ],
  motherboard: [
    { id: 'mb1', name: 'ASUS ROG STRIX Z790-E',  brand: 'ASUS',    price: 449, perf: 90, socket: 'LGA1700', ramType: 'DDR5', img: pick(IMG.motherboard,0) },
    { id: 'mb2', name: 'MSI MAG B760 Tomahawk',  brand: 'MSI',     price: 229, perf: 78, socket: 'LGA1700', ramType: 'DDR5', img: pick(IMG.motherboard,1) },
    { id: 'mb3', name: 'Gigabyte X670E AORUS',   brand: 'Gigabyte',price: 469, perf: 92, socket: 'AM5',     ramType: 'DDR5', img: pick(IMG.motherboard,0) },
    { id: 'mb4', name: 'ASRock B650M Pro',       brand: 'ASRock',  price: 179, perf: 70, socket: 'AM5',     ramType: 'DDR5', img: pick(IMG.motherboard,1) },
    { id: 'mb5', name: 'MSI B550 Gaming Plus',   brand: 'MSI',     price: 139, perf: 60, socket: 'AM4',     ramType: 'DDR4', img: pick(IMG.motherboard,0) },
  ],
  ssd: [
    { id: 'ssd1', name: 'Samsung 980 1TB NVMe',     brand: 'Samsung', price: 89,  perf: 75, img: pick(IMG.ssd,0) },
    { id: 'ssd2', name: 'Samsung 990 Pro 2TB NVMe', brand: 'Samsung', price: 199, perf: 95, img: pick(IMG.ssd,1) },
    { id: 'ssd3', name: 'WD Black SN850X 1TB',      brand: 'WD',      price: 109, perf: 90, img: pick(IMG.ssd,0) },
    { id: 'ssd4', name: 'Crucial P3 500GB',         brand: 'Crucial', price: 45,  perf: 55, img: pick(IMG.ssd,1) },
  ],
  psu: [
    { id: 'psu1', name: 'Corsair RM650x 650W Gold',  brand: 'Corsair',  price: 109, perf: 70, watts: 650,  img: pick(IMG.psu,0) },
    { id: 'psu2', name: 'Corsair RM850x 850W Gold',  brand: 'Corsair',  price: 149, perf: 82, watts: 850,  img: pick(IMG.psu,1) },
    { id: 'psu3', name: 'Seasonic Prime TX 1000W',   brand: 'Seasonic', price: 279, perf: 95, watts: 1000, img: pick(IMG.psu,0) },
    { id: 'psu4', name: 'EVGA SuperNOVA 1300W',      brand: 'EVGA',     price: 329, perf: 96, watts: 1300, img: pick(IMG.psu,1) },
  ],
  case: [
    { id: 'case1', name: 'NZXT H7 Flow',          brand: 'NZXT',    price: 129, perf: 80, img: pick(IMG.case,0) },
    { id: 'case2', name: 'Lian Li O11 Dynamic',   brand: 'Lian Li', price: 169, perf: 90, img: pick(IMG.case,1) },
    { id: 'case3', name: 'Fractal Meshify 2',     brand: 'Fractal', price: 149, perf: 85, img: pick(IMG.case,2) },
    { id: 'case4', name: 'Corsair 4000D Airflow', brand: 'Corsair', price: 104, perf: 78, img: pick(IMG.case,0) },
  ],
};

// ---------- LAPTOPS ----------
const LAPTOPS = [
  // Gaming
  { id: 'lap1', name: 'ASUS ROG Strix SCAR 18 (2024)',  brand: 'ASUS',    type: 'gaming', price: 3299, perf: 98, spec: 'i9-14900HX · RTX 4090 · 32GB DDR5 · 2TB SSD · 18" 240Hz Mini-LED', img: pick(IMG.gaming_laptop,0) },
  { id: 'lap2', name: 'Razer Blade 16 Advanced',        brand: 'Razer',   type: 'gaming', price: 2999, perf: 94, spec: 'i9-14900HX · RTX 4080 · 32GB · 1TB SSD · 16" 240Hz OLED',         img: pick(IMG.gaming_laptop,1) },
  { id: 'lap3', name: 'Alienware m18 R2',               brand: 'Dell',    type: 'gaming', price: 2799, perf: 92, spec: 'i9-14900HX · RTX 4080 · 32GB · 1TB · 18" 165Hz QHD+',            img: pick(IMG.gaming_laptop,2) },
  { id: 'lap4', name: 'MSI Raider GE78 HX',             brand: 'MSI',     type: 'gaming', price: 2599, perf: 90, spec: 'i9-14900HX · RTX 4080 · 32GB · 2TB · 17" 240Hz Mini-LED',         img: pick(IMG.gaming_laptop,3) },
  { id: 'lap5', name: 'Lenovo Legion Pro 7i',           brand: 'Lenovo',  type: 'gaming', price: 2199, perf: 87, spec: 'i9-14900HX · RTX 4080 · 32GB · 1TB · 16" 240Hz WQXGA',           img: pick(IMG.gaming_laptop,0) },
  { id: 'lap6', name: 'ASUS ROG Zephyrus G14 (2024)',   brand: 'ASUS',    type: 'gaming', price: 1799, perf: 82, spec: 'Ryzen 9 8945HS · RTX 4070 · 32GB · 1TB · 14" 120Hz OLED',         img: pick(IMG.gaming_laptop,1) },
  { id: 'lap7', name: 'Acer Predator Helios 16',        brand: 'Acer',    type: 'gaming', price: 1699, perf: 80, spec: 'i7-14700HX · RTX 4070 · 16GB · 1TB · 16" 240Hz WQXGA',           img: pick(IMG.gaming_laptop,2) },
  { id: 'lap8', name: 'HP OMEN Transcend 16',           brand: 'HP',      type: 'gaming', price: 1499, perf: 76, spec: 'i7-13700HX · RTX 4060 · 16GB · 1TB · 16" 240Hz QHD+',            img: pick(IMG.gaming_laptop,3) },

  // Productivity
  { id: 'lap9',  name: 'Apple MacBook Pro 16" M3 Max',  brand: 'Apple',    type: 'productivity', price: 3499, perf: 99, spec: 'M3 Max 16-core · 36GB · 1TB SSD · 16.2" Liquid Retina XDR',          img: pick(IMG.productivity_laptop,0) },
  { id: 'lap10', name: 'Apple MacBook Air 15" M3',      brand: 'Apple',    type: 'productivity', price: 1299, perf: 84, spec: 'M3 8-core · 16GB · 512GB SSD · 15.3" Liquid Retina · Fanless',       img: pick(IMG.productivity_laptop,0) },
  { id: 'lap11', name: 'Dell XPS 15 (9530)',            brand: 'Dell',     type: 'productivity', price: 2099, perf: 88, spec: 'i9-13900H · RTX 4070 · 32GB · 1TB · 15.6" 3.5K OLED Touch',           img: pick(IMG.productivity_laptop,1) },
  { id: 'lap12', name: 'Lenovo ThinkPad X1 Carbon G12', brand: 'Lenovo',   type: 'productivity', price: 1899, perf: 82, spec: 'Core Ultra 7 165U · 32GB · 1TB · 14" 2.8K OLED · 1.09kg',             img: pick(IMG.productivity_laptop,2) },
  { id: 'lap13', name: 'HP Spectre x360 14 (2024)',     brand: 'HP',       type: 'productivity', price: 1599, perf: 80, spec: 'Core Ultra 7 155H · 32GB · 1TB · 14" 2.8K OLED Convertible',         img: pick(IMG.productivity_laptop,3) },
  { id: 'lap14', name: 'Microsoft Surface Laptop 7',    brand: 'Microsoft',type: 'productivity', price: 1499, perf: 78, spec: 'Snapdragon X Elite · 16GB · 1TB · 15" PixelSense Touch · Copilot+', img: pick(IMG.productivity_laptop,0) },
  { id: 'lap15', name: 'ASUS ZenBook 14 OLED',          brand: 'ASUS',     type: 'productivity', price: 1099, perf: 74, spec: 'Core Ultra 7 155H · 16GB · 1TB · 14" 2.8K OLED · 1.2kg',             img: pick(IMG.productivity_laptop,1) },
  { id: 'lap16', name: 'Framework Laptop 13 (Intel)',   brand: 'Framework',type: 'productivity', price: 1399, perf: 72, spec: 'Core Ultra 7 155H · 32GB · 1TB · 13.5" 2.8K · Fully Modular',        img: pick(IMG.productivity_laptop,2) },
];

const PART_LABELS = {
  cpu: 'CPU', gpu: 'GPU', ram: 'RAM',
  motherboard: 'Motherboard', ssd: 'Storage', psu: 'Power Supply', case: 'Case'
};

// ---------- NAV ----------
function initTheme() {
  const saved = localStorage.getItem('pcforge_theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');
  const apply = () => {
    document.querySelectorAll('#themeToggle').forEach(btn => {
      btn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
  };
  apply();
  document.querySelectorAll('#themeToggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      localStorage.setItem('pcforge_theme', document.body.classList.contains('light') ? 'light' : 'dark');
      apply();
    });
  });
}

function initNav() {
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  if (burger && links) burger.addEventListener('click', () => links.classList.toggle('open'));
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  // Logged-in state
  const user = JSON.parse(localStorage.getItem('pcforge_user') || 'null');
  const loginLink = document.querySelector('.nav-login');
  if (user && loginLink) {
    loginLink.textContent = `👤 ${user.name.split(' ')[0]}`;
    loginLink.addEventListener('click', e => {
      e.preventDefault();
      if (confirm(`Sign out ${user.name}?`)) {
        localStorage.removeItem('pcforge_user');
        location.reload();
      }
    });
  }
}

// ---------- HOME ----------
function initHome() {
  const featured = document.getElementById('featuredBuilds');
  if (!featured) return;
  const builds = [
    { name: 'Starter Gamer',    tag: 'BUDGET',  price: 899,  desc: '1080p high-FPS esports build',           perf: 65 },
    { name: 'Mid-Range Beast',  tag: 'POPULAR', price: 1599, desc: '1440p ultra settings, ray tracing ready', perf: 82 },
    { name: 'Ultimate Rig',     tag: 'EXTREME', price: 3499, desc: '4K maxed-out, content creation monster',  perf: 98 },
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

// ---------- card renderer (shared) ----------
function productCard(c, label) {
  const spec = c.spec ||
    `${c.brand}${c.socket?` · ${c.socket}`:''}${c.watts?` · ${c.watts}W`:''}${c.type && (c.type==='DDR4'||c.type==='DDR5')?` · ${c.type}`:''}`;
  return `
    <div class="card comp-card fade-in">
      <div class="img-wrap">
        <span class="tag">${label}</span>
        <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.style.opacity=.2" />
        <span class="badge-price">$${c.price.toLocaleString()}</span>
      </div>
      <div class="body">
        <h3>${c.name}</h3>
        <div class="spec">${spec}</div>
        <div class="perf">
          <span>Performance</span>
          <div class="bar"><span style="width:${c.perf}%"></span></div>
          <span>${c.perf}</span>
        </div>
      </div>
    </div>
  `;
}

// ---------- COMPONENTS PAGE ----------
function initComponents() {
  const grid = document.getElementById('compGrid');
  if (!grid) return;
  const search = document.getElementById('compSearch');
  const filter = document.getElementById('compFilter');
  const sort = document.getElementById('compSort');

  const all = [];
  Object.entries(COMPONENTS).forEach(([type, arr]) => arr.forEach(c => all.push({...c, _type: type})));

  function render() {
    const q = search.value.toLowerCase().trim();
    const f = filter.value;
    const s = sort.value;
    let items = all.filter(c =>
      (!f || c._type === f) &&
      (!q || c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q))
    );
    if (s === 'price-asc')  items.sort((a,b)=>a.price-b.price);
    if (s === 'price-desc') items.sort((a,b)=>b.price-a.price);
    if (s === 'perf-desc')  items.sort((a,b)=>b.perf-a.perf);
    grid.innerHTML = items.length
      ? items.map(c => productCard(c, PART_LABELS[c._type])).join('')
      : '<p class="meta">No components match your filters.</p>';
  }
  [search, filter, sort].forEach(el => el.addEventListener('input', render));
  render();
}

// ---------- LAPTOPS PAGE ----------
function initLaptops() {
  const grid = document.getElementById('lapGrid');
  if (!grid) return;
  const search = document.getElementById('lapSearch');
  const filter = document.getElementById('lapFilter');
  const sort = document.getElementById('lapSort');

  function render() {
    const q = search.value.toLowerCase().trim();
    const f = filter.value;
    const s = sort.value;
    let items = LAPTOPS.filter(c =>
      (!f || c.type === f) &&
      (!q || c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q))
    );
    if (s === 'price-asc')  items.sort((a,b)=>a.price-b.price);
    if (s === 'price-desc') items.sort((a,b)=>b.price-a.price);
    if (s === 'perf-desc')  items.sort((a,b)=>b.perf-a.perf);
    grid.innerHTML = items.length
      ? items.map(c => productCard(c, c.type === 'gaming' ? 'GAMING' : 'PRODUCTIVITY')).join('')
      : '<p class="meta">No laptops match your filters.</p>';
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

// ---------- LOGIN / REGISTER ----------
function initAuth() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  if (!loginForm) return;

  const alertBox = document.getElementById('authAlert');
  const tabs = document.querySelectorAll('.auth-tab');

  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    const which = t.dataset.tab;
    loginForm.style.display    = which === 'login' ? 'block' : 'none';
    registerForm.style.display = which === 'register' ? 'block' : 'none';
    alertBox.innerHTML = '';
  }));

  const setErr = (form, f, m) => { const el = form.querySelector(`[data-err="${f}"]`); if (el) el.textContent = m || ''; };
  const clearErrs = form => form.querySelectorAll('.err').forEach(e => e.textContent = '');

  function loginUser(user) {
    localStorage.setItem('pcforge_user', JSON.stringify({ name: user.name, email: user.email }));
    alertBox.innerHTML = `<div class="alert ok">✓ Welcome back, ${user.name.split(' ')[0]}! Redirecting…</div>`;
    setTimeout(() => location.href = 'builder.html', 900);
  }

  // REGISTER
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    clearErrs(registerForm);
    alertBox.innerHTML = '';
    const name    = registerForm.name.value.trim();
    const email   = registerForm.email.value.trim().toLowerCase();
    const password= registerForm.password.value;
    const confirm = registerForm.confirm.value;
    let ok = true;
    if (name.length < 2) { setErr(registerForm,'name','Name must be at least 2 characters.'); ok=false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr(registerForm,'email','Enter a valid email.'); ok=false; }
    if (password.length < 6) { setErr(registerForm,'password','Min 6 characters.'); ok=false; }
    if (password !== confirm) { setErr(registerForm,'confirm','Passwords do not match.'); ok=false; }
    if (!ok) return;

    const users = JSON.parse(localStorage.getItem('pcforge_users') || '[]');
    if (users.find(u => u.email === email)) {
      alertBox.innerHTML = '<div class="alert bad">An account with this email already exists. Please sign in.</div>';
      return;
    }
    const user = { name, email, password };
    users.push(user);
    localStorage.setItem('pcforge_users', JSON.stringify(users));
    loginUser(user);
  });

  // LOGIN
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    clearErrs(loginForm);
    alertBox.innerHTML = '';
    const email = loginForm.email.value.trim().toLowerCase();
    const password = loginForm.password.value;
    let ok = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr(loginForm,'email','Enter a valid email.'); ok=false; }
    if (password.length < 6) { setErr(loginForm,'password','Min 6 characters.'); ok=false; }
    if (!ok) return;

    const users = JSON.parse(localStorage.getItem('pcforge_users') || '[]');
    // Demo account always works
    if (email === 'demo@pcforge.com' && password === 'demo123') {
      return loginUser({ name: 'Demo Builder', email });
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      alertBox.innerHTML = '<div class="alert bad">Invalid email or password. Try demo@pcforge.com / demo123</div>';
      return;
    }
    loginUser(user);
  });
}

// ---------- BOOT ----------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initHome();
  initBuilder();
  initComponents();
  initLaptops();
  initCompare();
  initContact();
  initAuth();
});
