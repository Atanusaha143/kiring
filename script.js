// CF
$.getJSON("https://codeforces.com/api/contest.list", function(data){
//console.log(data);
var i;
var alldetails = "";
for (i = 0; i < data.result.length; i++) 
{
    if(data.result[i]['phase'] == "BEFORE")
    {
        if(i == data.result.length - 1)
        {
          alldetails += "Name: " + data.result[i]['name'] + "<br>";
          $contestStartTime = data.result[i]['startTimeSeconds'];
          var startTime = new Date( $contestStartTime *1000);
          var realTime = startTime.toLocaleString();
          alldetails += "Start Time: " + realTime + "<br><br>";
        }
        else
        {
          alldetails += data.result[i]['name'] + "<br>";
          $contestStartTime = data.result[i]['startTimeSeconds'];
          var startTime = new Date( $contestStartTime *1000);
          var realTime = startTime.toLocaleString();
          alldetails += realTime + " (BST) <br><br><hr>";
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
      if( i == data.length - 1)
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

        atcoderContestDetails += "Contest Date: " + date + "<br>";
        atcoderContestDetails += "Contest Time: " + time + "<br>";

        var limit = parseInt(data[i]['duration']);
        var hour = parseInt(limit / 3600);
        var minute = (limit%3600)/60;

        atcoderContestDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
        atcoderContestDetails += "Link: " + data[i]['url'] + "<br><br>";
      }
      else
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

        atcoderContestDetails += "Contest Date: " + date + "<br>";
        atcoderContestDetails += "Contest Time: " + time + "<br>";

        var limit = parseInt(data[i]['duration']);
        var hour = parseInt(limit / 3600);
        var minute = (limit%3600)/60;

        atcoderContestDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
        atcoderContestDetails += "Link: " + data[i]['url'] + "<br><br><hr>";
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
      if( i == data.length - 1)
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

        codechefDetails += "Contest Date: " + date + "<br>";
        codechefDetails += "Contest Time: " + time + "<br>";

        var limit = parseInt(data[i]['duration']);
        var hour = parseInt(limit / 3600);
        var minute = (limit%3600)/60;

        codechefDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
        codechefDetails += "Link: " + data[i]['url'] + "<br><br>";
      }
      else
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

        codechefDetails += "Contest Date: " + date + "<br>";
        codechefDetails += "Contest Time: " + time + "<br>";

        var limit = parseInt(data[i]['duration']);
        var hour = parseInt(limit / 3600);
        var minute = (limit%3600)/60;

        codechefDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
        codechefDetails += "Link: " + data[i]['url'] + "<br><br><hr>";
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
    if( i == data.length - 1)
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

      leetCodeDetails += "Contest Date: " + date + "<br>";
      leetCodeDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      leetCodeDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      leetCodeDetails += "Link: " + data[i]['url'] + "<br><br>";
    }
    else
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

      leetCodeDetails += "Contest Date: " + date + "<br>";
      leetCodeDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      leetCodeDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      leetCodeDetails += "Link: " + data[i]['url'] + "<br><br><hr>";
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
    if( i == data.length - 1)
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

      hackerRankDetails += "Contest Date: " + date + "<br>";
      hackerRankDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      hackerRankDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      hackerRankDetails += "Link: " + data[i]['url'] + "<br><br>";
    }
    else
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

      hackerRankDetails += "Contest Date: " + date + "<br>";
      hackerRankDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      hackerRankDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      hackerRankDetails += "Link: " + data[i]['url'] + "<br><br>";
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
    if( i == data.length - 1)
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

      hackerEarthDetails += "Contest Date: " + date + "<br>";
      hackerEarthDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      hackerEarthDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      hackerEarthDetails += "Link: " + data[i]['url'] + "<br><br>";
    }
    else
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

      hackerEarthDetails += "Contest Date: " + date + "<br>";
      hackerEarthDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      hackerEarthDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      hackerEarthDetails += "Link: " + data[i]['url'] + "<br><br><hr>";
    }
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
    if( i == data.length - 1)
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

      kickStartDetails += "Contest Date: " + date + "<br>";
      kickStartDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      kickStartDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      kickStartDetails += "Link: " + data[i]['url'] + "<br><br>";
    }
    else
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

      kickStartDetails += "Contest Date: " + date + "<br>";
      kickStartDetails += "Contest Time: " + time + "<br>";

      var limit = parseInt(data[i]['duration']);
      var hour = parseInt(limit / 3600);
      var minute = (limit%3600)/60;

      kickStartDetails += "Duration: " + hour + " hour " + minute + " minutes " + "<br>";
      kickStartDetails += "Link: " + data[i]['url'] + "<br><br><hr>";
    }
  }
  $(".kickStartContestDetails").append(kickStartDetails);
});