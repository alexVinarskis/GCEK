# Google Calendar event killer (GCEK)

## What and Why
Problem: some platforms (eg. ETHZ) do not offer option to sync calendars, but rather import static events in .ics format. In case of mistake or a change, editing this requires manually deleting ***every*** event. Google Calendar does not recognize statically imported events as recurring, thus you would have to remove the same event from every day and week it occurs.
Solution: Google Apps Script which searches host calendar for given ***titles*** within specified ***date range***, and offers possibility to erase them all at once.

## How to setup
1. Go to [Google Scripts](https://script.google.com/home/all)
2. Make sure you are logged in to the Google Account who's calendar you would like to edit
3. Select 'New Project in top left corner'. You should now see an editor:

![Google Apps Script dashboard](/images/screenshot1.png)

4. Replace  "function myFunction() {..." by the code in Code.gs file in this repo
5. Edit the following values: 
    * ***startYear*** - start date of calendar range to search and edit
    * ***endYear***
    * ***startMonth*** - months as integers (Jan is 1, Feb is 2...)
    * ***endMonth***
    * ***DELETE_THEM*** - set False as default. Setting True will delete all events listed in Log
    * ***calendarName*** - full gmail address of Google Account that host calendar of interest
    * ***titles*** - titles as written in full in Google Calendar. Add between " ". Supports multiple, comma separated.
    
    You should something similar:

![Google Apps Script code overview](/images/screenshot2.png)

6. You can now run pressing 'Run' button on the top row. You will be asked to grant permission of execution, select 'trust' and 'allow'. You will now get a list of all events that match the criteria at the bottom of the screen.
7. Re-run the script again with DELETE_THEM set to 'true' to delete all listed events.

## Credits
Inspiration from [Stackexchange](https://webapps.stackexchange.com/questions/19513/how-to-delete-all-events-on-many-dates-all-at-once-but-not-the-whole-calendar-in/47768#47768)

Implementation and guide by [alexVinarskis](https://github.com/alexVinarskis)