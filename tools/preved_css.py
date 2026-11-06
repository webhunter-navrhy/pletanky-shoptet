"""Převede style.css návrhu (pletanky-ukazka) na CSS pro Shoptet náhled:
- jen téma d (proměnné :root + [data-theme="d"] -> html.wh)
- všechny třídy dostanou prefix w- (kolize s Bootstrapem Shoptetu: .btn, .search, .banner, .h1 …)
- všechna pravidla jsou pod html.wh .whx (jen v našem vloženém markupu)
Použití: python3 preved_css.py <style.css> > _navrh.css"""
import re, sys
src = open(sys.argv[1]).read()
src = re.sub(r'/\*.*?\*/', '', src, flags=re.S)

def parse(s):
    out=[]; i=0; n=len(s)
    while i<n:
        j=s.find('{',i)
        if j<0: break
        sel=s[i:j].strip()
        depth=1; k=j+1
        while depth:
            if s[k]=='{': depth+=1
            elif s[k]=='}': depth-=1
            k+=1
        body=s[j+1:k-1]
        out.append((sel, parse(body) if sel.startswith('@media') or sel.startswith('@supports') else body.strip()))
        i=k
    return out

DROP = re.compile(r'\[data-theme="(a|b|c|e)"\]')
def pre(m): return '.w-'+m.group(1)
def conv_sel(sel):
    res=[]
    for s in sel.split(','):
        s=s.strip()
        if not s: continue
        if DROP.search(s) and not s.startswith(':root'): continue
        if s.startswith(':root'): s=':root'
        s=s.replace('[data-theme="d"]',':root')
        if re.match(r'^(html|body)\b', s): continue      # vlastní pravidla v ruční části
        s=s.replace('.is-preview','.never-preview')
        s=re.sub(r'\.(-?[a-zA-Z_][\w-]*)', pre, s)
        if s==':root': res.append('html.wh'); continue
        if s.startswith(':root '): s=s[6:]
        if s.startswith(':root'): res.append(s); continue
        # obecná pravidla (prvky, *) s nulovou specifičností scope – nativní třídy Shoptetu vyhrají
        res.append('html.wh .whx '+s if s.startswith('.w-') else ':where(html.wh .whx) '+s)
    return ','.join(dict.fromkeys(res))

def emit(rules, ind=''):
    o=[]
    for sel,body in rules:
        if sel.startswith('@keyframes'):
            o.append(sel+'{'+(body if isinstance(body,str) else '')+'}'); continue
        if isinstance(body,list):
            inner=emit(body)
            if inner.strip(): o.append(sel+'{'+inner+'}')
            continue
        if sel.startswith('@'): o.append(sel+'{'+body+'}'); continue
        ns=conv_sel(sel)
        if ns and body: o.append(ns+'{'+body+'}')
    return '\n'.join(o)

# keyframes: tělo obsahuje vnořené {} – parse je bere jako str, vrátíme raw
rules=parse(src)
fixed=[]
for sel,body in rules:
    if sel.startswith('@keyframes'):
        m=re.search(re.escape(sel)+r'\s*\{(.*?\})\s*\}', src, re.S); fixed.append((sel, m.group(1) if m else ''))
    else: fixed.append((sel,body))
print('/* === převzato z návrhu pletanky-ukazka v9, téma d (tools/preved_css.py) === */')
print(emit(fixed))
