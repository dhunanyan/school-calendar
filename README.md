### SCHOOL CALENDAR CONVERTER

## To start the project

```bash
yarn install-pip-and-modules
yarn start:sem-ii #FOR SEM 2
yarn start:sem-iv #FOR SEM 4
```

The file will be generated in `SURPRISE` folder :)

## How to add data for other semesters?

Every subject and group has its own unique url which has unique id with a grourp number:

https://web.usos.agh.edu.pl/kontroler.php?_action=katalog2/przedmioty/pokazZajecia&zaj_cyk_id=94682&gr_nr=8

In order to add data for other semesters you need the id of current subject and max number of groups. In the case above it's:

```json
{
  "id": "94682",
  "max_gr_number": "8"
}
```

Once you have this for all subjects go to the `./driver/data.js` and insert a new Object to the `CURRENT_SEM_DATA` (for example `DATA_SEM_III`).

`DATA_SEM_III` should have this kind of pattern for the values above:

```js
const DATA_SEM_III = [
  //...,
  [94682, 1],
  [94682, 2],
  [94682, 3],
  [94682, 4],
  [94682, 5],
  [94682, 6],
  [94682, 7],
  [94682, 9],
  //...
];
```

Next you go to ./scripts/ and create a bash script `start_sem_iii.sh` which needs to look like exactly like below:

```bash
#!/bin/bash

SEM=DATA_SEM_III #this is the name of variables with ids and group numbers
CALENDAR=CALENDAR_SEMESTR_III #this is the output file name

SEM=$SEM yarn wdio >> calendar.data.csv
CALENDAR=$CALENDAR sh ./scripts/start.sh
```

Tha last step is to link the bash script to `./package.json` in the "scripts" section:

```json
 "scripts": {
  //...
    "start:sem-iii": "sh ./scripts/start_sem_iii.sh",
  //...
  }
```

Run `yarn start:sem-iii` and the .ics file will be generated into `SURPRISE` folder.

### TYLE W TEMACIE
