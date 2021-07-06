// CF

var todaysContest = "<center>";
$.getJSON("https://kontests.net/api/v1/codeforces", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
    if(dateTime[j] == 'T')
    {
        check = true;
        continue;
    }
    if(check) time += dateTime[j];
    else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);
    
    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
        todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
        todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
        todaysContest += "<hr>";
    }
  }
});


// AtCoder
$.getJSON("https://kontests.net/api/v1/at_coder", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
    if(dateTime[j] == 'T')
    {
        check = true;
        continue;
    }
    if(check) time += dateTime[j];
    else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);


    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;
    

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
        todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
        todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
        todaysContest += "<hr>";
    }
  }
});

//CodeChef
$.getJSON("https://kontests.net/api/v1/code_chef", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
    if(dateTime[j] == 'T')
    {
        check = true;
        continue;
    }
    if(check) time += dateTime[j];
    else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);

    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
        todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
        todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
        todaysContest += "<hr>";
    }
  }
});


//LeetCode
$.getJSON("https://kontests.net/api/v1/leet_code", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
      if(dateTime[j] == 'T')
      {
        check = true;
        continue;
      }
      if(check) time += dateTime[j];
      else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);

    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;
    

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
        todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
        todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
        todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
        todaysContest += "<hr>";
    }

  }
});



//HackerRank
$.getJSON("https://kontests.net/api/v1/hacker_rank", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
      if(dateTime[j] == 'T')
      {
        check = true;
        continue;
      }
      if(check) time += dateTime[j];
      else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);


    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
      todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
      todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
      todaysContest += "<hr>";
    }

}
});

//HackerEarth
$.getJSON("https://kontests.net/api/v1/hacker_earth", function(data){
  var i;
  for (i = 0; i < data.length; i++) 
  {
    var dateTime = data[i]['start_time'];
    var date = "", time = "", check = false;
    for(var j=0; j<dateTime.length; j++)
    {
      if(dateTime[j] == 'T')
      {
        check = true;
        continue;
      }
      if(check) time += dateTime[j];
      else date += dateTime[j];
    }
    intTime = parseInt(time);
    if(intTime <= 18) intTime += 6;
    else intTime = (intTime+6)%24;
    strTime = intTime.toString();

    var arr = time.split("");
    arr.splice(0, 1, strTime[0]);
    time = arr.join("");

    var brr = time.split("");
    brr.splice(1, 1, strTime[1]);
    time = brr.join("");

    // slicing time
    var timeLimit = time.length - 5
    time = time.substr(0,timeLimit);

    // contest status
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if(day.toString().length == 1) day = "0" + day;
    if(month.toString().length == 1) month = "0" + month; 
    var today =  year + "-" + month + "-" + day;

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    if(date == today)
    {
      todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
      todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
      todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
      todaysContest += "<hr>";
    }

  }

});


//KickStart
$.getJSON("https://kontests.net/api/v1/kick_start", function(data){
var i;
for (i = 0; i < data.length; i++) 
{
  var dateTime = data[i]['start_time'];
  var date = "", time = "", check = false;
  for(var j=0; j<dateTime.length; j++)
  {
    if(dateTime[j] == 'T')
    {
      check = true;
      continue;
    }
    if(check) time += dateTime[j];
    else date += dateTime[j];
  }
  intTime = parseInt(time);
  if(intTime <= 18) intTime += 6;
  else intTime = (intTime+6)%24;
  strTime = intTime.toString();

  var arr = time.split("");
  arr.splice(0, 1, strTime[0]);
  time = arr.join("");

  var brr = time.split("");
  brr.splice(1, 1, strTime[1]);
  time = brr.join("");

  // slicing time
  var timeLimit = time.length - 5
  time = time.substr(0,timeLimit);

  // contest status
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  if(day.toString().length == 1) day = "0" + day;
  if(month.toString().length == 1) month = "0" + month; 
  var today =  year + "-" + month + "-" + day;  

  var limit = parseInt(data[i]['duration']);
  var hour = parseInt(limit / 3600);
  var minute = (limit%3600)/60;

  if(date == today)
  {
    todaysContest += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";
    todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
    todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";
    todaysContest += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
    todaysContest += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
  }
}

    if(todaysContest === "<center>")
    {
        todaysContest += "No contest will begin today!  &#x1F494; ";
    }
    todaysContest += "</center>";
    $(".todaysContest").append(todaysContest);
});