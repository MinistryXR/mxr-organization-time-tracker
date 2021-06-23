# Ministry XR Organization Time Tracker Add-on for Google Sheets
This is a Google Apps Script project for an add-on that pulls events from a Google Calendar and visualizes them on the spreadsheet.

This is heavily adapted from the [Calendar Timesheet](https://github.com/googleworkspace/solutions/tree/master/calendar-timesheet) project from Google.

## Installation
To add this to a Google Sheet, from the Google Sheet, go to Tools > Script Editor, and add the following two files to the Apps Script workspace:
* Code.gs
* Settings.html

Save the Apps Script project, and refresh the Google Sheet. After a few seconds, a new menu item will appear called "MXR Organization Meeting Time Tracker".

## Usage
From the Google Sheet, go to MXR Organization Meeting Time Tracker > Settings.

From the Settings sidebar, enter the number of days prior to the current date from which to pull Ministry XR calendar events.

Relevant details about each event will start to populate the sheet.

## Current Features
* Menu item add-on to a Google Sheet.
* Settings UI to set number of days prior to pull calendar events from.
* Calendar pulled from is hard-coded to "Ministry XR".
