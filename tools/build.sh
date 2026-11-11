#!/bin/sh
# Sestaví wh.css = písmo Jost + převedený návrh + ruční vrstva.
# 12. 11. 2026 (klientka: písmo celkově maličko větší): všechna font-size 11–15px se při sestavení zvětší o 1px.
# Shoptet má html{font-size:10px}, návrh počítá s 16px -> rem převádíme na px.
cd "$(dirname "$0")/.."
{ echo '@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap&subset=latin-ext");'; cat _navrh.css src/rucni.css; } \
 | python3 -c 'import re,sys; s=sys.stdin.read(); s=re.sub(r"(?<![\w.-])(\d*\.?\d+)rem\b", lambda m: ("%g"%(float(m.group(1))*16))+"px", s); s=re.sub(r"font-size:(1[1-5])px", lambda m: "font-size:%dpx"%(int(m.group(1))+1), s); print(s, end="")' > wh.css
node -e 'new Function(require("fs").readFileSync("wh.js","utf8"))' && echo "wh.js OK" || echo "wh.js CHYBA"
grep -c 'rem\b' wh.css | sed 's/^/zbylé rem: /'
wc -c wh.css wh.js | head -2
