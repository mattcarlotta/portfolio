#!/bin/bash -eux

HTMLFILES=$(/usr/bin/find $PWD/.next/server/pages -type f -name "*.html")
DATE=$(/bin/date -u +"%FT%TZ")

for file in $HTMLFILES; do
  line=$(/bin/grep -n 'og:updated_time' $file)
  if [ ! -z "$line" ]; then
    /usr/bin/perl -pi -e "s/time.+?(?=>)/time\" content=\"$DATE\"\//g;" ${file}
    echo "$file built at $DATE"  
  fi
done
