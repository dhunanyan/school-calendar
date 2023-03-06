#!/bin/bash

START_LINE=$(awk '/\[0-0\]  id/{ print NR; exit }' ./calendar.data.csv)
tail -n +$START_LINE calendar.data.csv > ./calendar.data.csv.t
mv ./calendar.data.csv{.t,}

END_LINE=$(awk '/\[0-0\] $/{ print NR; exit }' ./calendar.data.csv)
HEAD_LINE=$(echo $(($END_LINE-1)))
head -n +$HEAD_LINE calendar.data.csv > ./calendar.data.csv.t
mv ./calendar.data.csv{.t,}

while IFS='' read -r a; do
    echo "${a//\[0-0\] /}"
done < ./calendar.data.csv > ./calendar.data.csv.t
mv ./calendar.data.csv{.t,}

tail -c +2 calendar.data.csv > ./calendar.data.csv.t
mv ./calendar.data.csv{.t,}

CALENDAR=$CALENDAR python calendar/create_event.py

rm calendar.data.csv