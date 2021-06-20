// CF
$.getJSON("https://kontests.net/api/v1/codeforces", function(data){
console.log(data);
var i;
var alldetails = "";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
      alldetails += "Name: " + data[i]['name'] + "<br>";

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

      alldetails += "Contest Date: " + date + "<br>";
      alldetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      alldetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      alldetails += "Link: " + data[i]['url'] + "<br><br>";
      if( i != data.length - 1)
      {
        alldetails += "<hr>";
      }
    }
  }
  $(".cfContestDetails").append(alldetails);
});


// AtCoder
$.getJSON("https://kontests.net/api/v1/at_coder", function(data){
//console.log(data);
var i;
var atcoderContestDetails = "";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
      atcoderContestDetails += "Name: " + data[i]['name'] + "<br>";

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

      atcoderContestDetails += "Contest Date: " + date + "<br>";
      atcoderContestDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      atcoderContestDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      atcoderContestDetails += "Link: " + data[i]['url'] + "<br><br>";
      if(i != data.length -1 )
      {
        atcoderContestDetails += "<hr>";
      }
    }
  }
  $(".atcoderContestDetails").append(atcoderContestDetails);
});



//CodeChef
$.getJSON("https://kontests.net/api/v1/code_chef", function(data){
//console.log(data);
var i;
var codechefDetails = "";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
      codechefDetails += "Name: " + data[i]['name'] + "<br>";

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

      codechefDetails += "Contest Date: " + date + "<br>";
      codechefDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      codechefDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      codechefDetails += "Link: " + data[i]['url'] + "<br><br>";
      if(i != data.length - 1)
      {
        codechefDetails += "<hr>";
      }
    }
  }
  $(".codechefContestDetails").append(codechefDetails);
});


//LeetCode
$.getJSON("https://kontests.net/api/v1/leet_code", function(data){
//console.log(data);
var i;
var leetCodeDetails = "";
for (i = 0; i < data.length; i++) 
{
    leetCodeDetails += "Name: " + data[i]['name'] + "<br>";

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

    leetCodeDetails += "Contest Date: " + date + "<br>";
    leetCodeDetails += "Contest Time: " + time + "<br>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    leetCodeDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
    leetCodeDetails += "Link: " + data[i]['url'] + "<br><br>";
    if(i != data.length - 1)
    {
      leetCodeDetails += "<hr>";
    }
  }
  $(".leetCodeContestDetails").append(leetCodeDetails);
});


//HackerRank
$.getJSON("https://kontests.net/api/v1/hacker_rank", function(data){
//console.log(data);
var i;
var hackerRankDetails = "";
for (i = 0; i < data.length; i++) 
{
    hackerRankDetails += "Name: " + data[i]['name'] + "<br>";

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

    hackerRankDetails += "Contest Date: " + date + "<br>";
    hackerRankDetails += "Contest Time: " + time + "<br>";

    var limit = parseInt(data[i]['duration']);
    var hour = parseInt(limit / 3600);
    var minute = (limit%3600)/60;

    hackerRankDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
    hackerRankDetails += "Link: " + data[i]['url'] + "<br><br>";

    if(i != data.length - 1) 
    {
      hackerRankDetails += "<hr>";
    }
}

  $(".hackerRankContestDetails").append(hackerRankDetails);
});


//HackerEarth
$.getJSON("https://kontests.net/api/v1/hacker_earth", function(data){
//console.log(data);
var i;
var hackerEarthDetails = "";
for (i = 0; i < data.length; i++) 
{
  hackerEarthDetails += "Name: " + data[i]['name'] + "<br>";

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

  hackerEarthDetails += "Contest Date: " + date + "<br>";
  hackerEarthDetails += "Contest Time: " + time + "<br>";

  var limit = parseInt(data[i]['duration']);
  var hour = parseInt(limit / 3600);
  var minute = (limit%3600)/60;

  hackerEarthDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
  hackerEarthDetails += "Link: " + data[i]['url'] + "<br><br>";
  }
  if(i != data.length - 1)
  {
    hackerEarthDetails += "<hr>";
  }
  $(".hackerEarthContestDetails").append(hackerEarthDetails);
});


//KickStart
$.getJSON("https://kontests.net/api/v1/kick_start", function(data){
//console.log(data);
var i;
var kickStartDetails = "";
for (i = 0; i < data.length; i++) 
{
  kickStartDetails += "Name: " + data[i]['name'] + "<br>";

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

  kickStartDetails += "Contest Date: " + date + "<br>";
  kickStartDetails += "Contest Time: " + time + "<br>";

  var limit = parseInt(data[i]['duration']);
  var hour = parseInt(limit / 3600);
  var minute = (limit%3600)/60;

  kickStartDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
  kickStartDetails += "Link: " + data[i]['url'] + "<br><br>";
  if( i != data.length - 1) 
  {
    kickStartDetails += "<hr>";
  }
}
  $(".kickStartContestDetails").append(kickStartDetails);
});