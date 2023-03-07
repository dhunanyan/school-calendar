#!/bin/bash

SEM=DATA_DZIEKANKA
CALENDAR=CALENDAR_DZIEKANKA

SEM=$SEM yarn wdio >> calendar.data.csv
CALENDAR=$CALENDAR sh ./scripts/start.sh