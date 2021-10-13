function delete_events()
{
    var startYear = 2021;
    var endYear = 2022;
    var startMonth = 10;  // 1 - Jan, 2 - Feb ....
    var endMonth = 2;

    // Start with FALSE; read log to make sure everything is correct; 
    // Only then switch to TRUE; 
    // All elemnts listed in log wil then be deleted PERMANENLTY;
    var DELETE_THEM = false;

    var calendarName = '**********@gmail.com';
    var titles = [
      'Theory of Robotics and Mechatronics',
      'Robot Dynamics (V)',
      'Robot Dynamics (U)'
    ];


    // setup and code
    // delete from/to (for month 0 = Jan, 1 = Feb...)
    var fromDate = new Date(startYear,0,startMonth - 1,0,0,0); 
    var toDate = new Date(endYear,0,endMonth - 1,0,0,0);

    var calendar = CalendarApp.getCalendarsByName(calendarName)[0];

    for(var count=0; count<titles.length;count++){
      var title = titles[count];

      var events = calendar.getEvents(fromDate, toDate, {search: title});
      for(var i=0; i<events.length;i++){
        var ev = events[i];
        // show event name in log
        Logger.log(ev.getTitle());
        if (DELETE_THEM) ev.deleteEvent();
      }
    }
 }