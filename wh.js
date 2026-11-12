/* Pletánky.cz – nový vzhled (návrh v9, téma d) nad šablonou Shoptet Classic.
   Běží jen s třídou html.wh (náhled ?nahled=novy). Data bere z DOM Shoptetu,
   pevný obsah (texty banneru, fotky, dlaždice) je v CONFIG. */
(function () {
  'use strict';
  var H = document.documentElement;
  if (!/(^|\s)wh(\s|$)/.test(H.className)) return;

  var IMG = 'https://webhunter-navrhy.github.io/pletanky-shoptet/img/';
  var CONFIG = {
    newsText: 'Nový odstín vaší oblíbené příze, tip na víkendové tvoření nebo akce na klubíčka? Přihlaste se k odběru newsletteru a dozvíte se mezi prvními, co pro vás v Pletánkách chystáme.',
    newsBtn: 'Ano, chci novinky',
    topbar: { left: 'Doprava zdarma od 2 000 Kč', mid: 'Příze DROPS v akci až −30 %', midHref: '/akcni-zbozi/' },
    /* hlavní menu se čte z nativního #navigation Shoptetu (názvy, pořadí i nové kategorie se přebírají samy);
       navFallback se použije jen, kdyby nativní menu chybělo */
    akceHref: '/akcni-zbozi/',
    navInfo: ['/doprava/', '/hodnoceni-obchodu/', '/kontakty/'],
    navFallback: [
      { t: 'Akce', h: '/akcni-zbozi/', akce: true },
      { t: 'Příze na pletení', h: '/prize/' },
      { t: 'Špagáty a macramé', h: '/ceske-hobby-spagaty/' },
      { t: 'Pomůcky', h: '/pomucky/' },
      { t: 'Korálky', h: '/koralky-/' }
    ],
    akceCount: 12,
    projsHref: '/vyberte-podle-projektu/',
    carouselMs: 6500,
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
      { t: 'Svetry a kardigany', h: '/prize-s-obsahem-vlny/', img: 'proj-svetry.jpg', links: [['Příze s obsahem vlny', '/prize-s-obsahem-vlny/'], ['Všechny příze', '/prize/'], ['Značka DROPS', '/znacka/drops/'], ['Jehlice a háčky', '/hackovani-a-pleteni/']] },
      { t: 'Čepice a šály', h: '/moherove/', img: 'proj-cepice.jpg', links: [['Moherové příze', '/moherove/'], ['Příze s obsahem vlny', '/prize-s-obsahem-vlny/'], ['Všechny příze', '/prize/'], ['Jehlice a háčky', '/hackovani-a-pleteni/']] },
      { t: 'Ponožky', h: '/ponozkove-2/', img: 'proj-ponozky.jpg', links: [['Ponožkové příze', '/ponozkove-2/'], ['Příze s obsahem vlny', '/prize-s-obsahem-vlny/'], ['Jehlice a háčky', '/hackovani-a-pleteni/'], ['Drobná galanterie', '/drobna-galanterie/']] },
      { t: 'Deky a pledy', h: '/zinylkove-prize/', img: 'proj-deky.jpg', links: [['Žinylkové příze', '/zinylkove-prize/'], ['Háčkovací příze', '/hackovaci-prize/'], ['Všechny příze', '/prize/'], ['Jehlice a háčky', '/hackovani-a-pleteni/']] },
      { t: 'Hračky a amigurumi', h: '/hackovaci-prize/', img: 'proj-amigurumi.jpg', links: [['Háčkovací příze', '/hackovaci-prize/'], ['Jehlice a háčky', '/hackovani-a-pleteni/'], ['Drobná galanterie', '/drobna-galanterie/'], ['Pomůcky pro výrobu', '/pomucky/']] },
      { t: 'Macramé do bytu', h: '/ceske-hobby-spagaty/', img: 'proj-macrame.jpg', links: [['Špagátové a šňůrkové příze', '/ceske-hobby-spagaty/'], ['Pomůcky pro výrobu', '/pomucky/'], ['Dřevěné korálky', '/drevene-3/']] },
      { t: 'Šperky a bižuterie', h: '/koralky-/', img: 'proj-sperky.jpg', links: [['Korálky', '/koralky-/'], ['Kameny a minerály', '/kameny-polodrahokamy-mineraly-/'], ['Bižuterní komponenty', '/bizuterni-komponenty/'], ['Hotové šperky', '/hotove-sperky/'], ['Návlekový materiál', '/navlekovy-material/']] }
    ],
    /* klientka mění v administraci Shoptetu: první produkt kategorie /odstin-mesice/, první článek (nebo produkt) v /tema-mesice/ */
    motmHref: '/odstin-mesice/', themeHref: '/tema-mesice/',
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
    usps: [['truck', 'Doprava zdarma od 2&nbsp;000&nbsp;Kč'], ['mail', '<a href="mailto:info@pletanky.cz">Nevíte si rady s výběrem? Napište nám</a>']],
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
    phone: '<path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7L16 13l4 1.5v3c0 1-.8 2-2 2C10.8 19.5 4.5 13.2 4.5 6c0-1 .5-2 2-2z"/>',
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
  var KEYS = /(Složení|Skupina přízí|Hmotnost klubíčka|(?:Váha|Hmotnost)\s*\/\s*návin|Hmotnost|Váha|Návin|Doporučen[áéý]\s+(?:síla|velikost)\s+jehlic\s*\/\s*háčku|Doporučené\s+jehlice\s*\/\s*háček|Doporučen[áéý]\s+(?:síla|velikost)\s+jehlic|Doporučené\s+jehlice|Síla jehlic|Velikost jehlic|Jehlice\s*\/\s*háček|Háček\s*\/\s*jehlice|Jehlice|Doporučen[áéý]\s+(?:velikost|síla)\s+háčku|Doporučený\s+háček|Síla háčku|Velikost háčku|Háček|Zkušební vzorek|Spotřeba|Instagram)\s*:\s*/gi;
  function norm(k) {
    k = k.toLowerCase().replace(/\s+/g, ' ');
    if (k.indexOf('složení') === 0) return 's';
    if (/(váha|hmotnost) ?\/ ?návin/.test(k)) return 'wn';
    if (k.indexOf('hmotnost') === 0 || k === 'váha') return 'w';
    if (k === 'návin' || k === 'délka') return 'n';
    if (k.indexOf('jehlic') > -1 && k.indexOf('háč') > -1) return 'jh';
    if (k.indexOf('jehlic') > -1) return 'j';
    if (k.indexOf('háč') > -1) return 'h';
    if (k.indexOf('skupina') === 0) return 'g';
    if (k.indexOf('zkušební') === 0) return 'v';
    return 'x';
  }
  /* text z administrace po řádcích: zachová Enter (br), odstavce, odrážky, odkazy a tučné písmo */
  function htmlLines(el) {
    var lines = [], cur = '', curT = '', gap = false, stack = [];
    function opens() { return stack.map(function (s) { return s.o; }).join(''); }
    function closes() { return stack.slice().reverse().map(function (s) { return s.c; }).join(''); }
    function flush(brk) {
      if (curT.replace(/[\s ]+/g, '').length) {
        var h = (cur + closes()).replace(/<(a|strong|b|em|i|u)\b[^>]*>(\s|&nbsp;)*<\/\1>/g, '').replace(/^(\s|&nbsp;)+|(\s|&nbsp;)+$/g, '');
        lines.push({ html: h, text: curT.replace(/[\s ]+/g, ' ').trim(), gap: gap && lines.length > 0 }); gap = false;
      } else if (brk && lines.length) gap = true; /* prázdný řádek (dvakrát Enter) = mezera */
      cur = opens(); curT = '';
    }
    function walk(n) {
      if (n.nodeType === 3) { var s = n.nodeValue.replace(/\s+/g, ' '); cur += esc(s); curT += s; return; }
      if (n.nodeType !== 1) return;
      var tg = n.tagName.toLowerCase();
      if (tg === 'br') { flush(true); return; }
      if (/^(script|style|img|svg|iframe)$/.test(tg)) return;
      var blk = /^(div|p|ul|ol|li|h[1-6]|table|tr|blockquote)$/.test(tg);
      if (blk) { flush(); if (tg !== 'li' && lines.length) gap = true; }
      if (tg === 'li') { cur += '• '; curT += '• '; }
      var t = null;
      if (tg === 'a' && n.getAttribute('href')) {
        var tb = n.getAttribute('target') === '_blank';
        t = { o: '<a href="' + esc(n.getAttribute('href')) + '"' + (tb ? ' target="_blank" rel="noopener"' : '') + '>', c: '</a>' };
      } else if (/^(strong|b|em|i|u)$/.test(tg)) t = { o: '<' + tg + '>', c: '</' + tg + '>' };
      if (t) { cur += t.o; stack.push(t); }
      Array.prototype.forEach.call(n.childNodes, walk);
      if (t) { stack.pop(); cur += t.c; }
      if (blk) { flush(); if (tg !== 'li') gap = true; }
    }
    walk(el); flush(); return lines;
  }
  function linesHtml(ls) {
    var out = '', p = [];
    ls.forEach(function (x) { if (x.gap && p.length) { out += '<p>' + p.join('<br>') + '</p>'; p = []; } p.push(x.html); });
    if (p.length) out += '<p>' + p.join('<br>') + '</p>';
    return out;
  }
  function rich(el) { return el ? linesHtml(htmlLines(el)) : ''; }
  /* parametry příze po řádcích „Popisek: hodnota“ – každý údaj má v tabulce pevné místo */
  var LBL = /^([^:]{2,60}?)\s*:\s*/;
  function lkey(l) {
    l = l.toLowerCase().replace(/\s+/g, ' ').trim();
    if (/^složení$/.test(l)) return 's';
    if (/^skupina příz/.test(l)) return 'g';
    if (/^(váha|hmotnost)( klubíčka| klubka)? ?\/ ?návin$/.test(l)) return 'wn';
    if (/^(hmotnost|váha)( klubíčka| klubka| přadena)?$/.test(l)) return 'w';
    if (/^návin$/.test(l)) return 'n';
    if (/^zkušební vzorek/.test(l)) return 'v';
    if (l.length < 45 && /^(doporučen[áéý] |velikost |síla )?(síla |velikost )?(jehlic|jehlice|háč)/.test(l)) { var j = /jehlic/.test(l), h = /háč/.test(l); return j && h ? 'jh' : (j ? 'j' : 'h'); }
    return '';
  }
  function parseLines(lines) {
    var v = {}, pre = [], post = [], seen = false;
    lines.forEach(function (x) {
      var m0 = LBL.exec(x.text), k0 = m0 ? lkey(m0[1]) : '';
      var segs = k0 === 'v' ? [x.text] : x.text.split(/;\s*(?=[^\s:;][^:;]{1,45}:)/);
      var ks = segs.map(function (s) { var m = LBL.exec(s); return m ? lkey(m[1]) : ''; });
      segs.forEach(function (s, i) { if (!ks[i]) return; var val = s.replace(LBL, '').replace(/[\s;,.]+$/, '').trim(); if (val && !v[ks[i]]) v[ks[i]] = val; });
      if (ks.every(Boolean)) { seen = true; return; }
      (seen ? post : pre).push(x);
    });
    if (post.length) post[0] = { html: post[0].html, text: post[0].text, gap: false };
    return { v: v, pre: pre, post: post };
  }
  function ptab(v) {
    var nav = v.wn ? v.wn.replace(/\s*gramů/, ' g') : (v.w && v.n ? v.w + ' = ' + v.n : (v.w || v.n || ''));
    var nd = v.jh || (v.j && v.h ? v.j + ' / ' + v.h : (v.j || v.h || ''));
    var nl = (v.jh || (v.j && v.h) || (!v.j && !v.h)) ? 'Jehlice / háček' : (v.j ? 'Jehlice' : 'Háček');
    var r = [['Složení', v.s ? pct(v.s) : '–'], ['Návin', nav || '–'], [nl, nd || '–']];
    var ok = [v.s, nav, nd].filter(Boolean).length >= 2;
    var wide = (v.g || v.v) ? '<div class="ptab__wide"><dt>' + [v.g ? 'Typ příze' : '', v.v ? 'Zkušební vzorek' : ''].filter(Boolean).join(' · ') + '</dt><dd>' + esc([v.g, v.v].filter(Boolean).join(' · ')) + '</dd></div>' : '';
    return ok ? '<dl class="ptab">' + r.map(function (x) { return '<div><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>'; }).join('') + wide + '</dl>' : '';
  }
  /* hodnoty v jednom řádku: když se nevejdou, písmo se jednotně zmenší (min. 12 px), až pak se zalomí */
  function fitTab(dl) {
    if (!dl) return;
    var top = $$('div:not(.w-ptab__wide) dd', dl), wide = $$('.w-ptab__wide dd', dl);
    var fit = function (dds) {
      if (!dds.length) return;
      dl.classList.remove('w-ptab--wrap');
      var fs = 16, over = function () { return dds.some(function (d) { return d.scrollWidth > d.clientWidth + 1; }); };
      dds.forEach(function (d) { d.style.fontSize = ''; d.classList.remove('w-wrap'); });
      while (over() && fs > 12) { fs -= 0.5; dds.forEach(function (d) { d.style.fontSize = fs + 'px'; }); }
      if (over()) dds.forEach(function (d) { d.classList.add('w-wrap'); });
    };
    fit(top); fit(wide);
  }
  function parseDesc(t) {
    t = String(t || '').replace(/ /g, ' ');
    var trunc = /(\.\.\.|…)\s*$/.test(t);
    t = t.replace(/(\.\.\.|…)\s*$/, '');
    var m, hits = [], out = { lead: '', v: {}, trunc: trunc, extra: '' };
    KEYS.lastIndex = 0;
    while ((m = KEYS.exec(t))) {
      var prevH = hits[hits.length - 1];
      /* uvnitř řádku „Zkušební vzorek:“ nejsou další parametry (jehlice:, háček:) */
      if (prevH && prevH.k === 'v' && t.slice(prevH.e, m.index).indexOf('\n') < 0) continue;
      hits.push({ k: norm(m[1]), s: m.index, e: m.index + m[0].length });
    }
    out.lead = (hits.length ? t.slice(0, hits[0].s) : t).replace(/\s+/g, ' ').trim().replace(/[.;:,]+$/, '');
    hits.forEach(function (h, i) {
      var v = t.slice(h.e, i + 1 < hits.length ? hits[i + 1].s : t.length);
      var parts = h.k === 'v' ? v.split(/\n/) : v.split(/\n|;/); v = parts[0].replace(/\s+/g, ' ').trim().replace(/[.;,]+$/, '');
      if (parts.length > 1 && !(trunc && i === hits.length - 1)) { var ex = parts.slice(1).join(' ').replace(/\s+/g, ' ').trim(); if (ex) out.extra += (out.extra ? ' ' : '') + ex; }
      if (h.k === 'x' || !v) return;
      if (trunc && i === hits.length - 1) return; /* poslední hodnota může být useknutá */
      if (!out.v[h.k]) out.v[h.k] = v;
    });
    if (out.lead.length > 140) out.lead = out.lead.slice(0, 137).replace(/\s\S*$/, '') + '…';
    return out;
  }
  function pct(s) { return s.replace(/(\d)\s*%/g, '$1 %').replace(/\s*,\s*(?=\d)/g, ', ').replace(/,(?=\S)/g, ', '); }
  function specRows(v) {
    var r = [], nav = v.wn ? v.wn.replace(/\s*gramů/, ' g') : (v.w && v.n ? v.w + ' = ' + v.n : (v.w || v.n || ''));
    var nd = v.jh || (v.j && v.h ? v.j + ' / ' + v.h : (v.j || v.h || '')), nl = v.jh || (v.j && v.h) ? 'Jehlice / háček' : (v.j ? 'Jehlice' : (v.h ? 'Háček' : 'Jehlice / háček'));
    if (!(nav || nd)) { if (v.s) r.push(['Složení', pct(v.s)]); if (v.v) r.push(['Zkušební vzorek', v.v]); return r; }
    /* vždy stejný rámeček: složení | návin | jehlice nebo háček */
    r.push(['Složení', v.s ? pct(v.s) : '–']);
    r.push(['Návin', nav || '–']);
    r.push([nl, nd || '–']);
    if (v.v) r.push(['Zkušební vzorek', v.v]);
    return r;
  }
  function specsHtml(rows, c) {
    return rows.length ? '<dl class="' + c + '">' + rows.map(function (r) { return '<div' + (/zkušební vzorek$|^Typ příze$/.test(r[0]) ? ' class="is-sample is-wide"' : '') + '><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('') + '</dl>' : '';
  }
  function fullDesc(href) {
    var k = 'whd2:' + href, c = cacheGet(k, 864e5, 's');
    if (c != null) return Promise.resolve(c);
    return getDoc(href).then(function (doc) {
      var e = doc.querySelector('.p-short-description');
      var r = { v: {}, lead: '' };
      if (e) { var pl = parseLines(htmlLines(e)); r.v = pl.v; r.lead = pl.pre.length ? pl.pre[0].text : ''; }
      if (r.lead.length > 140) r.lead = r.lead.slice(0, 137).replace(/\s\S*$/, '') + '…';
      cacheSet(k, r, 's'); return r;
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
        return fullDesc(href).then(function (f) {
          if (!f) return;
          var r = specRows(f.v);
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
  /* posuvný jednořádkový pás se šipkami u okrajů stránky */
  function rail(track, cfg) {
    cfg = cfg || {};
    var wr = D.createElement('div'); wr.className = 'w-rail' + (cfg.c ? ' ' + cfg.c : '');
    track.classList.add('w-rail__track');
    var pv = D.createElement('button'), nx = D.createElement('button');
    pv.type = nx.type = 'button'; pv.className = 'w-rail__b w-rail__prev'; nx.className = 'w-rail__b w-rail__next';
    pv.setAttribute('aria-label', 'Předchozí'); nx.setAttribute('aria-label', 'Další');
    pv.innerHTML = nx.innerHTML = W(svg('ico--sm', P.right));
    wr.appendChild(pv); wr.appendChild(track); wr.appendChild(nx);
    var upd = function () {
      var m = track.scrollWidth - track.clientWidth - 2;
      cls(wr, 'w-rail--no', m <= 0);
      if (cfg.loop) { pv.disabled = nx.disabled = false; return; }
      pv.disabled = track.scrollLeft <= 2; nx.disabled = track.scrollLeft >= m;
    };
    var go = cfg.go || function (d) { track.scrollBy({ left: d * Math.max(200, track.clientWidth * 0.85), behavior: 'smooth' }); };
    on(pv, 'click', function () { go(-1); }); on(nx, 'click', function () { go(1); });
    on(track, 'scroll', upd); window.addEventListener('resize', upd);
    setTimeout(upd, 60); setTimeout(upd, 800); setTimeout(upd, 2500);
    return wr;
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

  /* Akce: n produktů z různých rodin (kategorií) napříč stránkami akčního zboží */
  function famOf(p) {
    var t = txt(p.querySelector('[data-micro="name"]') || p.querySelector('.name')).replace(/^Příze\s+/i, '').split(/\s+/), o = [];
    for (var i = 0; i < t.length && o.length < 2; i++) { if (/\d/.test(t[i]) || /^(uni|mix|print|color|colour|unicolor|-)$/i.test(t[i])) break; o.push(t[i].toLowerCase()); }
    return o.join(' ') || 'x';
  }
  function akceGrid(n) {
    var k = 'wha:' + n, c = cacheGet(k, 6e5, 's');
    var make = function (html) { var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = html; cards(g); return g; };
    if (c) return Promise.resolve(make(c));
    var urls = [CONFIG.akceHref]; for (var i = 2; i <= 8; i++) urls.push(CONFIG.akceHref + 'strana-' + i + '/');
    return Promise.all(urls.map(function (u) { return getDoc(u).then(function (d) { return $$('#products .product', d); }).catch(function () { return []; }); })).then(function (pages) {
      var all = [].concat.apply([], pages), fam = {}, order = [];
      all.forEach(function (p) { var f = famOf(p); if (!fam[f]) { fam[f] = []; order.push(f); } fam[f].push(p); });
      var off = Math.floor(Date.now() / 864e5), out = [], r = 0;
      while (out.length < n && out.length < all.length) {
        order.forEach(function (f, j) { var l = fam[f]; if (out.length < n && l.length) out.push(l.splice((off + j) % l.length, 1)[0]); });
        if (++r > n) break;
      }
      if (!out.length) throw new Error('akce');
      var html = out.map(function (x) { return x.outerHTML; }).join(''); cacheSet(k, html, 's'); return make(html);
    });
  }

  /* newsletter: popisky jako zástupný text, vlastní text tlačítka */
  function tuneNews(nf) {
    var em = nf.querySelector('input[type=email]'); if (em) { em.setAttribute('placeholder', 'Váš e-mail'); em.setAttribute('aria-label', 'Váš e-mail'); }
    var cp = nf.querySelector('input[name=captcha]'); if (cp) { cp.setAttribute('placeholder', window.innerWidth < 480 ? 'Text z obrázku' : 'Opište text z obrázku'); cp.setAttribute('aria-label', 'Opište text z obrázku'); }
    var bt = nf.querySelector('button[type=submit]'); if (bt) bt.textContent = CONFIG.newsBtn;
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
  function path(h) {
    try { var u = new URL(h, location.href); return u.host === location.host ? u.pathname : u.href; } catch (e) { return h; }
  }
  /* menu z nativního #navigation Shoptetu */
  function readNav() {
    var ul = $('#navigation ul.menu-level-1') || $('#navigation ul'), out = [];
    if (ul) Array.prototype.forEach.call(ul.children, function (li) {
      var a = li.querySelector('a'); if (!a) return;
      var t = txt(a.querySelector('b') || a), h = path(a.getAttribute('href') || '');
      if (!t || !h || h === '#') return;
      out.push({
        t: t, h: h, akce: h === CONFIG.akceHref, brands: li.classList.contains('nav-manufacturers'),
        info: CONFIG.navInfo.indexOf(h) >= 0,
        sub: $$('ul a', li).map(function (x) { return { t: txt(x), h: path(x.getAttribute('href')), i: '' }; })
      });
    });
    if (!out.length) out = CONFIG.navFallback.map(function (n) { return { t: n.t, h: n.h, akce: !!n.akce, sub: [] }; });
    var k = -1; out.forEach(function (n, i) { if (n.akce && k < 0) k = i; });
    if (k > 0) out.unshift(out.splice(k, 1)[0]);
    return out;
  }
  var NAV = [];
  function fitNav(h) {
    var ul = h.querySelector('.w-nav__ul'), more = ul && ul.querySelector('.w-nav__more'); if (!ul || !more) return;
    var lis = $$('.w-nav__li[data-i]', ul);
    lis.forEach(function (l) { l.style.display = ''; }); more.style.display = 'none';
    if (ul.scrollWidth <= ul.clientWidth + 1) return;
    more.style.display = '';
    var hid = [];
    for (var i = lis.length - 1; i > 0 && ul.scrollWidth > ul.clientWidth + 1; i--) { lis[i].style.display = 'none'; hid.unshift(lis[i]); }
    more.querySelector('.w-mega__links').innerHTML = hid.map(function (l) { var n = NAV[+l.getAttribute('data-i')]; return '<a href="' + esc(n.h) + '">' + esc(n.t) + '</a>'; }).join('');
  }
  function buildHeader() {
    var navAll = readNav();
    NAV = navAll.filter(function (n) { return !n.info; });
    var navHtml = NAV.map(function (n, i) {
      return '<li class="nav__li has-mega" data-i="' + i + '"><a class="nav__a' + (n.akce ? ' nav__a--akce' : '') + '" href="' + esc(n.h) + '">' + esc(n.t) + svg('ico--xs', P.down) + '</a>' +
        '<div class="mega" role="region" aria-label="' + esc(n.t) + '"><div class="mega__in wrap"><div class="mega__main"><p class="mega__h">' + esc(n.t) + '</p><div class="mega__tiles"></div></div><div class="mega__col"></div></div></div></li>';
    }).join('') +
      '<li class="nav__li has-mega nav__more" style="display:none"><a class="nav__a" href="#" onclick="return false">Více' + svg('ico--xs', P.down) + '</a><div class="mega"><div class="mega__in wrap"><div class="mega__links"></div></div></div></li>';
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
      navAll.map(function (n) { return '<a' + (n.akce ? ' class="mmenu__akce"' : '') + ' href="' + esc(n.h) + '">' + esc(n.t) + svg('ico--sm', P.right) + '</a>'; }).join('') +
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
      /* Enter i klik na lupu hledá spolehlivě ve všech prohlížečích (tlačítko Hledat je skryté) */
      var goSearch = function () { var q = inp && inp.value.trim(); if (q) location.href = '/vyhledavani/?string=' + encodeURIComponent(q); };
      on(inp, 'keydown', function (e) { if (e.key === 'Enter' || e.keyCode === 13) { e.preventDefault(); e.stopPropagation(); goSearch(); } });
      on(sf.querySelector('.w-ico'), 'click', goSearch);
      /* Shoptet zapíná našeptávač jen pro formulář uvnitř .search */
      var sw = D.createElement('div'); sw.className = 'search w-search-wrap'; slot.replaceWith(sw); sw.appendChild(sf);
      if (!sf.querySelector('.search-whisperer') && window.fulltextSearch && window.jQuery && jQuery.isReady) { try { var $i = jQuery(sf).find('input.query-input'); $i.after('<div class="search-whisperer"></div>'); fulltextSearch($i, jQuery(sw).find('.search-whisperer')); } catch (e) {} }
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
    $$('.w-has-mega[data-i]', h).forEach(function (li) {
      var n = NAV[+li.getAttribute('data-i')];
      var done = false;
      var fill = function () { if (done) return; done = true; megaData(n).then(function (items) { renderMega(li, n, items); }).catch(function () { renderMega(li, n, n.sub || []); }); };
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
    var fit = function () { fitNav(h); }, ft = null;
    fit(); window.addEventListener('load', fit);
    if (D.fonts && D.fonts.ready) D.fonts.ready.then(fit);
    window.addEventListener('resize', function () { clearTimeout(ft); ft = setTimeout(fit, 120); });
  }
  function megaData(n) {
    var k = 'whm2:' + n.h, c = cacheGet(k, 864e5, 'l');
    if (c) return Promise.resolve(c);
    if (n.brands) {
      return Promise.resolve(n.sub || []);
    }
    return subcats(n.h).then(function (items) { if (!items.length) items = n.sub || []; cacheSet(k, items, 'l'); return items; });
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
    var tiles = items.filter(function (x) { return x.i; });
    var rest = items.filter(function (x) { return tiles.indexOf(x) < 0; });
    var tEl = li.querySelector('.w-mega__tiles'), cEl = li.querySelector('.w-mega__col');
    if (tiles.length) {
      tEl.innerHTML = W(tiles.map(function (x) { return '<a class="mega__t" href="' + esc(x.h) + '"><span class="mega__ti"><img src="' + esc(x.i) + '" alt="" loading="lazy"></span><span class="mega__l">' + esc(x.t) + '</span></a>'; }).join(''));
    } else {
      tEl.className = 'w-mega__links';
      tEl.innerHTML = rest.splice(0).map(function (x) { return '<a href="' + esc(x.h) + '">' + esc(x.t) + '</a>'; }).join('');
    }
    cEl.innerHTML = W((rest.length ? '<p class="mega__h">&nbsp;</p>' : '') + rest.map(function (x) { return '<a href="' + esc(x.h) + '">' + esc(x.t) + '</a>'; }).join(''));
  }

  /* ---------- úvodní stránka ---------- */
  function sec(h2, inner, more, extra) {
    return '<section class="sec' + (extra || '') + '"><div class="wrap"><div class="sh"><h2 class="h2">' + h2 + '</h2></div>' + inner +
      (more ? '<p class="sec__more"><a class="btn btn--line" href="' + more[1] + '">' + more[0] + '</a></p>' : '') + '</div></section>';
  }
  function initCarousel(w) {
    var car = w.querySelector('.w-car'); if (!car) return;
    var sl = $$('.w-car__s', car), ctl = car.querySelector('.w-car__ctl'), cur = 0, tm = null, paused = false;
    if (sl.length < 2) { ctl.remove(); return; }
    ctl.innerHTML = '<button type="button" class="car__b car__prev" aria-label="Předchozí">' + svg('ico--sm', P.right) + '</button>' +
      '<span class="car__dots">' + sl.map(function (x, i) { return '<button type="button" aria-label="Snímek ' + (i + 1) + '" data-i="' + i + '"></button>'; }).join('') + '</span>' +
      '<button type="button" class="car__b car__next" aria-label="Další">' + svg('ico--sm', P.right) + '</button>';
    ctl.innerHTML = W(ctl.innerHTML);
    var dots = $$('.w-car__dots button', ctl);
    var go = function (i) {
      cur = (i + sl.length) % sl.length;
      sl.forEach(function (x, j) { cls(x, 'w-is-on', j === cur); x.setAttribute('aria-hidden', j === cur ? 'false' : 'true'); if (j !== cur) x.setAttribute('tabindex', '-1'); else x.removeAttribute('tabindex'); });
      dots.forEach(function (d, j) { cls(d, 'w-is-on', j === cur); });
    };
    var stop = function () { clearInterval(tm); tm = null; };
    var play = function () { stop(); if (paused || (window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches)) return; tm = setInterval(function () { go(cur + 1); }, CONFIG.carouselMs); };
    on(ctl.querySelector('.w-car__prev'), 'click', function () { go(cur - 1); play(); });
    on(ctl.querySelector('.w-car__next'), 'click', function () { go(cur + 1); play(); });
    dots.forEach(function (d) { on(d, 'click', function () { go(+d.getAttribute('data-i')); play(); }); });
    on(car, 'mouseenter', function () { paused = true; stop(); }); on(car, 'mouseleave', function () { paused = false; play(); });
    on(car, 'focusin', function () { paused = true; stop(); }); on(car, 'focusout', function () { paused = false; play(); });
    var x0 = null;
    on(car, 'touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    on(car, 'touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); play(); } });
    D.addEventListener('visibilitychange', function () { if (D.hidden) stop(); else play(); });
    go(0); play();
  }
  /* rubriky s více odkazy: společné okno */
  function initProjs(w) {
    var sh = null;
    var close = function () { if (sh) { cls(sh, 'w-is-open', false); sh.setAttribute('aria-hidden', 'true'); } };
    {
      on(w, 'click', function (e) {
        var a = e.target.closest ? e.target.closest('.w-proj[data-links]') : null; if (!a) return;
        e.preventDefault();
        var ls = []; try { ls = JSON.parse(a.getAttribute('data-links')); } catch (x) {}
        if (!sh) {
          sh = box('<div class="sheet" aria-hidden="true" role="dialog" aria-modal="true"><div class="sheet__p"><button type="button" class="sheet__x" aria-label="Zavřít">' + svg('', P.close) + '</button><p class="h2 sheet__h"></p><div class="sheet__l"></div></div></div>');
          B.appendChild(sh); sh = sh.firstChild;
          on(sh, 'click', function (ev) { if (ev.target === sh || ev.target.closest('.w-sheet__x')) close(); });
          D.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
        }
        sh.querySelector('.w-sheet__h').textContent = a.getAttribute('data-title');
        sh.querySelector('.w-sheet__l').innerHTML = W(ls.map(function (l) { return '<a class="btn btn--line" href="' + esc(l[1]) + '">' + esc(l[0]) + svg('ico--sm', P.right) + '</a>'; }).join(''));
        cls(sh, 'w-is-open', true); sh.setAttribute('aria-hidden', 'false');
        var f = sh.querySelector('a'); if (f) f.focus();
      });
    }
  }
  /* odstín a téma měsíce: čte se ze Shoptetu, při chybě zůstane výchozí z CONFIG */
  function initMonth(w) {
    getDoc(CONFIG.motmHref).then(function (d) {
      var p = $('#products .product', d); if (!p) return;
      var a = p.querySelector('a.name') || p.querySelector('a'), im = imgOf(p.querySelector('img')); if (!a || !im) return;
      var el = w.querySelector('.w-motm-mini'); if (!el) return;
      el.setAttribute('href', path(a.getAttribute('href')));
      el.querySelector('img').src = im; el.querySelector('b').textContent = txt(p.querySelector('[data-micro="name"]') || a);
    }).catch(function () {});
    getDoc(CONFIG.themeHref).then(function (d) {
      var el = w.querySelector('.w-themeband'); if (!el) return;
      var n = $('.news-item', d), t, h, im;
      if (n) { var a = n.querySelector('a.title') || n.querySelector('a'); t = txt(a); h = a.getAttribute('href'); im = imgOf(n.querySelector('img')); }
      else { var p = $('#products .product', d); t = txt($('h1', d)); h = CONFIG.themeHref; im = p ? imgOf(p.querySelector('img')) : ''; }
      if (!t) return;
      el.setAttribute('href', path(h)); el.querySelector('b').textContent = t;
      if (im) el.querySelector('img').src = im;
    }).catch(function () {});
  }
  /* rubriky „Vyberte podle projektu“: výchozí z CONFIG, jinak ze Shoptetu (články ve složce CONFIG.projsHref:
     název = nadpis článku, fotka = obrázek článku, odkazy v perexu = okno odkazů; jeden odkaz = rovnou přechod) */
  function projsHtml(list) {
    return list.map(function (p) {
      var im = /^https?:|^\//.test(p.img) ? p.img : IMG + p.img;
      return '<a class="proj" href="' + esc(p.h) + '"' + (p.links && p.links.length > 1 ? ' data-links="' + esc(JSON.stringify(p.links)) + '" data-title="' + esc(p.t) + '"' : '') + '><span class="proj__img"><img src="' + esc(im) + '" alt="" loading="lazy"></span><span class="proj__n">' + esc(p.t) + '</span></a>';
    }).join('');
  }
  function projsFromShop(w) {
    getDoc(CONFIG.projsHref).then(function (d) {
      var it = $$('.news-item', d).map(function (n) {
        var a = n.querySelector('a.title') || n.querySelector('a'), de = n.querySelector('.description'), im = imgOf(n.querySelector('img'));
        var ls = de ? $$('a', de).map(function (x) { return [txt(x), x.getAttribute('href')]; }).filter(function (x) { return x[0] && x[1]; }) : [];
        if (!a || !im) return null;
        return { t: txt(a), h: ls.length ? ls[0][1] : a.getAttribute('href'), img: im, links: ls };
      }).filter(Boolean);
      if (it.length < 3) return;
      var tr = w.querySelector('.w-projs'); if (tr) tr.innerHTML = W(projsHtml(it));
    }).catch(function () {});
  }
  function buildHome() {
    var cw = $('#content-wrapper'); if (!cw) return;
    var b = CONFIG.banner;
    var carHtml = $$('.banners-row .carousel-inner .item').map(function (it) {
      var im = it.querySelector('img'), a = it.querySelector('a'), src = imgOf(im); if (!src) return '';
      return '<a class="car__s car__n" href="' + esc(a ? path(a.getAttribute('href')) : '/') + '" aria-label="' + esc(im.getAttribute('alt') || 'Akce') + '"><span class="car__bg" style="background-image:url(&quot;' + esc(src) + '&quot;)"></span><img src="' + esc(src) + '" alt="' + esc(im.getAttribute('alt') || '') + '"></a>';
    }).join('');
    var html =
      '<section class="car"><div class="banner car__s is-on"><picture><source media="(max-width:760px)" srcset="' + b.imgM + '"><img class="banner__img" src="' + b.img + '" alt="' + esc(b.alt) + '" fetchpriority="high"></picture>' +
      '<div class="wrap banner__in"><div class="banner__box"><h1 class="h1">' + b.h1 + '</h1><p>' + b.p + '</p>' +
      '<a class="motm-mini" href="' + b.motm.h + '"><img src="' + b.motm.img + '" alt=""><span><small>' + b.motm.small + '</small><b>' + b.motm.b + '</b></span></a>' +
      '<div class="banner__cta">' + b.cta.map(function (c) { return '<a class="btn ' + (c.line ? 'btn--line' : 'btn--cart') + '" href="' + c.h + '">' + c.t + '</a>'; }).join('') + '</div></div></div></div>' + carHtml + '<div class="car__ctl"></div></section>' +
      '<div class="usp"><div class="wrap usp__in">' + CONFIG.usp.map(function (u) { return '<span>' + svg('ico--sm', P[u[0]]) + ' ' + u[1] + '</span>'; }).join('') + '</div></div>' +
      sec('Oblíbené kategorie', '<div class="tiles tiles--orig">' + CONFIG.tiles.map(function (t) {
        return '<a class="tile' + (t.c ? ' ' + t.c : '') + '" href="' + t.h + '"><img src="' + IMG + t.img + '" alt="" loading="lazy"><span class="tile__box"><b>' + t.t + '</b><span class="tile__more"><span>' + t.s + '</span></span></span></a>';
      }).join('') + '</div>') +
      sec('Akce', '<div class="whx-slot" data-slot="akce"></div>', ['Celá akce', '/akcni-zbozi/']) +
      '<section class="sec"><div class="wrap"><a class="themeband" href="' + CONFIG.theme.h + '"><img src="' + CONFIG.theme.img + '" alt="' + esc(CONFIG.theme.alt) + '" loading="lazy"><span class="themeband__in"><small>' + CONFIG.theme.small + '</small><b>' + CONFIG.theme.b + '</b><span class="btn btn--cart">' + CONFIG.theme.btn + '</span></span></a></div></section>' +
      sec('Novinky', '<div class="whx-slot" data-slot="nov"></div>', ['Všechny novinky', '/novinky-2/']) +
      sec('Vyberte podle projektu', '<div class="projs">' + projsHtml(CONFIG.projs) + '</div>') +
      '<div class="whx-slot" data-slot="rvs"></div><div class="whx-slot" data-slot="blog"></div><div class="whx-slot" data-slot="ig"></div>' +
      '<section class="news"><div class="wrap news__in"><h2 class="h2">Newsletter</h2><p>' + esc(CONFIG.newsText) + '</p><div class="news__slot"></div></div></section>';
    var w = box(html, 'main'); w.id = 'whHome';
    after(cw, w);
    var slot = function (n) { return w.querySelector('[data-slot="' + n + '"]'); };
    var pr = w.querySelector('.w-projs'); if (pr) { var ph = D.createElement('span'); pr.replaceWith(ph); ph.replaceWith(rail(pr, { c: 'w-rail--projs' })); }
    initCarousel(w); initProjs(w); initMonth(w); projsFromShop(w);
    /* newsletter – nativní formulář i s captchou */
    var nf = $('#formNewsletterWidget');
    if (nf) { tuneNews(nf); nf.classList.add('w-news__native'); w.querySelector('.w-news__slot').replaceWith(nf); } else w.querySelector('.w-news__slot').replaceWith(newsSimple());
    /* akce + novinky */
    var fallback = $$('#content .product').slice(0, 4).map(function (x) { return x.outerHTML; }).join('');
    [['akce', '/akcni-zbozi/'], ['nov', '/novinky-2/']].forEach(function (s) {
      (s[0] === 'akce' ? akceGrid(CONFIG.akceCount) : gridFrom(s[1], 10)).then(function (g) { slot(s[0]).replaceWith(rail(g, { c: 'w-rail--prod' })); }).catch(function () {
        var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = fallback; cards(g); slot(s[0]).replaceWith(rail(g, { c: 'w-rail--prod' }));
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
      var vs = $$('.vote-wrap', doc).filter(function (v) { return txt(v.querySelector('.vote-content')).length > 20; }).map(function (v) {
        var st = v.querySelectorAll('.star-on').length || 5;
        return '<figure class="rv">' + stars(st) + '<blockquote>' + rich(v.querySelector('.vote-content')) + '</blockquote><figcaption><b>' + esc(txt(v.querySelector('.vote-name span') || v.querySelector('.vote-name'))) + '</b><span>' + esc(txt(v.querySelector('.vote-time'))) + '</span></figcaption></figure>';
      });
      /* komentáře k produktům: poslední hodnocení a diskuze z úvodní stránky Shoptetu */
      var pcm = $$('.latest-contribution-inner').map(function (a) {
        var im = a.querySelector('.latest-contribution-image img'), src = im ? (im.getAttribute('data-src') || im.getAttribute('src') || '') : '';
        var de = a.querySelector('.latest-contribution-description'), dt = '';
        if (de) { dt = rich(de); }
        var au = txt(a.querySelector('.latest-contribution-author')), da = txt(a.querySelector('.latest-contribution-date'));
        return { h: a.getAttribute('href'), n: txt(a.querySelector('.latest-contribution-product')), i: /^data:/.test(src) ? '' : src, st: a.querySelectorAll('.star-on').length || 5, d: dt, a: au, t: da };
      }).filter(function (x) { return x.n; }).sort(function (a, b) { return (b.d ? 1 : 0) - (a.d ? 1 : 0); }).map(function (x) {
        return '<figure class="rv rv--prod"><a class="rv__p" href="' + esc(x.h) + '">' + (x.i ? '<img src="' + esc(x.i) + '" alt="" loading="lazy">' : '') + '<span>' + esc(x.n) + '</span></a>' + stars(x.st) + (x.d ? '<blockquote>' + x.d + '</blockquote>' : '') + '<figcaption><b>' + esc(x.a) + '</b><span>' + esc(x.t) + '</span></figcaption></figure>';
      });
      if (!vs.length) { slot('rvs').remove(); return; }
      var RV = 10, part = function (l) { return '<div class="rvs__grid rvs__grid--rail">' + l.slice(0, RV).join('') + '</div>'; };
      var node = box(sec('Recenze zákazníků', '<div class="rvs">' +
        '<a class="rvs__sum" href="/hodnoceni-obchodu/" title="Zobrazit všechna hodnocení obchodu"><span class="rvs__score">' + esc(avg || '5,0') + '</span>' + stars(parseFloat((avg || '5').replace(',', '.')), 1) +
        '<span class="rvs__cnt">' + esc(cnt) + ' hodnocení obchodu</span><ul class="rvs__dist">' + dist + '</ul><span class="rvs__go">Zobrazit všechna ' + svg('ico--sm', P.right) + '</span></a>' +
        '<div class="rvs__main" data-tabs>' + (pcm.length ? '<div class="rvs__tabs" role="tablist"><button class="is-on" type="button" data-tab="0">Hodnocení obchodu</button><button type="button" data-tab="1">Komentáře k produktům</button></div>' : '') +
        '<div class="tabs__panel is-on">' + part(vs) + '</div>' + (pcm.length ? '<div class="tabs__panel">' + part(pcm) + '</div>' : '') + '</div></div>'));
      $$('.w-rvs__grid--rail', node).forEach(function (g) { var ph = D.createElement('span'); g.replaceWith(ph); ph.replaceWith(rail(g, { c: 'w-rail--rv' })); });
      slot('rvs').replaceWith(node);
      $$('.w-rvs__tabs [data-tab]', node).forEach(function (b) { b.addEventListener('click', function () {
        var m = b.closest('.w-rvs__main'), i = +b.getAttribute('data-tab');
        $$('[data-tab]', m).forEach(function (x) { x.classList.toggle('w-is-on', x === b); });
        $$('.w-tabs__panel', m).forEach(function (p, k) { p.classList.toggle('w-is-on', k === i); });
        setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 30);
      }); });
    }).catch(function () { slot('rvs').remove(); });
    /* instagram: souvislý pás, sám jede dokola (zastaví se pod myší / prstem), šipky listují oběma směry */
    var ig = $$('.instagram-widget a').map(function (a) { var i = a.querySelector('img'); return { h: a.getAttribute('href'), i: i ? (i.getAttribute('data-thumbnail-medium') || imgOf(i)) : '' }; }).filter(function (x) { return x.i; });
    if (ig.length) {
      var one = ig.map(function (x) { return '<a class="film__i" href="' + esc(x.h) + '" target="_blank" rel="noopener"><img src="' + esc(x.i) + '" alt="Příspěvek @pletanky" loading="lazy"></a>'; }).join('');
      var copies = Math.max(3, Math.ceil(3200 / (ig.length * 160)) + 1), it = '';
      for (var c = 0; c < copies; c++) it += one;
      slot('ig').replaceWith(box('<section class="sec sec--film"><div class="wrap"><div class="sh"><h2 class="h2">Instagram <a href="' + CONFIG.instagram + '" target="_blank" rel="noopener">@pletanky</a></h2></div></div><div class="film"><div class="film__track">' + it + '</div></div></section>'));
      var ft = $('.w-film__track');
      if (ft) {
        var pos = 0, hold = false, tw = null, last = 0, n1 = ig.length;
        var per = function () { var a0 = ft.children[0], an = ft.children[n1]; return (a0 && an) ? an.offsetLeft - a0.offsetLeft : 0; };
        var wrapPos = function () { var P1 = per(); if (P1 > 0) { while (pos >= P1 * 2) pos -= P1; while (pos < P1) pos += P1; } };
        var setPos = function () { wrapPos(); ft.scrollLeft = Math.round(pos); };
        var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
        var step = function (t) {
          var dt = last ? Math.min(64, t - last) : 0; last = t;
          if (!hold && !tw && !reduce && !D.hidden) { pos += dt * 0.035; setPos(); }
          requestAnimationFrame(step);
        };
        var goIg = function (d) {
          var from = pos, to = pos + d * Math.max(160, ft.clientWidth * 0.6), t0 = 0;
          if (tw) cancelAnimationFrame(tw);
          var f = function (t) { if (!t0) t0 = t; var k = Math.min(1, (t - t0) / 520), e = 1 - Math.pow(1 - k, 3); pos = from + (to - from) * e; setPos(); tw = k < 1 ? requestAnimationFrame(f) : null; };
          tw = requestAnimationFrame(f);
        };
        var fp = D.createElement('span'); ft.replaceWith(fp); fp.replaceWith(rail(ft, { c: 'w-rail--ig', loop: 1, go: goIg }));
        var film = ft.closest('.w-film') || ft.parentNode;
        on(film, 'mouseenter', function () { hold = true; }); on(film, 'mouseleave', function () { hold = false; });
        on(ft, 'touchstart', function () { hold = true; }); on(ft, 'touchend', function () { setTimeout(function () { hold = false; }, 2500); });
        on(ft, 'focusin', function () { hold = true; }); on(ft, 'focusout', function () { hold = false; });
        /* ruční posun (prst, trackpad) převezme pozici */
        on(ft, 'scroll', function () { if (!tw && Math.abs(ft.scrollLeft - Math.round(pos)) > 2) { pos = ft.scrollLeft; var P1 = per(); if (P1 > 0 && (pos < P1 * 0.5 || pos > P1 * 2.2)) setPos(); } });
        var start = function () { pos = per(); setPos(); requestAnimationFrame(step); };
        if (D.readyState === 'complete') setTimeout(start, 50); else window.addEventListener('load', function () { setTimeout(start, 50); });
        window.addEventListener('resize', setPos);
      }
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
      lead = ps.length ? (function (p) { var c = p.cloneNode(true); $$('br', c).forEach(function (b) { b.replaceWith(' '); }); return txt(c); })(ps[0]) : d.lead;
      lead = lead.split(/(?<=[.!?])\s+/).reduce(function (acc, s) { return acc.length < 160 ? (acc ? acc + ' ' : '') + s : acc; }, '');
      var im = per.querySelector('img'); if (im) pimg = imgOf(im);
    }
    if (!pimg) { var fi = $('#products .product img'); pimg = imgOf(fi); }
    var cr = crumbs();
    var hero = box('<section class="chero chero--slim"><div class="wrap">' + cr.html + '</div></section>');
    hero.id = 'whCat';
    before(cw, hero);
    /* podkategorie jako dlaždice „postaru“ (nativní, s obrázkem; bez obrázku jen text) */
    $$('ul.subcategories li').forEach(function (li) {
      var im = li.querySelector('img'); var src = im ? (im.getAttribute('data-src') || im.getAttribute('src') || '') : '';
      if (!im || /folder\.svg/.test(src)) li.classList.add('w-noimg');
      else if (im.getAttribute('data-src')) im.setAttribute('src', im.getAttribute('data-src'));
    });
    /* název kategorie jako hlavička bočního menu nad filtry (na mobilu / bez filtrů nad výpisem) */
    var sbx = $('#content-wrapper .sidebar-inner') || $('#content-wrapper .sidebar');
    if (h1) {
      if (sbx) { var sh = box('<h1 class="h1 h1--side">' + esc(h1) + '</h1>'); sbx.insertBefore(sh, sbx.firstChild); }
      if (top) { var mt = box('<p class="h1--mob" role="presentation">' + esc(h1) + '</p>'); top.insertBefore(mt, top.firstChild); }
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
    var sdLines = sdEl ? htmlLines(sdEl) : [];
    /* tabulka vložená přímo do popisku v administraci se zobrazí tak, jak je (jen v našem stylu) */
    var ownTable = !!(sdEl && sdEl.querySelector('table'));
    var yarn = cr.items.some(function (x) { return /příz/i.test(x.t); });
    var pl = parseLines(sdLines);
    var fdEl = $('.shp-tabs-wrapper .basic-description') || $('#description');
    if (fdEl && yarn && !ownTable) {
      var p2 = parseLines(htmlLines(fdEl));
      ['v', 'g', 's', 'wn', 'w', 'n', 'j', 'h', 'jh'].forEach(function (k) { if (!pl.v[k] && p2.v[k]) pl.v[k] = p2.v[k]; });
    }
    var tabHtml = (yarn && !ownTable) ? ptab(pl.v) : '';
    if (info && h1) {
      var head = box('<p class="pd__brand">' + (brand ? (brandA ? '<a href="' + esc(brandA.getAttribute('href')) + '">' + esc(brand) + '</a>' : esc(brand)) : '') + (brand && code ? ' · ' : '') + (code ? 'Kód ' + esc(code) : '') + '</p>');
      info.insertBefore(head, info.firstChild);
      var h1c = D.createElement('div'); h1c.className = 'whx'; info.insertBefore(h1c, head.nextSibling); h1c.appendChild(h1); h1.classList.add('w-h1', 'w-h1--pd');
      var stw = $('.p-detail-info .stars-wrapper'); if (stw) after(h1c, stw);
      var atc = $('.add-to-cart', info);
      var pw = $('.p-final-price-wrapper', info), av = $('.availability-value', info);
      /* pořadí: krátký popis (jak je v administraci) → tabulka parametrů na místě řádků s parametry → zbytek popisku → varianty → sklad → cena + košík → doprava → Napište nám */
      var anchor = stw || h1c;
      var put = function (n) { after(anchor, n); anchor = n; };
      if (ownTable) { sdEl.classList.add('w-sd-own'); put(sdEl); }
      else if (sdEl) {
        var preL = tabHtml ? pl.pre : sdLines, postL = tabHtml ? pl.post : [];
        if (preL.length) put(box('<div class="pd__desc">' + linesHtml(preL) + '</div>'));
        if (tabHtml) {
          var tb = box(tabHtml); put(tb); var dl = tb.querySelector('.w-ptab');
          fitTab(dl); setTimeout(function () { fitTab(dl); }, 400);
          if (D.fonts && D.fonts.ready) D.fonts.ready.then(function () { fitTab(dl); });
          var rt = null; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { fitTab(dl); }, 150); });
        }
        if (postL.length) put(box('<div class="pd__desc pd__desc--after">' + linesHtml(postL) + '</div>'));
        sdEl.classList.add('w-sd-hidden');
      }
      var swSlot = box('<div class="pd__swh" hidden></div>'); put(swSlot); info.__whSw = swSlot;
      if (av) put(av);
      if (pw) {
        var buy = D.createElement('div'); buy.className = 'w-buy' + (atc ? '' : ' w-buy--na'); put(buy); buy.appendChild(pw); if (atc) buy.appendChild(atc);
        if (!atc) { var so = $('.sold-out, .p-cat-sold-out', info); if (so) { if (av && txt(av)) so.style.display = 'none'; else if (!buy.contains(so)) buy.appendChild(so); } }
      }
      put(box('<ul class="pd__usp">' + CONFIG.usps.map(function (u) { return '<li>' + svg('ico--sm', P[u[0]]) + ' ' + u[1] + '</li>'; }).join('') + '</ul>'));
      var soc = $('.social-buttons-wrapper', info); if (soc) { soc.classList.add('w-soc'); put(soc); }
    }
    $$('.add-to-cart-button', det).forEach(function (btn) {
      var v = !!btn.closest('.variant-table');
      btn.classList.add('w-btn', 'w-btn--cart', v ? 'w-btn--var' : 'w-btn--buy'); btn.innerHTML = W(svg('ico--sm', P.bag)) + '<span>Do košíku</span>';
    });
    if ($('.variant-table', det)) det.classList.add('w-has-vars');
    var hdTop = $('.p-detail-inner-header'); if (hdTop && !hdTop.querySelector('h1')) hdTop.classList.add('w-empty');
    /* galerie: původní (neoříznutá) fotka, výrazná lupa, šipky mezi fotkami */
    run('gallery', function () {
      var box0 = $('.p-image'); if (!box0) return;
      var MG = 'M9 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM21 21l-6-6M9 6v6M6 9h6';
      var zb = D.createElement('button'); zb.type = 'button'; zb.className = 'w-gal__zoom'; zb.setAttribute('aria-label', 'Zvětšit fotku');
      zb.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + MG + '"></path></svg>';
      zb.addEventListener('click', function (e) { e.preventDefault(); var a = $('.p-main-image', box0); if (a) a.click(); });
      box0.appendChild(zb);
      var thumbs = $$('.p-thumbnails-inner a.p-thumbnail');
      if (thumbs.length > 1) {
        var mk = function (dir) {
          var b = D.createElement('button'); b.type = 'button'; b.className = 'w-gal__nav w-gal__nav--' + (dir < 0 ? 'prev' : 'next');
          b.setAttribute('aria-label', dir < 0 ? 'Předchozí fotka' : 'Další fotka');
          b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (dir < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7') + '"></path></svg>';
          b.addEventListener('click', function (e) {
            e.preventDefault();
            var cur = 0; thumbs.forEach(function (t, i) { if (t.classList.contains('highlighted')) cur = i; });
            thumbs[(cur + dir + thumbs.length) % thumbs.length].click();
          });
          box0.appendChild(b);
        };
        mk(-1); mk(1);
      }
      /* Shoptet dává do rámečku fotku s bílými okraji (4:3); použijeme původní soubor, ať rámeček sedí kolem fotky */
      var busy = false;
      function sharp() {
        var a = $('.p-main-image', box0), im = a && a.querySelector('img'); if (!im || busy) return;
        var o = a.getAttribute('data-href'); if (!o || im.getAttribute('data-wh-orig') === o) return;
        busy = true;
        var t = new Image();
        t.onload = function () {
          busy = false;
          if (t.naturalWidth < 300) return;
          im.setAttribute('data-wh-orig', o); im.removeAttribute('srcset'); im.removeAttribute('width'); im.removeAttribute('height'); im.src = o;
          im.style.aspectRatio = t.naturalWidth + ' / ' + t.naturalHeight;
        };
        t.onerror = function () { busy = false; im.setAttribute('data-wh-orig', o); };
        t.src = o;
      }
      sharp();
      if (window.MutationObserver) new MutationObserver(function () { sharp(); }).observe(box0, { subtree: true, attributes: true, attributeFilter: ['src', 'data-href'] });
    });
    /* související produkty */
    var rel = $('.products-related');
    var relH = $('.products-related-header');
    var rh = null;
    if (relH) {
      relH.classList.add('w-relh');
      rh = box('<div class="sh sh--rel"><h2 class="h2">' + esc(txt(relH) || 'Související produkty') + '</h2></div>');
      relH.parentNode.insertBefore(rh, relH); relH.style.display = 'none';
      /* šipky do řádku nadpisu (nad dlaždicemi, nikdy je nepřekryje hover karta) */
      var bp = $('.browse-p');
      var rhi = rh.querySelector('.w-sh') || rh;
      if (bp) { $$('.p-prev,.p-next', bp).forEach(function (a) { rhi.appendChild(a); }); }
      (function () {
        var grid = $('.products-related', rh.parentNode) || $('.products-related'); if (!grid) return;
        (function () {
          var its = $$('.product', grid); if (its.length < 2) return;
          var g2 = D.createElement('div'); g2.className = 'w-pgrid products';
          its.forEach(function (it) { it.style.display = ''; it.classList.remove('col-sm-6', 'col-md-12', 'col-lg-6'); g2.appendChild(it); });
          cards(g2);
          var ph2 = D.createElement('span'); grid.parentNode.insertBefore(ph2, grid); grid.style.display = 'none';
          var wx = D.createElement('div'); wx.className = 'whx'; wx.appendChild(rail(g2, { c: 'w-rail--prod' })); ph2.replaceWith(wx);
          var bp2 = $('.browse-p'); if (bp2) bp2.style.display = 'none';
          $$('.p-prev,.p-next', rhi).forEach(function (x) { x.remove(); });
        })();
        return;
        var items = $$('.product', grid), off = 0, vis = 0;
        items.forEach(function (it) { if (getComputedStyle(it).display !== 'none') vis++; });
        if (!vis || items.length <= vis) return;
        function upd() {
          items.forEach(function (it, i) { it.style.display = (i >= off && i < off + vis) ? '' : 'none'; });
          var pv = $('.p-prev', rhi), nx = $('.p-next', rhi);
          if (pv) pv.classList.toggle('inactive', off === 0);
          if (nx) nx.classList.toggle('inactive', off + vis >= items.length);
        }
        ['.p-prev', '.p-next'].forEach(function (sel, k) {
          var a = $(sel, rhi); if (!a) return;
          a.addEventListener('click', function (e) {
            e.preventDefault(); e.stopImmediatePropagation();
            off = Math.max(0, Math.min(items.length - vis, off + (k ? 1 : -1))); upd();
          }, true);
        });
        upd();
      })();
    }
    /* záložky (popis, parametry, hodnocení) před související produkty jako v návrhu */
    var tabs = $('.shp-tabs-wrapper');
    if (tabs && relH && tabs.parentNode === relH.parentNode && (relH.compareDocumentPosition(tabs) & 4)) {
      relH.parentNode.insertBefore(tabs, rh || relH);
    }
    /* další odstíny z kategorie */
    var cat = cr.items.length > 1 ? cr.items[cr.items.length - 2] : null;
    if (cat && cat.h && cat.h !== '/' && info) run('swatches', function () { swatches(cat.h, info, h1); });
    if (cat && cat.h && cat.h !== '/') {
      var isYarn = /^příze/i.test(txt(h1)) || cr.items.some(function (c) { return /^příze/i.test(c.t || c.n || ''); }) || (info && !!info.__whSw && /Odstín/.test(txt(info.__whSw)));
      var holder = box('<section class="sec sec--tight pdmore"><div class="sh"><h2 class="h2">' + (isYarn ? 'Další odstíny' : 'Další z kategorie') + '</h2></div><div class="slot"></div><p class="sec__more"><a class="btn btn--line" href="' + esc(cat.h) + '">Celá kategorie</a></p></section>');
      var anchor = tabs || rel || det;
      after(anchor, holder);
      var me = location.pathname;
      getDoc(cat.h).then(function (doc) {
        var ps = $$('#products .product', doc).filter(function (x) { var a = x.querySelector('a.name, a.image'); return a && a.getAttribute('href') !== me; });
        var avail = ps.filter(function (x) { return /skladem/i.test(txt(x.querySelector('.availability'))); });
        ps = (avail.length >= 8 ? avail : ps).slice(0, 12);
        if (!ps.length) { holder.remove(); return; }
        var g = D.createElement('div'); g.className = 'w-pgrid products'; g.innerHTML = ps.map(function (x) { return x.outerHTML; }).join(''); cards(g);
        var sl = holder.querySelector('.w-slot') || holder.querySelector('.w-pgrid'); var ph = D.createElement('span'); (sl || holder).appendChild(ph); if (sl) { sl.replaceWith(ph); } ph.replaceWith(rail(g, { c: 'w-rail--prod' }));
      }).catch(function () { holder.remove(); });
    }
  }

  /* odstíny: sourozenci z nadřazené kategorie se společným začátkem názvu (např. „Příze DROPS Brushed Alpaca Silk …“) */
  function swatches(catUrl, info, h1) {
    var me = location.pathname;
    var slot = info.__whSw; if (!slot) return;
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
      var yarn = /^příze/i.test(myName);
      inner.innerHTML = W('<p>' + (yarn ? 'Odstín' : 'Varianta') + ': <b>' + esc(shade(myName)) + '</b>' + (rest > 0 ? ' <span>· ' + (yarn ? (rest === 1 ? 'další 1 odstín' : rest < 5 ? 'další ' + rest + ' odstíny' : 'dalších ' + rest + ' odstínů') : (rest === 1 ? 'další 1 varianta' : rest < 5 ? 'další ' + rest + ' varianty' : 'dalších ' + rest + ' variant')) + '</span>' : '') + '</p>' +
        '<div class="pswatches">' + list.map(function (x) {
          return '<a class="pswatch' + (x.on ? ' is-on' : '') + '" href="' + esc(x.h) + '" title="' + esc(shade(x.n)) + '"' + (x.on ? ' aria-current="true"' : '') + '><img src="' + esc(x.i) + '" alt="' + esc(shade(x.n)) + '" loading="lazy"></a>';
        }).join('') + (rest > list.length - 1 ? '<a class="pswatch pswatch--more" href="' + esc(catUrl) + '" title="Všechny varianty">+' + (rest - list.length + 1) + '</a>' : '') + '</div>');
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
    /* newsletter na podstránkách: sidebar je skrytý, formulář přesuneme nad patičku */
    var nf = $('#formNewsletterWidget');
    if (!nf) nf = newsSimple();
    if (nf && !isType('index') && !$('#whHome')) {
      var n = box('<section class="w-news"><div class="wrap w-news__in"><h2 class="w-h2">Newsletter</h2><p>' + esc(CONFIG.newsText) + '</p><div class="w-news__slot"></div></div></section>', 'div');
      n.id = 'whNews';
      if (nf.id) { tuneNews(nf); nf.classList.add('w-news__native'); }
      n.querySelector('.w-news__slot').replaceWith(nf);
      before(w, n);
    }
  }

  /* mobilní šablona Shoptetu newsletter nevykreslí: vlastní jednoduchý formulář na stejnou adresu */
  function newsSimple() {
    var f = box('<form class="news-simple" action="/action/MailForm/subscribeToNewsletters/" method="post"><input type="hidden" name="formId" value="2"><input type="email" name="email" required autocomplete="email" placeholder="Váš e-mail" aria-label="E-mail"><button type="submit" class="btn btn--cart">Ano, chci novinky</button></form>', 'div');
    return f;
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
