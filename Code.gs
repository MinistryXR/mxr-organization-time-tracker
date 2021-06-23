const onOpen = () => {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('MXR Organization Meeting Time')
      .addItem('Sync Settings', 'settings')
      //.addItem('Get Calendar', 'GetCalendar')
  .addToUi();
};

const settings = () => {
  const html = HtmlService.createHtmlOutputFromFile('Settings')
    .setTitle('Settings');

  SpreadsheetApp.getUi().showSidebar(html);
};

const getSettings = () => {
  const settings = {};

  const savedFrom = PropertiesService.getScriptProperties().getProperty('syncFrom');
  settings.syncFrom = savedFrom;
 
  //const savedTo = PropertiesService.getScriptProperties().getProperty('syncTo');
  //settings.syncTo = savedTo;
  
  return settings;
};

const saveSettings = (settings) => {
  PropertiesService.getScriptProperties().setProperty('syncFrom', settings.syncFrom);
  //PropertiesService.getScriptProperties().setProperty('syncTo', settings.syncTo);

  GetCalendar(settings);

  return 'Settings saved';
};

function GetCalendar(settings) {
  // get the primary calendar
  const calendar = CalendarApp.getCalendarsByName("Ministry XR")

  var now = new Date();
  var days_prior = settings.syncFrom;
  var start_range = new Date(now.getTime() - (days_prior * 24 * 60 * 60 * 1000)); 
  var end_range = new Date(now.getTime());
 
  //sheet.appendRow([start_range,end_range]);
  //var events = calendar[0].getEvents(ThirtyDaysBefore, now,
  //    {search: 'DDIY'});
  
  var events = calendar[0].getEvents(start_range, end_range);
  
  //Logger.log('Number of events: ' + events.length);

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(["Event Type", "Project", "Title", "Start Time","End Time","Creator", "Description","Guests","Location","Is Recurring"]);

  for(let i = 0; i < events.length; i++)
  {
    var meta_params = events[i].getTitle().split(":");

  sheet.appendRow([meta_params[0], meta_params[1], meta_params[2], events[i].getStartTime(), events[i].getEndTime(), events[i].getCreators()[i], events[i].getDescription(), events[i].getGuestList().map((guest) => guest.getEmail()).join(','), events[i].getLocation(), events[i].isRecurringEvent()]);
  }
}
