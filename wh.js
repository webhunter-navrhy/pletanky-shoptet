/* Pletánky.cz – nový vzhled (návrh v9, téma d) nad šablonou Shoptet Classic.
   Běží jen s třídou html.wh (náhled ?nahled=novy). Data bere z DOM Shoptetu,
   pevný obsah (texty banneru, fotky, dlaždice) je v CONFIG. */
(function () {
  'use strict';
  var H = document.documentElement;
  if (!/(^|\s)wh(\s|$)/.test(H.className)) return;

  var IMG = 'https://webhunter-navrhy.github.io/pletanky-shoptet/img/';
  var CONFIG = {
    topbar: { left: 'Doprava zdarma od 2 000 Kč', mid: 'Příze DROPS v akci až −30 %', midHref: '/akcni-zbozi/' },
    nav: [
      { t: 'Příze na pletení', h: '/prize/' },
      { t: 'Háčkovací příze', h: '/hackovaci-prize/' },
      { t: 'Špagáty a macramé', h: '/ceske-hobby-spagaty/' },
      { t: 'Pomůcky', h: '/pomucky/' },
      { t: 'Korálky', h: '/koralky-/' },
      { t: 'Kameny a minerály', h: '/kameny-polodrahokamy-mineraly-/' },
      { t: 'Bižuterní komponenty', h: '/bizuterni-komponenty/' },
      { t: 'Značky', h: '/znacka/', brands: true },
      { t: 'Akce', h: '/akcni-zbozi/', akce: true }
    ],
    menuExtra: [
      { t: 'Novinky', h: '/novinky-2/' }, { t: 'Slevy a výprodej', h: '/vyprodej/' },
      { t: 'Návlekový materiál', h: '/navlekovy-material/' }, { t: 'Dárkové poukazy', h: '/darkove-poukazy/' }
    ],
    banner: {
      h1: 'Vše pro radost z tvoření',
      p: 'Příze DROPS, Alize a YarnArt, šňůry na macramé, korálky a kameny. Vyberte si barvu, která Vám udělá radost.',
      img: IMG + 'hero.jpg', imgM: IMG + 'hero-m.jpg', alt: 'Pletený svetr a šálek kávy',
      motm: { small: 'Odstín měsíce', b: 'DROPS Brushed Alpaca Silk 44 – švestka', h: '/drops-brushed-alpaca-silk/prize-drops-brushed-alpaca-silk-44-svestka/', img: IMG + 'svestka-velka.jpg' },
      cta: [{ t: 'Vybrat přízi', h: '/prize/' }, { t: 'Akce DROPS až −30 %', h: '/akcni-zbozi/', line: true }]
    },
    usp: [
      ['yarn', 'Široký výběr produktů'], ['gift', 'Balíme s láskou'], ['check', 'Tvoříme vědomě'], ['star', 'Prodáváme, co sami používáme']
    ],
    tiles: [
      { t: 'Příze na pletení', s: 'Alpaka, merino, moher i bavlna od DROPS, Alize a YarnArt', h: '/prize/', img: 'moher.jpg', c: 't--big' },
      { t: 'Háčkovací příze', s: 'Kordonety, Moonlight, Sněhurka a další', h: '/hackovaci-prize/', img: 'kordonet.jpg' },
      { t: 'Špagáty a macramé', s: 'Šňůry, cordy a Twisted macrame', h: '/ceske-hobby-spagaty/', img: 'macrame-snura.jpg' },
      { t: 'Pomůcky', s: 'Jehlice, háčky a značky na očka', h: '/pomucky/', img: 'jehlice.jpg', c: 't--tall' },
      { t: 'Korálky', s: 'Ohňovky, mačkané i dřevěné', h: '/koralky-/', img: 'koralky.jpg' },
      { t: 'Kameny a minerály', s: 'Kuličky, zlomky i hotové šperky', h: '/kameny-polodrahokamy-mineraly-/', img: 'kameny.jpg' },
      { t: 'Bižuterní komponenty', s: 'Kaplíky, kaloty, zapínání', h: '/bizuterni-komponenty/', img: 'komponenty.jpg' },
      { t: 'Dárkové poukazy', s: 'Pro všechny, kdo rádi tvoří', h: '/darkove-poukazy/', img: 'klubko.jpg' }
    ],
    projs: [
      { t: 'Svetry a kardigany', h: '/prize-s-obsahem-vlny/', img: 'proj-svetry.jpg' },
      { t: 'Čepice a šály', h: '/moherove/', img: 'proj-cepice.jpg' },
      { t: 'Ponožky', h: '/ponozkove-2/', img: 'proj-ponozky.jpg' },
      { t: 'Deky a pledy', h: '/zinylkove-prize/', img: 'proj-deky.jpg' },
      { t: 'Hračky a amigurumi', h: '/hackovaci-prize/', img: 'proj-amigurumi.jpg' },
      { t: 'Macramé do bytu', h: '/ceske-hobby-spagaty/', img: 'proj-macrame.jpg' },
      { t: 'Šperky a bižuterie', h: '/koralky-/', img: 'proj-sperky.jpg' }
    ],
    theme: { small: 'Téma měsíce', b: 'Krása podzimu', btn: 'Zobrazit nabídku', h: '/prize-s-obsahem-vlny/', img: IMG + 'tema-podzim.jpg', alt: 'Podzimní tvoření z příze' },
    blogMin: 3,
    email: 'info@pletanky.cz',
    address: 'Pletánky.cz<br>Provozovna a sklad: Přáslavice 197, 783 54',
    instagram: 'https://www.instagram.com/pletanky/',
    facebook: 'https://www.facebook.com/Pletanky',
    footerCols: [
      { h: 'O nás', l: [['Kontakty', '/kontakty/'], ['Novinky z Pletánek', '/novinky/'], ['Hodnocení obchodu', '/hodnoceni-obchodu/']] },
      { h: 'Nakupování', l: [['Doprava a platby', '/doprava/'], ['Obchodní podmínky', '/obchodni-podminky/'], ['Ochrana osobních údajů', '/podminky-ochrany-osobnich-udaju/'], ['Dárkové poukazy', '/darkove-poukazy/']] }
    ],
    /* detail produktu pod tlačítkem (jako v návrhu); [ikona, text] */
    usps: [['truck', 'Doprava zdarma od 2&nbsp;000&nbsp;Kč'], ['mail', 'Nevíte si rady s množstvím? <a href="mailto:info@pletanky.cz">Napište nám</a>']],
    swatchMax: 11
  };

  /* ---------- pomocníci ---------- */
  var D = document, B = D.body;
  function $(s, r) { return (r || D).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); }
  function W(html) {
    return html.replace(/class="([^"]*)"/g, function (m, c) {
      return 'class="' + c.split(/\s+/).filter(Boolean).map(function (t) { return (t.indexOf('w-') === 0 || t === 'whx') ? t : 'w-' + t; }).join(' ') + '"';
    });
  }
  function box(html, tag) { var d = D.createElement(tag || 'div'); d.className = 'whx'; d.innerHTML = W(html); return d; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function txt(e) { return e ? e.textContent.replace(/\s+/g, ' ').trim() : ''; }
  function after(ref, n) { ref.parentNode.insertBefore(n, ref.nextSibling); }
  function before(ref, n) { ref.parentNode.insertBefore(n, ref); }
  function on(e, ev, f) { if (e) e.addEventListener(ev, f); }
  function cls(e, c, v) { if (e) e.classList.toggle(c, v); }
  function isType(t) { return B.classList.contains('type-' + t); }
  function imgOf(img) {
    if (!img) return '';
    var s = img.getAttribute('data-src') || img.getAttribute('src') || '';
    return /^data:/.test(s) ? '' : s;
  }
  function store(kind) { try { return kind === 'l' ? localStorage : sessionStorage; } catch (e) { return null; } }
  function cacheGet(k, ttl, kind) {
    var s = store(kind); if (!s) return null;
    try { var v = JSON.parse(s.getItem(k)); if (v && Date.now() - v.t < ttl) return v.d; } catch (e) {}
    return null;
  }
  function cacheSet(k, d, kind) { var s = store(kind); if (!s) return; try { s.setItem(k, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {} }
  var pending = {};
  function getDoc(url) {
    if (!pending[url]) {
      pending[url] = fetch(url, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw r.status; return r.text(); })
        .then(function (h) { return new DOMParser().parseFromString(h, 'text/html'); });
    }
    return pending[url];
  }
  var svg = function (c, d) { return '<svg class="ico ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; };
  var P = {
    truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>',
    burger: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.3 7.5-5.3s6.3 1.7 7.5 5.3"/>',
    bag: '<path d="M5.5 8.5h13l-1 11.5h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',
    down: '<path d="m6 9 6 6 6-6"/>', right: '<path d="m9 6 6 6-6 6"/>', close: '<path d="m6 6 12 12M18 6 6 18"/>',
    yarn: '<circle cx="12" cy="12" r="7.5"/><path d="M6 8.5c4 .5 8.5 3.5 10.5 9M5 12.5c3.5 0 7.5 2.5 9 6.5M8.5 5.2c3.3 1.4 7.5 5 9 9.5M12 4.5c2.5 2 4.5 4.5 5.8 7"/>',
    gift: '<rect x="4" y="9" width="16" height="11"/><path d="M4 13h16M12 9v11M12 9c-1.5-3-5-3.5-5-1.2C7 9 9.5 9 12 9zm0 0c1.5-3 5-3.5 5-1.2C17 9 14.5 9 12 9z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    star: '<path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    mail: '<rect x="3.5" y="6" width="17" height="12"/><path d="m4 7 8 6 8-6"/>',
    ig: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".6"/>',
    fb: '<path d="M14 8h2.5V4.5H14c-2.2 0-3.5 1.5-3.5 3.8V10H8v3.5h2.5V20H14v-6.5h2.5L17 10h-3V8.6c0-.4.2-.6.5-.6z"/>'
  };
  function stars(n, lg) {
    var s = ''; for (var i = 0; i < 5; i++) s += svg('ico--star' + (i < Math.round(n) ? '' : ' ico--off'), P.star);
    return '<span class="stars' + (lg ? ' stars--lg' : '') + '" aria-label="' + n + ' z 5 hvězdiček">' + s + '</span>';
  }
  var logoImg = $('#header .site-name img') || $('.site-name img');
  var logoSrc = logoImg ? logoImg.getAttribute('src') : '';
  function logoHtml(tag) { return '<' + (tag || 'a') + ' class="logo" href="/"><img src="' + esc(logoSrc) + '" alt="Pletánky.cz"></' + (tag || 'a') + '>'; }

  /* ---------- popisky produktů: složení / návin / jehlice ---------- */
  var KEYS = /(Složení|Hmotnost klubíčka|Hmotnost|Váha\s*\/\s*návin|Váha|Návin|Délka|Doporučená síla jehlic|Síla jehlic|Doporučená velikost háčku|Doporučená síla háčku|Velikost háčku|Skupina přízí|Zkušební vzorek|Instagram)\s*:\s*/gi;
  function norm(k) {
    k = k.toLowerCase().replace(/\s+/g, ' ');
    if (k.indexOf('složení') === 0) return 's';
    if (/váha ?\/ ?návin/.test(k)) return 'wn';
    if (k.indexOf('hmotnost') === 0 || k === 'váha') return 'w';
    if (k === 'návin' || k === 'délka') return 'n';
    if (k.indexOf('jehlic') > -1) return 'j';
    if (k.indexOf('háčk') > -1) return 'h';
    if (k.indexOf('skupina') === 0) return 'g';
    if (k.indexOf('zkušební') === 0) return 'v';
    return 'x';
  }
  function parseDesc(t) {
    t = String(t || '').replace(/ /g, ' ');
    var trunc = /(\.\.\.|…)\s*$/.test(t);
    t = t.replace(/(\.\.\.|…)\s*$/, '');
    var m, hits = [], out = { lead: '', v: {}, trunc: trunc };
    KEYS.lastIndex = 0;
    while ((m = KEYS.exec(t))) hits.push({ k: norm(m[1]), s: m.index, e: m.index + m[0].length });
    out.lead = (hits.length ? t.slice(0, hits[0].s) : t).replace(/\s+/g, ' ').trim().replace(/[.;:,]+$/, '');
    hits.forEach(function (h, i) {
      var v = t.slice(h.e, i + 1 < hits.length ? hits[i + 1].s : t.length);
      v = v.split(/\n|;/)[0].replace(/\s+/g, ' ').trim().replace(/[.;,]+$/, '');
      if (h.k === 'x' || !v) return;
      if (trunc && i === hits.length - 1) return; /* poslední hodnota může být useknutá */
      if (!out.v[h.k]) out.v[h.k] = v;
    });
    if (out.lead.length > 140) out.lead = out.lead.slice(0, 137).replace(/\s\S*$/, '') + '…';
    return out;
  }
  function pct(s) { return s.replace(/(\d)\s*%/g, '$1 %').replace(/\s*,\s*(?=\d)/g, ', ').replace(/,(?=\S)/g, ', '); }
  function specRows(v) {
    var r = [];
    if (v.s) r.push(['Složení', pct(v.s)]);
    if (v.wn) r.push(['Váha / návin', v.wn.replace(/\s*gramů/, ' g')]);
    else if (v.w && v.n) r.push(['Váha / návin', v.w + ' = ' + v.n]);
    else if (v.w) r.push(['Váha', v.w]); else if (v.n) r.push(['Návin', v.n]);
    if (v.j) r.push(['Jehlice', v.j]); else if (v.h) r.push(['Háček', v.h]);
    return r;
  }
  function specsHtml(rows, c) {
    return rows.length ? '<dl class="' + c + '">' + rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('') + '</dl>' : '';
  }
  function fullDesc(href) {
    var k = 'whd:' + href, c = cacheGet(k, 864e5, 's');
    if (c != null) return Promise.resolve(c);
    return getDoc(href).then(function (doc) {
      var e = doc.querySelector('.p-short-description');
      var t = '';
      if (e) { var cl = e.cloneNode(true); $$('br', cl).forEach(function (b) { b.replaceWith('\n'); }); $$('p', cl).forEach(function (p) { p.append('\n'); }); t = cl.textContent; }
      cacheSet(k, t, 's'); return t;
    });
  }

  /* ---------- produktová karta ---------- */
  var FLAGMAP = { 'flag-action': 'Akce', 'flag-new': 'Novinka', 'flag-tip': 'Tip', 'flag-vyprodej': 'Výprodej' };
  var queue = [], running = 0;
  function pump() {
    while (running < 2 && queue.length) {
      var job = queue.shift(); running++;
      job().catch(function () {}).then(function () { running--; pump(); });
    }
  }
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); var f = e.target.__whLoad; if (f) { queue.push(f); pump(); } } });
  }, { rootMargin: '200px' }) : null;
  var canHover = window.matchMedia && matchMedia('(hover:hover)').matches;

  function card(prod) {
    if (prod.__wh || prod.querySelector('.w-pc')) return;
    var p = prod.querySelector('.p'); if (!p) return;
    prod.__wh = 1;
    var a = p.querySelector('a.image') || p.querySelector('a[href]');
    var nameA = p.querySelector('a.name') || a;
    var href = nameA ? nameA.getAttribute('href') : '#';
    var name = txt(p.querySelector('a.name span') || nameA);
    var src = imgOf(p.querySelector('a.image img') || p.querySelector('img'));
    var fin = txt(p.querySelector('.price-final strong') || p.querySelector('.price-final'));
    var std = txt(p.querySelector('.price-standard span') || p.querySelector('.price-standard'));
    var flags = '';
    $$('.flags-default .flag, .flags .flag', p).forEach(function (f) {
      for (var k in FLAGMAP) if (f.classList.contains(k)) { if (flags.indexOf('>' + FLAGMAP[k] + '<') < 0) flags += '<span class="flag">' + FLAGMAP[k] + '</span>'; return; }
    });
    var save = txt(p.querySelector('.flag-discount .price-save'));
    if (save) flags += '<span class="flag flag--sleva">' + esc(save.replace(/^-/, '–')) + '</span>';
    var avEl = p.querySelector('.availability');
    var avT = avEl ? txt(avEl.querySelector('span:not(.availability-amount)') || avEl) : '';
    var avA = avEl ? txt(avEl.querySelector('.availability-amount')) : '';
    if (avA && avT.indexOf(avA) > -1) avT = avT.replace(avA, '').trim();
    var avOk = /skladem/i.test(avT);
    var dEl = p.querySelector('.p-desc');
    var d = parseDesc(dEl ? dEl.innerText || dEl.textContent : '');
    var rows = specRows(d.v);
    var html = '<article class="pc"><div class="pc__box">' +
      '<a class="pc__img" href="' + esc(href) + '"><span class="pc__flags">' + flags + '</span>' +
      (src ? '<img src="' + esc(src) + '" alt="' + esc(name) + '" loading="lazy" width="360" height="360">' : '') + '</a>' +
      '<a class="pc__name" href="' + esc(href) + '">' + esc(name) + '</a>' +
      '<p class="pc__price">' + (std ? '<s>' + esc(std) + '</s>' : '') + '<b>' + esc(fin) + '</b></p>' +
      '<div class="pc__more">' + (d.lead ? '<p class="pc__lead">' + esc(d.lead) + '</p>' : '') + specsHtml(rows, 'pc__specs') +
      (avT ? '<p class="pc__av' + (avOk ? '' : ' pc__av--no') + '">' + (avOk ? svg('ico--xs', P.check) + ' ' : '') + esc(avT) + (avA ? ' ' + esc(avA) : '') + '</p>' : '') +
      '</div></div></article>';
    var w = box(html);
    var more = w.querySelector('.w-pc__more');
    var form = p.querySelector('form.pr-action');
    if (form) {
      more.appendChild(form);
      var btn = form.querySelector('button[type=submit], .btn');
      if (btn) { btn.classList.add('w-btn', 'w-btn--cart', 'w-btn--full'); btn.innerHTML = W(svg('ico--sm', P.bag)) + '<span>Do košíku</span>'; }
    } else {
      var det = D.createElement('a'); det.className = 'w-btn w-btn--line w-btn--full'; det.href = href; det.textContent = avOk ? 'Vybrat variantu' : 'Detail produktu';
      more.appendChild(det);
    }
    prod.appendChild(w);
    if (canHover && href && href !== '#' && (d.trunc || !rows.length || !d.lead)) {
      var load = function () {
        return fullDesc(href).then(function (t) {
          if (!t) return;
          var f = parseDesc(t), r = specRows(f.v);
          var lead = more.querySelector('.w-pc__lead');
          if (f.lead && !lead) { lead = D.createElement('p'); lead.className = 'w-pc__lead'; more.insertBefore(lead, more.firstChild); }
          if (f.lead) lead.textContent = f.lead;
          if (r.length >= rows.length) {
            var old = more.querySelector('.w-pc__specs'); var nw = box(specsHtml(r, 'pc__specs')).firstChild;
            if (nw) { if (old) old.replaceWith(nw); else (lead ? after(lead, nw) : more.insertBefore(nw, more.firstChild)); }
          }
        });
      };
      if (io) { prod.__whLoad = load; io.observe(prod); }
      on(prod, 'mouseenter', function () { if (prod.__whLoad) { io && io.unobserve(prod); var f = prod.__whLoad; prod.__whLoad = null; queue.unshift(f); pump(); } });
    }
  }
  function cards(root) { $$('.product', root || D).forEach(card); }
  function gridFrom(url, n, key) {
    var k = 'whg:' + url, c = cacheGet(k, 6e5, 's');
    var make = function (html) {
      var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = html; cards(g); return g;
    };
    if (c) return Promise.resolve(make(c));
    return getDoc(url).then(function (doc) {
      var ps = $$('#products .product', doc).slice(0, n);
      var html = ps.map(function (x) { return x.outerHTML; }).join('');
      cacheSet(k, html, 's'); return make(html);
    });
  }

  /* ---------- hlavička ---------- */
  function cartState() {
    var a = $('#header a.cart-count') || $('a.cart-count');
    var price = a ? txt(a.querySelector('.cart-price')) : '';
    var n = 0;
    if (a) $$('*', a).forEach(function (e) { if (!e.children.length && /^\s*\d+\s*$/.test(e.textContent)) n = parseInt(e.textContent, 10); });
    if (!n && a) { var m = (a.getAttribute('data-count') || '').match(/\d+/); if (m) n = +m[0]; }
    var empty = !price || /prázdn/i.test(price);
    return { n: n, price: empty ? 'Košík' : price, empty: empty };
  }
  function buildHeader() {
    var navHtml = CONFIG.nav.map(function (n, i) {
      if (n.akce) return '<li class="nav__li"><a class="nav__a nav__a--akce" href="' + n.h + '">' + n.t + '</a></li>';
      return '<li class="nav__li has-mega" data-i="' + i + '"><a class="nav__a" href="' + n.h + '">' + n.t + svg('ico--xs', P.down) + '</a>' +
        '<div class="mega" role="region" aria-label="' + esc(n.t) + '"><div class="mega__in wrap"><div class="mega__main"><p class="mega__h">' + esc(n.t) + '</p><div class="mega__tiles"></div></div><div class="mega__col"></div></div></div></li>';
    }).join('');
    var cur = $$('a[href*="currencyCode="]').map(function (a) { return a; });
    var curHtml = '';
    if (cur.length) {
      var active = (window.shoptet && shoptet.config && shoptet.config.currencyCode) || 'CZK';
      var seen = {};
      curHtml = cur.filter(function (a) { var c = (a.href.match(/currencyCode=(\w+)/) || [])[1]; if (!c || seen[c]) return false; seen[c] = 1; return true; })
        .map(function (a) { var c = a.href.match(/currencyCode=(\w+)/)[1]; return c === active ? '<b>' + c + '</b>' : '<a href="' + esc(a.getAttribute('href')) + '">' + c + '</a>'; }).join(' / ');
    }
    var h = box(
      '<a class="skip" href="#content">Přejít na obsah</a>' +
      '<div class="topbar"><div class="wrap topbar__in"><span>' + svg('ico--sm', P.truck) + ' ' + CONFIG.topbar.left + '</span>' +
      '<a class="topbar__mid" href="' + CONFIG.topbar.midHref + '">' + CONFIG.topbar.mid + '</a>' +
      '<span class="topbar__links"><a href="/doprava/">Doprava a platby</a><a href="/kontakty/">Kontakt</a>' + (curHtml ? '<span class="topbar__cur">' + curHtml + '</span>' : '') + '</span></div></div>' +
      '<header class="hdr" id="whHdr"><div class="wrap hdr__in">' +
      '<button class="hdr__burger" type="button" aria-label="Menu" data-wm-open>' + svg('', P.burger) + '</button>' + logoHtml() +
      '<div class="search-slot"></div>' +
      '<nav class="hdr__acts"><a class="hdr__act" href="/login/" data-wh-login>' + svg('', P.user) + '<span>Přihlášení</span></a>' +
      '<a class="hdr__act cartbtn" href="/kosik/"><span class="cartbtn__ico">' + svg('', P.bag) + '<b class="cartbtn__count">0</b></span><span class="cartbtn__t">Košík</span></a></nav></div>' +
      '<nav class="nav" aria-label="Kategorie"><ul class="wrap nav__ul">' + navHtml + '</ul></nav></header>' +
      '<div class="drawer drawer--menu" aria-hidden="true"><div class="drawer__panel"><div class="drawer__head">' + logoHtml() +
      '<button type="button" data-wm-close aria-label="Zavřít">' + svg('', P.close) + '</button></div><nav class="mmenu">' +
      CONFIG.nav.concat(CONFIG.menuExtra).map(function (n) { return '<a' + (n.akce ? ' class="mmenu__akce"' : '') + ' href="' + n.h + '">' + n.t + svg('ico--sm', P.right) + '</a>'; }).join('') +
      '</nav><div class="mmenu__foot"><a href="/login/">' + svg('ico--sm', P.user) + ' Přihlášení</a><a href="mailto:' + CONFIG.email + '">' + svg('ico--sm', P.mail) + ' ' + CONFIG.email + '</a></div></div></div>');
    h.id = 'whTop';
    var ow = $('.overall-wrapper') || B.firstElementChild;
    B.insertBefore(h, ow);
    /* přihlášený zákazník */
    var acc = $('#header a[href*="/klient/"]') || $('.top-navigation-bar a[href*="/klient/"]');
    if (acc) { $$('[data-wh-login], .w-mmenu__foot a:first-child', h).forEach(function (a) { a.href = acc.getAttribute('href'); var s = a.querySelector('span'); if (s) s.textContent = 'Můj účet'; else a.lastChild.textContent = ' Můj účet'; }); }
    /* nativní vyhledávání */
    var sf = $('#formSearchForm');
    var slot = h.querySelector('.w-search-slot');
    if (sf) {
      sf.classList.add('w-search');
      sf.insertAdjacentHTML('afterbegin', W(svg('ico--sm', P.search)));
      var inp = sf.querySelector('input[name=string]'); if (inp) inp.placeholder = 'Hledat přízi, odstín, značku…';
      slot.replaceWith(sf);
    } else slot.remove();
    /* košík */
    var cb = h.querySelector('.w-cartbtn');
    var syncCart = function () {
      var s = cartState();
      var c = cb.querySelector('.w-cartbtn__count'); c.textContent = s.n || ''; cls(c, 'w-is-empty', !s.n);
      cb.querySelector('.w-cartbtn__t').textContent = s.price;
      cls(cb, 'w-is-full', !s.empty);
    };
    syncCart();
    var hd = $('#header');
    if (hd && window.MutationObserver) new MutationObserver(syncCart).observe(hd, { subtree: true, childList: true, characterData: true });
    D.addEventListener('ShoptetCartUpdated', function () { setTimeout(syncCart, 50); });
    /* mega menu (líně z podkategorií) */
    $$('.w-has-mega', h).forEach(function (li) {
      var n = CONFIG.nav[+li.getAttribute('data-i')];
      var done = false;
      var fill = function () { if (done) return; done = true; megaData(n).then(function (items) { renderMega(li, n, items); }).catch(function () { done = false; }); };
      on(li, 'mouseenter', fill); on(li, 'focusin', fill);
    });
    /* šuplík menu */
    var dr = h.querySelector('.w-drawer--menu');
    var setDr = function (v) { cls(dr, 'w-is-open', v); dr.setAttribute('aria-hidden', v ? 'false' : 'true'); B.style.overflow = v ? 'hidden' : ''; };
    on(h.querySelector('[data-wm-open]'), 'click', function () { setDr(true); });
    on(dr, 'click', function (e) { if (e.target === dr || e.target.closest('[data-wm-close]')) setDr(false); });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDr(false); });
    /* lepicí hlavička */
    var hdr = h.querySelector('.w-hdr');
    var sen = D.createElement('div'); sen.style.cssText = 'position:absolute;top:140px;height:1px;width:1px;pointer-events:none';
    B.insertBefore(sen, B.firstChild);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { cls(hdr, 'w-is-stuck', !es[0].isIntersecting); }).observe(sen);
  }
  function megaData(n) {
    var k = 'whm2:' + n.h, c = cacheGet(k, 864e5, 'l');
    if (c) return Promise.resolve(c);
    if (n.brands) {
      var li = $('#navigation .nav-manufacturers') || $('.nav-manufacturers');
      var items = li ? $$('ul a', li).map(function (a) { return { t: txt(a), h: a.getAttribute('href'), i: '' }; }) : [];
      return Promise.resolve(items);
    }
    return subcats(n.h).then(function (items) { cacheSet(k, items, 'l'); return items; });
  }
  function subcats(url) {
    var k = 'whs:' + url, c = cacheGet(k, 864e5, 'l');
    if (c) return Promise.resolve(c);
    return getDoc(url).then(function (doc) {
      var items = $$('ul.subcategories li a', doc).map(function (a) {
        return { t: txt(a.querySelector('.text') || a), h: a.getAttribute('href'), i: imgOf(a.querySelector('img')).replace(/.*folder\.svg$/, '') };
      });
      cacheSet(k, items, 'l'); return items;
    });
  }
  function renderMega(li, n, items) {
    var tiles = items.filter(function (x) { return x.i; }).slice(0, 10);
    var rest = items.filter(function (x) { return tiles.indexOf(x) < 0; });
    var tEl = li.querySelector('.w-mega__tiles'), cEl = li.querySelector('.w-mega__col');
    if (tiles.length) {
      tEl.innerHTML = W(tiles.map(function (x) { return '<a class="mega__t" href="' + esc(x.h) + '"><span class="mega__ti"><img src="' + esc(x.i) + '" alt="" loading="lazy"></span><span class="mega__l">' + esc(x.t) + '</span></a>'; }).join(''));
    } else {
      tEl.className = 'w-mega__links';
      tEl.innerHTML = rest.splice(0).map(function (x) { return '<a href="' + esc(x.h) + '">' + esc(x.t) + '</a>'; }).join('');
    }
    cEl.innerHTML = W((rest.length ? '<p class="mega__h">Další</p>' : '<p class="mega__h">&nbsp;</p>') + rest.slice(0, 14).map(function (x) { return '<a href="' + esc(x.h) + '">' + esc(x.t) + '</a>'; }).join('') +
      '<a class="mega__all" href="' + n.h + '">Zobrazit vše' + svg('ico--xs', P.right) + '</a>');
  }

  /* ---------- úvodní stránka ---------- */
  function sec(h2, inner, more, extra) {
    return '<section class="sec' + (extra || '') + '"><div class="wrap"><div class="sh"><h2 class="h2">' + h2 + '</h2></div>' + inner +
      (more ? '<p class="sec__more"><a class="btn btn--line" href="' + more[1] + '">' + more[0] + '</a></p>' : '') + '</div></section>';
  }
  function buildHome() {
    var cw = $('#content-wrapper'); if (!cw) return;
    var b = CONFIG.banner;
    var html =
      '<section class="banner"><picture><source media="(max-width:760px)" srcset="' + b.imgM + '"><img class="banner__img" src="' + b.img + '" alt="' + esc(b.alt) + '" fetchpriority="high"></picture>' +
      '<div class="wrap banner__in"><div class="banner__box"><h1 class="h1">' + b.h1 + '</h1><p>' + b.p + '</p>' +
      '<a class="motm-mini" href="' + b.motm.h + '"><img src="' + b.motm.img + '" alt=""><span><small>' + b.motm.small + '</small><b>' + b.motm.b + '</b></span></a>' +
      '<div class="banner__cta">' + b.cta.map(function (c) { return '<a class="btn ' + (c.line ? 'btn--line' : 'btn--cart') + '" href="' + c.h + '">' + c.t + '</a>'; }).join('') + '</div></div></div></section>' +
      '<div class="usp"><div class="wrap usp__in">' + CONFIG.usp.map(function (u) { return '<span>' + svg('ico--sm', P[u[0]]) + ' ' + u[1] + '</span>'; }).join('') + '</div></div>' +
      sec('Oblíbené kategorie', '<div class="tiles tiles--orig">' + CONFIG.tiles.map(function (t) {
        return '<a class="tile' + (t.c ? ' ' + t.c : '') + '" href="' + t.h + '"><img src="' + IMG + t.img + '" alt="" loading="lazy"><span class="tile__box"><b>' + t.t + '</b><span class="tile__more"><span>' + t.s + '</span></span></span></a>';
      }).join('') + '</div>') +
      sec('Akce', '<div class="whx-slot" data-slot="akce"></div>', ['Celá akce', '/akcni-zbozi/']) +
      sec('Vyberte podle projektu', '<div class="projs">' + CONFIG.projs.map(function (p) {
        return '<a class="proj" href="' + p.h + '"><span class="proj__img"><img src="' + IMG + p.img + '" alt="" loading="lazy"></span><span class="proj__n">' + p.t + '</span></a>';
      }).join('') + '</div>') +
      '<section class="sec"><div class="wrap"><a class="themeband" href="' + CONFIG.theme.h + '"><img src="' + CONFIG.theme.img + '" alt="' + esc(CONFIG.theme.alt) + '" loading="lazy"><span class="themeband__in"><small>' + CONFIG.theme.small + '</small><b>' + CONFIG.theme.b + '</b><span class="btn btn--cart">' + CONFIG.theme.btn + '</span></span></a></div></section>' +
      sec('Novinky', '<div class="whx-slot" data-slot="nov"></div>', ['Všechny novinky', '/novinky-2/']) +
      '<div class="whx-slot" data-slot="blog"></div><div class="whx-slot" data-slot="rvs"></div><div class="whx-slot" data-slot="ig"></div>' +
      '<section class="news"><div class="wrap news__in"><h2 class="h2">Newsletter</h2><p>Nové odstíny, akce na příze a tipy na projekty. Jednou za čas, nikdy otravně.</p><div class="news__slot"></div></div></section>';
    var w = box(html, 'main'); w.id = 'whHome';
    after(cw, w);
    var slot = function (n) { return w.querySelector('[data-slot="' + n + '"]'); };
    /* newsletter – nativní formulář i s captchou */
    var nf = $('#formNewsletterWidget');
    if (nf) { nf.classList.add('w-news__native'); w.querySelector('.w-news__slot').replaceWith(nf); } else w.querySelector('.w-news').remove();
    /* akce + novinky */
    var fallback = $$('#content .product').slice(0, 4).map(function (x) { return x.outerHTML; }).join('');
    [['akce', '/akcni-zbozi/'], ['nov', '/novinky-2/']].forEach(function (s) {
      gridFrom(s[1], 4).then(function (g) { slot(s[0]).replaceWith(g); }).catch(function () {
        var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = fallback; cards(g); slot(s[0]).replaceWith(g);
      });
    });
    /* články */
    getDoc('/novinky/').then(function (doc) {
      var it = $$('.news-item', doc);
      if (it.length < CONFIG.blogMin) { slot('blog').remove(); return; }
      slot('blog').replaceWith(box(sec('Novinky z Pletánek', '<div class="tiles tiles--blog">' + it.slice(0, 4).map(function (n) {
        var a = n.querySelector('a.title'), i = imgOf(n.querySelector('img'));
        return '<a class="tile" href="' + esc(a.getAttribute('href')) + '">' + (i ? '<img src="' + esc(i) + '" alt="" loading="lazy">' : '') + '<span class="tile__box"><small>' + esc(txt(n.querySelector('time'))) + '</small><b>' + esc(txt(a)) + '</b><span class="tile__more"><span>' + esc(txt(n.querySelector('.description'))) + '</span></span></span></a>';
      }).join('') + '</div>', ['Všechny články', '/novinky/'])));
    }).catch(function () { slot('blog').remove(); });
    /* recenze */
    getDoc('/hodnoceni-obchodu/').then(function (doc) {
      var avg = txt(doc.querySelector('.rate-average')).replace('.', ',');
      var cnt = txt(doc.querySelector('.stars-label')).replace(/[^\d\s]/g, '').trim();
      var dist = $$('.rate-list[data-score]', doc).map(function (r) {
        var bar = r.querySelector('.rate-bar'), wv = bar ? (bar.getAttribute('style') || '').match(/--rate-bar-width:\s*([\d.,]+%?)/) : null;
        return '<li><span>' + r.getAttribute('data-score') + '</span>' + svg('ico--star', P.star) + '<i><b style="width:' + (wv ? wv[1] : '0') + '"></b></i><em>' + esc(txt(r.querySelector('.rate-count'))) + '</em></li>';
      }).join('');
      var vs = $$('.vote-wrap', doc).filter(function (v) { return txt(v.querySelector('.vote-content')).length > 20; }).slice(0, 6).map(function (v) {
        var st = v.querySelectorAll('.star-on').length || 5;
        return '<figure class="rv">' + stars(st) + '<blockquote>' + esc(txt(v.querySelector('.vote-content'))) + '</blockquote><figcaption><b>' + esc(txt(v.querySelector('.vote-name span') || v.querySelector('.vote-name'))) + '</b><span>' + esc(txt(v.querySelector('.vote-time'))) + '</span></figcaption></figure>';
      }).join('');
      if (!vs) { slot('rvs').remove(); return; }
      slot('rvs').replaceWith(box(sec('Recenze zákazníků', '<div class="rvs"><div class="rvs__sum"><p class="rvs__score">' + esc(avg || '5,0') + '</p>' + stars(parseFloat((avg || '5').replace(',', '.')), 1) +
        '<p class="rvs__cnt">' + esc(cnt) + ' hodnocení obchodu</p><ul class="rvs__dist">' + dist + '</ul><a class="btn btn--line btn--full" href="/hodnoceni-obchodu/">Všechna hodnocení</a></div>' +
        '<div class="rvs__main"><div class="rvs__grid">' + vs + '</div></div></div>')));
    }).catch(function () { slot('rvs').remove(); });
    /* instagram */
    var ig = $$('.instagram-widget a').map(function (a) { var i = a.querySelector('img'); return { h: a.getAttribute('href'), i: i ? (i.getAttribute('data-thumbnail-medium') || imgOf(i)) : '' }; }).filter(function (x) { return x.i; });
    if (ig.length) {
      var it = ig.map(function (x) { return '<a class="film__i" href="' + esc(x.h) + '" target="_blank" rel="noopener"><img src="' + esc(x.i) + '" alt="Příspěvek @pletanky" loading="lazy"></a>'; }).join('');
      slot('ig').replaceWith(box('<section class="sec sec--film"><div class="wrap"><div class="sh"><h2 class="h2">Instagram <a href="' + CONFIG.instagram + '" target="_blank" rel="noopener">@pletanky</a></h2></div></div><div class="film"><div class="film__track">' + it + it + '</div></div></section>'));
    } else slot('ig').remove();
  }

  /* ---------- drobečky ---------- */
  function crumbs() {
    var bc = $('.breadcrumbs'); if (!bc) return { html: '', items: [] };
    var items = $$('[itemprop=itemListElement]', bc).map(function (s) {
      var a = s.querySelector('a[href]');
      var name = txt(s.querySelector('[itemprop=name]')) || (a ? txt(a) : '');
      return { t: name || 'Domů', h: a ? a.getAttribute('href') : '' };
    });
    var html = '<nav class="crumbs" aria-label="Drobečková navigace">' + items.map(function (x, i) {
      return (i ? '<i>/</i>' : '') + (x.h && i < items.length - 1 ? '<a href="' + esc(x.h) + '">' + esc(x.t) + '</a>' : '<span>' + esc(x.t) + '</span>');
    }).join('') + '</nav>';
    return { html: html, items: items };
  }

  /* ---------- kategorie ---------- */
  function buildCategory() {
    var cw = $('#content-wrapper'); if (!cw) return;
    var top = $('.category-top');
    var h1 = txt($('.category-title') || $('#content h1'));
    var per = $('.category-perex');
    var lead = '', v = {}, pimg = '';
    if (per) {
      var cl = per.cloneNode(true);
      $$('br', cl).forEach(function (b) { b.replaceWith('\n'); });
      $$('p', cl).forEach(function (p) { p.append('\n'); });
      var d = parseDesc(cl.textContent); v = d.v;
      var ps = $$('p', per).filter(function (p) { return !/:/.test(txt(p).slice(0, 40)) && !p.querySelector('img') && !p.querySelector('a') && txt(p).length > 40; });
      lead = ps.length ? txt(ps[0]) : d.lead;
      lead = lead.split(/(?<=[.!?])\s+/).reduce(function (acc, s) { return acc.length < 160 ? (acc ? acc + ' ' : '') + s : acc; }, '');
      var im = per.querySelector('img'); if (im) pimg = imgOf(im);
    }
    if (!pimg) { var fi = $('#products .product img'); pimg = imgOf(fi); }
    var rows = [];
    if (v.s) rows.push(['Složení', pct(v.s)]);
    if (v.wn) rows.push(['Klubko', v.wn.replace(/\s*=\s*cca\s*/, ' / ').replace(/\s*metrů/, ' m')]);
    if (v.j) rows.push(['Jehlice', v.j]); else if (v.h) rows.push(['Háček', v.h]);
    if (v.g) rows.push(['Skupina', v.g.replace(/\s*\(.*?\)\s*\/?\s*/, ' · ').replace(/\s*\/\s*/g, ' / ')]);
    var cr = crumbs();
    var hero = box('<section class="chero"><div class="wrap">' + cr.html + '<div class="chero__in' + (pimg ? '' : ' chero__in--noimg') + '"><div class="chero__txt"><h1 class="h1 h1--cat">' + esc(h1) + '</h1>' +
      (lead ? '<p>' + esc(lead) + '</p>' : '') + specsHtml(rows, 'specs') + (per && txt(per).length > lead.length + 40 ? '<button class="chero__more" type="button">Více o kategorii' + svg('ico--xs', P.down) + '</button>' : '') + '</div>' +
      (pimg ? '<div class="chero__img"><img src="' + esc(pimg) + '" alt=""></div>' : '') + '</div><div class="subcats"></div></div></section>');
    hero.id = 'whCat';
    before(cw, hero);
    var more = hero.querySelector('.w-chero__more');
    if (more && top) on(more, 'click', function () { var o = B.classList.toggle('w-perex-open'); more.classList.toggle('w-is-open', o); if (o && per) per.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    /* podkategorie jako čipy */
    var sc = hero.querySelector('.w-subcats');
    var here = location.pathname;
    var chips = function (items, cur) {
      if (!items.length) { sc.remove(); return; }
      sc.innerHTML = W(items.map(function (x) { return '<a class="subcat' + (x.h === cur ? ' is-on' : '') + '" href="' + esc(x.h) + '">' + esc(x.t) + '</a>'; }).join(''));
    };
    var own = $$('ul.subcategories li a').map(function (a) { return { t: txt(a.querySelector('.text') || a), h: a.getAttribute('href') }; });
    if (own.length) chips(own, '');
    else {
      var par = cr.items.length > 2 ? cr.items[cr.items.length - 2] : null;
      if (par && par.h && par.h !== '/') subcats(par.h).then(function (it) { chips(it, here); }).catch(function () { sc.remove(); });
      else sc.remove();
    }
    /* filtry: tlačítko + šuplík na mobilu */
    var sb = $('#content-wrapper .sidebar');
    var hasF = !!$('#filters, .box-filters');
    if (!hasF) B.classList.add('w-nofilt');
    var sheetHead = box('<div class="filters__head"><b>Filtrovat</b><button type="button" data-wf-close aria-label="Zavřít">' + svg('', P.close) + '</button></div>');
    var fbox = $('.box-filters');
    if (fbox) fbox.insertBefore(sheetHead, fbox.firstChild);
    var apply = box('<button class="btn btn--cart btn--full filters__apply" type="button" data-wf-close>Zobrazit produkty</button>');
    if (fbox) fbox.appendChild(apply);
    var setF = function (o) { B.classList.toggle('w-filt-open', o); B.style.overflow = o ? 'hidden' : ''; };
    D.addEventListener('click', function (e) {
      if (e.target.closest('[data-wf-open]')) { e.preventDefault(); setF(true); }
      else if (e.target.closest('[data-wf-close]') || e.target.classList.contains('w-filt-bg')) setF(false);
    });
    var bg = D.createElement('div'); bg.className = 'w-filt-bg'; B.appendChild(bg);
    tools();
  }
  /* nástrojová lišta nad výpisem (přežije AJAX) */
  function tools() {
    var hd = $('#category-header'); if (!hd || hd.querySelector('.w-fbtn')) return;
    var b = D.createElement('div'); b.className = 'whx';
    b.innerHTML = W('<button class="btn btn--line btn--sm ctool__filter fbtn" type="button" data-wf-open>' + svg('ico--sm', P.filter) + ' Filtrovat</button>');
    hd.insertBefore(b, hd.firstChild);
    var cnt = $('.listItemsTotal strong') || $('.itemsTotal strong');
    var ap = $('.w-filters__apply'); if (ap && cnt) ap.textContent = 'Zobrazit ' + txt(cnt) + ' ' + plural(+txt(cnt));
  }
  function plural(n) { return n === 1 ? 'produkt' : (n >= 2 && n <= 4 ? 'produkty' : 'produktů'); }

  /* ---------- detail produktu ---------- */
  function buildDetail() {
    var det = $('.p-detail'); if (!det) return;
    var cr = crumbs();
    var top = box('<div class="wrap pdtop">' + cr.html + '</div>'); top.id = 'whPd';
    before($('#content-wrapper'), top);
    var info = $('.p-info-wrapper');
    var h1 = $('.p-detail-inner-header h1');
    var code = txt($('.p-code span:not(.p-code-label)'));
    var brandA = $('.p-detail-info a[href*="/znacka/"]');
    var brand = brandA ? txt(brandA) : '';
    var sdEl = $('.p-short-description');
    var sd = '';
    if (sdEl) { var cl = sdEl.cloneNode(true); $$('br', cl).forEach(function (b) { b.replaceWith('\n'); }); $$('p', cl).forEach(function (p) { p.append('\n'); }); sd = cl.textContent; }
    var d = parseDesc(sd);
    if (info && h1) {
      var head = box('<p class="pd__brand">' + (brand ? (brandA ? '<a href="' + esc(brandA.getAttribute('href')) + '">' + esc(brand) + '</a>' : esc(brand)) : '') + (brand && code ? ' · ' : '') + (code ? 'Kód ' + esc(code) : '') + '</p>');
      info.insertBefore(head, info.firstChild);
      var h1c = D.createElement('div'); h1c.className = 'whx'; info.insertBefore(h1c, head.nextSibling); h1c.appendChild(h1); h1.classList.add('w-h1', 'w-h1--pd');
      var stw = $('.p-detail-info .stars-wrapper'); if (stw) after(h1c, stw);
      if (d.lead) { var l = box('<p class="pd__lead">' + esc(d.lead) + '</p>'); after(stw || h1c, l); }
      var atc = $('.add-to-cart', info) || $('.p-final-price-wrapper', info);
      var rows = specRows(d.v);
      if (d.v.g) rows.push(['Skupina', d.v.g]);
      var extra = box('<ul class="pd__usp">' + CONFIG.usps.map(function (u) { return '<li>' + svg('ico--sm', P[u[0]]) + ' ' + u[1] + '</li>'; }).join('') + '</ul>' + specsHtml(rows, 'specs specs--pd'));
      if (atc) after(atc, extra); else info.appendChild(extra);
      if (sdEl && rows.length) sdEl.classList.add('w-sd-hidden');
    }
    var btn = $('.add-to-cart-button');
    if (btn) { btn.classList.add('w-btn', 'w-btn--cart', 'w-btn--buy'); btn.innerHTML = W(svg('ico--sm', P.bag)) + '<span>Do košíku</span>'; }
    var hdTop = $('.p-detail-inner-header'); if (hdTop && !hdTop.querySelector('h1')) hdTop.classList.add('w-empty');
    /* související produkty */
    var rel = $('.products-related');
    var relH = $('.products-related-header');
    if (relH) relH.classList.add('w-relh');
    /* záložky (popis, parametry, hodnocení) před související produkty jako v návrhu */
    var tabs = $('.shp-tabs-wrapper');
    if (tabs && relH && tabs.parentNode === relH.parentNode && (relH.compareDocumentPosition(tabs) & 4)) {
      relH.parentNode.insertBefore(tabs, relH);
    }
    /* další odstíny z kategorie */
    var cat = cr.items.length > 1 ? cr.items[cr.items.length - 2] : null;
    if (cat && cat.h && cat.h !== '/' && info) run('swatches', function () { swatches(cat.h, info, h1); });
    if (cat && cat.h && cat.h !== '/') {
      var holder = box('<section class="sec sec--tight pdmore"><div class="sh"><h2 class="h2">Další odstíny</h2></div><div class="slot"></div><p class="sec__more"><a class="btn btn--line" href="' + esc(cat.h) + '">Celá kategorie</a></p></section>');
      var anchor = tabs || rel || det;
      after(anchor, holder);
      var me = location.pathname;
      getDoc(cat.h).then(function (doc) {
        var ps = $$('#products .product', doc).filter(function (x) { var a = x.querySelector('a.name, a.image'); return a && a.getAttribute('href') !== me; });
        var avail = ps.filter(function (x) { return /skladem/i.test(txt(x.querySelector('.availability'))); });
        ps = (avail.length >= 4 ? avail : ps).slice(0, 4);
        if (!ps.length) { holder.remove(); return; }
        var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = ps.map(function (x) { return x.outerHTML; }).join(''); cards(g);
        holder.querySelector('.w-slot').replaceWith(g);
      }).catch(function () { holder.remove(); });
    }
  }

  /* odstíny: sourozenci z nadřazené kategorie se společným začátkem názvu (např. „Příze DROPS Brushed Alpaca Silk …“) */
  function swatches(catUrl, info, h1) {
    var me = location.pathname;
    var slot = box('<div class="pd__swh" hidden></div>');
    var avEl = $('.availability-value', info) || $('.p-final-price-wrapper', info);
    if (avEl) after(avEl, slot); else return;
    getDoc(catUrl).then(function (doc) {
      var ps = $$('#products .product', doc).map(function (x) {
        var a = x.querySelector('a.name') || x.querySelector('a.image'); var im = x.querySelector('a.image img');
        return a ? { h: a.getAttribute('href'), n: txt(x.querySelector('a.name span') || a), i: im ? (im.getAttribute('data-src') || im.getAttribute('src')) : '' } : null;
      }).filter(function (x) { return x && x.n && x.i && !/^data:/.test(x.i); });
      var myName = txt(h1);
      if (ps.length < 3 || !myName) return;
      var pre = myName;
      ps.forEach(function (x) { var k = 0; while (k < pre.length && k < x.n.length && pre[k] === x.n[k]) k++; pre = pre.slice(0, k); });
      pre = pre.replace(/\S*$/, '');
      if (pre.trim().length < 8) return;
      var shade = function (n) { return n.slice(pre.length).trim() || n; };
      var mine = ps.filter(function (x) { return x.h === me; })[0];
      var others = ps.filter(function (x) { return x.h !== me; });
      var totEl = doc.querySelector('.listItemsTotal strong');
      var tot = totEl ? parseInt(txt(totEl), 10) : ps.length;
      if (!(tot > 1)) tot = ps.length;
      var meImg = imgOf($('.p-image img') || $('.p-main-image img'));
      var list = [{ h: me, n: myName, i: (mine && mine.i) || meImg, on: 1 }].concat(others.slice(0, CONFIG.swatchMax - 1));
      var rest = tot - 1;
      var inner = slot.firstChild;
      inner.innerHTML = W('<p>Odstín: <b>' + esc(shade(myName)) + '</b>' + (rest > 0 ? ' <span>· ' + (rest === 1 ? 'další 1 odstín' : rest < 5 ? 'další ' + rest + ' odstíny' : 'dalších ' + rest + ' odstínů') + '</span>' : '') + '</p>' +
        '<div class="pswatches">' + list.map(function (x) {
          return '<a class="pswatch' + (x.on ? ' is-on' : '') + '" href="' + esc(x.h) + '" title="' + esc(shade(x.n)) + '"' + (x.on ? ' aria-current="true"' : '') + '><img src="' + esc(x.i) + '" alt="' + esc(shade(x.n)) + '" loading="lazy"></a>';
        }).join('') + (rest > list.length - 1 ? '<a class="pswatch pswatch--more" href="' + esc(catUrl) + '" title="Všechny odstíny">+' + (rest - list.length + 1) + '</a>' : '') + '</div>');
      inner.removeAttribute('hidden');
    }).catch(function () { slot.remove(); });
  }

  /* ---------- patička ---------- */
  function buildFooter() {
    var f = $('footer#footer') || $('#footer'); if (!f) return;
    var w = box('<footer class="ftr"><div class="wrap ftr__grid"><div class="ftr__brand">' + logoHtml('span') + '<p>Vše pro radost z tvoření</p>' +
      '<p class="ftr__soc"><a href="' + CONFIG.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + svg('', P.ig) + '</a><a href="' + CONFIG.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + svg('', P.fb) + '</a></p></div>' +
      CONFIG.footerCols.map(function (c) { return '<div><p class="ftr__h">' + c.h + '</p>' + c.l.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('') + '</div>'; }).join('') +
      '<div class="ftr__contact"><p class="ftr__h">Kontakt</p><a href="mailto:' + CONFIG.email + '">' + CONFIG.email + '</a><span>' + CONFIG.address + '</span></div></div>' +
      '<div class="wrap ftr__pay"><span class="ftr__h">Platební metody</span><ul class="payl"><li class="pay pay--gopay">GoPay</li><li class="pay pay--visa">VISA</li><li class="pay pay--mc"><i></i><i></i>Mastercard</li><li class="pay">Apple Pay</li><li class="pay">Google Pay</li></ul></div></footer>');
    w.id = 'whFtr';
    before(f, w);
  }

  /* ---------- spuštění ---------- */
  function run(name, fn) { try { fn(); } catch (e) { if (window.console) console.warn('[wh] ' + name, e); } }
  run('header', buildHeader);
  if (isType('index')) run('home', buildHome);
  else if (isType('category') || isType('manufacturer-detail') || isType('search')) run('category', function () { if (isType('category')) buildCategory(); });
  else if (isType('detail')) run('detail', buildDetail);
  run('footer', buildFooter);
  run('cards', function () { cards(); });
  if (window.MutationObserver) {
    var t = null;
    new MutationObserver(function () {
      if (t) return;
      t = setTimeout(function () { t = null; run('cards', function () { cards(); }); if (isType('category')) run('tools', tools); }, 30);
    }).observe($('#content') || B, { childList: true, subtree: true });
  }
  H.classList.add('wh-ready');
})();
