#!/usr/bin/env bash
set -euo pipefail

site=/mnt/hdd/portfolio
archive=${1:?Pass the verified release archive}
test "$(readlink -f "$site")" = "$site"
test -f "$site/index.html"
test -f "$archive"
release=$(date -u +%Y%m%dT%H%M%SZ)
stage=/mnt/hdd/portfolio-releases/$release
backup=/mnt/hdd/portfolio-backups/$release.tar.gz
mkdir -p "$stage" /mnt/hdd/portfolio-backups
tar -xzf "$archive" -C "$stage"
test -f "$stage/index.html"
test -d "$stage/assets"
test -s "$stage/Malek_Ferjani_resume.pdf"
tar -czf "$backup" -C "$site" .
echo "Backup: $backup"
trap 'tar -xzf "$backup" -C "$site"; echo "Deployment check failed; restored $backup" >&2' ERR

# Keep existing assets for open browser sessions. Publish the HTML last.
cp -a "$stage/assets/." "$site/assets/"
cp "$stage/Malek_Ferjani_resume.pdf" "$site/.cv-next.pdf"
chmod 644 "$site/.cv-next.pdf"
mv "$site/.cv-next.pdf" "$site/Malek_Ferjani_resume.pdf"
cp "$stage/index.html" "$site/.index-next.html"
chmod 644 "$site/.index-next.html"
mv "$site/.index-next.html" "$site/index.html"

curl --fail --silent --show-error -H 'Host: cloud.tail07adef.ts.net' http://127.0.0.1:30448/ > "$stage/served-index.html"
cmp "$stage/index.html" "$stage/served-index.html"
curl --fail --silent --show-error -H 'Host: cloud.tail07adef.ts.net' http://127.0.0.1:30448/Malek_Ferjani_resume.pdf > "$stage/served-cv.pdf"
cmp "$stage/Malek_Ferjani_resume.pdf" "$stage/served-cv.pdf"
echo "Verified deployed HTML and CV: $site"
sha256sum "$site/index.html" "$site/Malek_Ferjani_resume.pdf"
trap - ERR
