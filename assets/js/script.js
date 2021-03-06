// CF
$.getJSON("https://kontests.net/api/v1/codeforces", function(data){
var i;
var alldetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    alldetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:55%'>" + data[i]['name'] + "<br></p>";

    //contest start time
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
    
    status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      alldetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      alldetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      alldetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

    alldetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "</p>";
    alldetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "</p>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    alldetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";

    alldetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
    if( i != data.length - 1)
    {
      alldetails += "<hr>";
    }
  }
  alldetails += "</center>";
  $(".cfContestDetails").append(alldetails);
});


// AtCoder
$.getJSON("https://kontests.net/api/v1/at_coder", function(data){
var i;
var atcoderContestDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
      atcoderContestDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
      
      status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      atcoderContestDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      atcoderContestDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      atcoderContestDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

      atcoderContestDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "<br></p>";
      atcoderContestDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "<br></p>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      atcoderContestDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";

      atcoderContestDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
      if(i != data.length -1 )
      {
        atcoderContestDetails += "<hr>";
      }
  }
  atcoderContestDetails += "</center>";
  $(".atcoderContestDetails").append(atcoderContestDetails);
});



//CodeChef
$.getJSON("https://kontests.net/api/v1/code_chef", function(data){
var i;
var codechefDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
      codechefDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
      
      status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      codechefDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      codechefDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      codechefDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

      codechefDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "<br></p>";
      codechefDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "<br></p>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      codechefDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";

      codechefDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
      if(i != data.length - 1)
      {
        codechefDetails += "<hr>";
      }
  }
  codechefDetails += "</center>";
  $(".codechefContestDetails").append(codechefDetails);
});


//LeetCode
$.getJSON("https://kontests.net/api/v1/leet_code", function(data){
var i;
var leetCodeDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    leetCodeDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
    
    status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      leetCodeDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      leetCodeDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      leetCodeDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

    leetCodeDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "<br></p>";
    leetCodeDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "<br></p>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    leetCodeDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";

    leetCodeDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
    if(i != data.length - 1)
    {
      leetCodeDetails += "<hr>";
    }

  }
  leetCodeDetails += "</center>";
  $(".leetCodeContestDetails").append(leetCodeDetails);
});


//HackerRank
$.getJSON("https://kontests.net/api/v1/hacker_rank", function(data){
var i;
var hackerRankDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    hackerRankDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
    
    status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      hackerRankDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      hackerRankDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      hackerRankDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

    hackerRankDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "<br></p>";
    hackerRankDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "<br></p>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    hackerRankDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";

    hackerRankDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";

    if(i != data.length - 1) 
    {
      hackerRankDetails += "<hr>";
    }
}
hackerRankDetails += "</center>";
  $(".hackerRankContestDetails").append(hackerRankDetails);
});


//HackerEarth
$.getJSON("https://kontests.net/api/v1/hacker_earth", function(data){
  var i;
  var hackerEarthDetails = "<center>";
  for (i = 0; i < data.length; i++) 
  {
    hackerEarthDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
    
    status = "";
    if(date > today) status = "Upcoming";
    else if(date == today) status = "Happening Today";
    else status = "Running";

    if(status == "Upcoming")
    {
      hackerEarthDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
    }
    else if(status == "Happening Today")
    {
      hackerEarthDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
    } 
    else
    {
      hackerEarthDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
    }

    hackerEarthDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Date - " + date + "<br></p>";
    hackerEarthDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Contest Time - " + time + "<br></p>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    hackerEarthDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i>  Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
    hackerEarthDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
    if(i != data.length - 1)
    {
      hackerEarthDetails += "<hr>";
    }
  }
  hackerEarthDetails += "</center>";  
    $(".hackerEarthContestDetails").append(hackerEarthDetails);

});


//KickStart
$.getJSON("https://kontests.net/api/v1/kick_start", function(data){
var i;
var kickStartDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
  kickStartDetails += "<p class='border border-dark rounded text-dark p-3 contestNameFont' style='width:50%'>" + data[i]['name'] + "<br></p>";

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
  
  status = "";
  if(date > today) status = "Upcoming";
  else if(date == today) status = "Happening Today";
  else status = "Running";

  if(status == "Upcoming")
  {
    kickStartDetails += "<p class='contestStatus badge badge-warning'> " + status + "</p>";
  }
  else if(status == "Happening Today")
  {
    kickStartDetails += "<p class='contestStatus badge badge-primary'> " + status + "</p>";
  } 
  else
  {
    kickStartDetails += "<p class='contestStatus badge badge-success'> " + status + "</p>";
  }
  
  kickStartDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i> Contest Date - " + date + "<br></p>";
  kickStartDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i> Contest Time - " + time + "<br></p>";

  var limit = parseInt(data[i]['duration']);
  var hour = parseInt(limit / 3600);
  var minute = (limit%3600)/60;

  kickStartDetails += "<p class='contestDetailsFont'> <i class='fas fa-caret-right'></i> Duration - " + hour + " hour " + minute + " minutes " + "<br></p>";
  kickStartDetails += "<a href='"+data[i]['url']+"' class='btn btn-dark registrationLinkName' >Registration Link</a><br><br>";
  if( i != data.length - 1) 
  {
    kickStartDetails += "<hr>";
  }
}
kickStartDetails += "</center>";
  $(".kickStartContestDetails").append(kickStartDetails);
});