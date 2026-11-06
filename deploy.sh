#!/bin/sh
set -e
cd "$(dirname "$0")"
export PATH=/opt/homebrew/bin:$PATH
TOKEN="$(cat ~/.webhunter-gh-token)"
git add -A
git -c user.name="WebHunter" -c user.email="info@webhunter.cz" commit -q -m "${1:-Aktualizace vzhledu $(date +%F\ %H:%M)}" || echo "(nic nového)"
git push -q "https://x-access-token:${TOKEN}@github.com/webhunter-navrhy/pletanky-shoptet.git" HEAD:main
echo "pushnuto; Pages za ~1 min: https://webhunter-navrhy.github.io/pletanky-shoptet/wh.css"
