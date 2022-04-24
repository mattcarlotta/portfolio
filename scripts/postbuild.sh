#!/bin/bash -eux

DIR="$( cd "$( dirname "$0" )" && pwd )"
HTMLFILES=$(/usr/bin/find $DIR/../.next/server/pages -type f -name "*.html")
DATE=$(/bin/date -u +"%FT%TZ")

for file in $HTMLFILES; do
  line=$(/bin/grep -n 'og:updated_time' $file)
  if [ ! -z "$line" ]; then
    /usr/bin/perl -pi -e "s/time.+?(?=>)/time\" content=\"$DATE\"\//g;" ${file}  
  fi
done
