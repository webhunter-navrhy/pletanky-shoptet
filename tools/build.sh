#!/bin/sh
# Sestaví wh.css = písmo Jost + převedený návrh + ruční vrstva.
# Shoptet má html{font-size:10px}, návrh počítá s 16px -> rem převádíme na px.
cd "$(dirname "$0")/.."
{ echo '@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap&subset=latin-ext");'; cat _navrh.css src/rucni.css; } \
 | python3 -c 'import re,sys; s=sys.stdin.read(); print(re.sub(r"(?<![\w.-])(\d*\.?\d+)rem\b", lambda m: ("%g"%(float(m.group(1))*16))+"px", s), end="")' > wh.css
node -e 'new Function(require("fs").readFileSync("wh.js","utf8"))' && echo "wh.js OK" || echo "wh.js CHYBA"
grep -c 'rem\b' wh.css | sed 's/^/zbylé rem: /'
wc -c wh.css wh.js | head -2
