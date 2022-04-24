#!/bin/bash -eux

HTMLFILES=$(find $PWD/.next/server/pages -type f -name "*.html")
DATE=$(date -u +"%FT%TZ")

for file in $HTMLFILES; do
  line=$(grep -n 'og:updated_time' $file)
  if [ ! -z "$line" ]; then
    perl -pi -e "s/time.+?(?=>)/time\" content=\"$DATE\"\//g;" ${file}  
  fi
done
