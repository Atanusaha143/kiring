// CF
$.getJSON("https://kontests.net/api/v1/codeforces", function(data){
console.log(data);
var i;
var alldetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
      alldetails += "<b> Name: </b>" + data[i]['name'] + "<br>";

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

      alldetails += " <b> Contest Date: </b>" + date + "<br>";
      alldetails += "<b> Contest Time: </b>" + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      alldetails += "<b> Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
      alldetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
      if( i != data.length - 1)
      {
        alldetails += "<hr>";
      }
    }
  }
  alldetails += "</center>";
  $(".cfContestDetails").append(alldetails);
});


// AtCoder
$.getJSON("https://kontests.net/api/v1/at_coder", function(data){
//console.log(data);
var i;
var atcoderContestDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
      atcoderContestDetails += "<b> Name: </b>" + data[i]['name'] + "<br>";

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

      atcoderContestDetails += "<b> Contest Date: </b>" + date + "<br>";
      atcoderContestDetails += "<b> Contest Time: </b>" + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      atcoderContestDetails += " <b> Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
      atcoderContestDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
      if(i != data.length -1 )
      {
        atcoderContestDetails += "<hr>";
      }
    }
  }
  atcoderContestDetails += "</center>";
  $(".atcoderContestDetails").append(atcoderContestDetails);
});



//CodeChef
$.getJSON("https://kontests.net/api/v1/code_chef", function(data){
//console.log(data);
var i;
var codechefDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
      codechefDetails += "<b>Name: </b>" + data[i]['name'] + "<br>";

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

      codechefDetails += "<b>Contest Date: </b>" + date + "<br>";
      codechefDetails += "<b>Contest Time: </b>" + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      codechefDetails += "<b>Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
      codechefDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
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
//console.log(data);
var i;
var leetCodeDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    leetCodeDetails += "<b>Name: </b>" + data[i]['name'] + "<br>";

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

    leetCodeDetails += "<b>Contest Date: </b>" + date + "<br>";
    leetCodeDetails += "<b>Contest Time: </b>" + time + "<br>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    leetCodeDetails += "<b>Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
    leetCodeDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
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
//console.log(data);
var i;
var hackerRankDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
    hackerRankDetails += "<b>Name: </b>" + data[i]['name'] + "<br>";

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

    hackerRankDetails += "<b>Contest Date: </b>" + date + "<br>";
    hackerRankDetails += "<b>Contest Time: </b>" + time + "<br>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    hackerRankDetails += "<b>Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
    hackerRankDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";

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
  //console.log(data);
  var i;
  var hackerEarthDetails = "<center>";
  for (i = 0; i < data.length; i++) 
  {
    hackerEarthDetails += "<b>Name: </b>" + data[i]['name'] + "<br>";

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

    hackerEarthDetails += "<b>Contest Date: </b>" + date + "<br>";
    hackerEarthDetails += "<b>Contest Time: </b>" + time + "<br>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    hackerEarthDetails += "<b>Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
    hackerEarthDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
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
//console.log(data);
var i;
var kickStartDetails = "<center>";
for (i = 0; i < data.length; i++) 
{
  kickStartDetails += "<b> Name: </b>" + data[i]['name'] + "<br>";

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

  kickStartDetails += "<b>Contest Date: </b>" + date + "<br>";
  kickStartDetails += "<b>Contest Time: </b>" + time + "<br>";

  var limit = parseInt(data[i]['duration']);
  var hour = parseInt(limit / 3600);
  var minute = (limit%3600)/60;

  kickStartDetails += "<b>Duration: </b>" + hour + " hour " + minute + " minutes " + "<br>";
  kickStartDetails += "<a href='"+data[i]['url']+"'>Contest Link</a><br><br>";
  if( i != data.length - 1) 
  {
    kickStartDetails += "<hr>";
  }
}
kickStartDetails += "</center>";
  $(".kickStartContestDetails").append(kickStartDetails);
});