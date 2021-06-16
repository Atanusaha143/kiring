// CF
$.getJSON("https://codeforces.com/api/contest.list", function(data){
//console.log(data);
var i;
var alldetails = "";
for (i = 0; i < data.result.length; i++) 
{
    if(data.result[i]['phase'] == "BEFORE")
    {
        alldetails += data.result[i]['name'] + "<br>";
        $contestStartTime = data.result[i]['startTimeSeconds'];
        var startTime = new Date( $contestStartTime *1000);
        var realTime = startTime.toLocaleString();
        alldetails += realTime + "<br><br>";
    }
  }
$(".cfdetails").append(alldetails);

});

$.getJSON("https://kontests.net/api/v1/at_coder", function(data){
//console.log(data);
var i;
var atcoderdetails = "";
for (i = 0; i < data.length; i++) 
{
    if(data[i]['status'] == "BEFORE")
    {
        atcoderdetails += data[i]['name'] + "<br>";
        $contestStartTime = data[i]['start_time'];
        var realTime = $contestStartTime.toLocaleString();
        atcoderdetails += $contestStartTime + "<br><br>";
    }
  }
$(".atcoderdetails").append(atcoderdetails);
//console.log(atcoderdetails);
});