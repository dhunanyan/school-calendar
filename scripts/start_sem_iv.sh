#!/bin/bash

SEM=DATA_SEM_IV
CALENDAR=CALENDAR_SEMESTR_IV

SEM=$SEM yarn wdio >> calendar.data.csv
CALENDAR=$CALENDAR sh ./scripts/start.sh