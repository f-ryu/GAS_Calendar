function notifyTaskSlack() {
  var taskList = "";
  taskList = taskListup("$$$$$.com");

  if(taskList != "") {
    var payload = {
      "text" : "今日も一日お疲れ様！\n明日の予定を教えるね！\n\n▼明日の予定\n\n" + taskList + "\n明日も頑張ろうね！"
    }
    postSlack(payload);
  }
}

function taskListup(cal_id) {
  var list = "";
  var cal = CalendarApp.getCalendarById(cal_id);
  var tomorrow = new Date();
  tomorrow.setDate( tomorrow.getDate() + 1 ) //明日の日付の取得
  var events = cal.getEventsForDay(tomorrow);
  var prefix = "・" //タスクの前につく接頭辞

  for(var i = 0; i < events.length; i++) {
    var task = "";
    task = prefix + events[i].getTitle();
    list += task + "\n";
  }

  return list;
}

function postSlack(payload) {
  var options = {
    "method" : "POST",
    "payload" : JSON.stringify(payload)
  }

  var url = "&&&&&&&&&&&"; //webhook URL
  var response = UrlFetchApp.fetch(url, options);
  var content = response.getContentText("UTF-8");
}