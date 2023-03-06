#!/bin/bash

SEM=DATA_SEM_II
CALENDAR=CALENDAR_SEMESTR_II

SEM=$SEM yarn wdio >> calendar.data.csv
CALENDAR=$CALENDAR sh ./scripts/start.sh