from icalendar import Calendar, Event, vCalAddress, vText
from datetime import datetime
from pathlib import Path
import os
import pytz
import csv

cal = Calendar()
cal.add('prodid', '-//My calendar product//example.com//')
cal.add('version', '2.0')

with open('calendar.data.csv',  encoding='utf-8') as csv_f:
    reader = csv.reader(csv_f, delimiter=';')
    count = 0

    for row in reader:
        if count == 0:
            count +=1
            continue

        id = row[0]
        title =  row[1]
        teacher = row[2]
        date = row[3]
        startTime = row[4]
        endTime = row[5]
        location = row[6]
        group = row[7]

        dateArray = date.split('-')
        startTimeArray = startTime.split(':')
        endTimeArray = endTime.split(':')
        event = Event()
        event.add('summary', title)
        event.add('name', teacher)
        event.add('description', f'{location}, {group}\n{teacher}')
        event.add('dtstart', datetime(int(dateArray[0]), 
                                      int(dateArray[1]), 
                                      int(dateArray[2]), 
                                      int(startTimeArray[0]), 
                                      int(startTimeArray[1]), 
                                      0, tzinfo=pytz.timezone('Europe/Warsaw')))
        
        event.add('dtend', datetime(int(dateArray[0]), 
                                    int(dateArray[1]), 
                                    int(dateArray[2]), 
                                    int(endTimeArray[0]), 
                                    int(endTimeArray[1]), 
                                    0, tzinfo=pytz.timezone('Europe/Warsaw')))
        
        organizer = vCalAddress(teacher)
        organizer.params['name'] = vText(teacher)
        organizer.params['role'] = vText(group)
        event['organizer'] = organizer
        event['location'] = vText(location)
        cal.add_component(event)
    directory = Path.cwd() / "SURPRISE"
    try:
        directory.mkdir(parents=True, exist_ok=False)
    except FileExistsError:
        print("Folder already exists")
    else:
        print("Folder was created")
    f = open(os.path.join(directory, 'semestr_iv.ics'), 'wb')
    f.write(cal.to_ical())
    f.close()
