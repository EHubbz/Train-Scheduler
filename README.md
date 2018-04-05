# Train-Scheduler

## Overview

Train-Scheduler is an application created to update and maintain incoming and outgoing train schedules in real time. The data is stored using Firebase, and the data is manipulated using Moment.js. 

## How It works

In this application, the user enters the data in the form intake fields, which is then sent to the database to be stored, and returned back to populate the table on the UI. 
Data fields include: Train Name,
                     Destination,
                     Initial Arrvical time (military time),
                     Frequency of trains (minutes);
  
The Next Arrival time is calculated using Moment.js, relative to the current time, and is populated in the table as well. 
Each train object is visable in the Firebase database. Data is updated each time the page is refreshed. 

## Application Designed Using:
  CSS, 
  JavaScript, 
  jQuery, 
  Firebase, 
  Bootstrap,
  Bootswatch;
