function pad ( val ) { return val > 9 ? val : "0" + val; }
var sec = 0;
var myVar;
var goal_seconds = 7200;

function startTimer()
{
    var str = document.getElementById("start").innerHTML;
    if(str === "START" )
    {
        document.getElementById("start").innerHTML = "PAUSE";
        document.getElementById("start").className = "btn btn-warning btn-circle";
        myVar = setInterval(myTimer, 1000);
    }
    else
    {
        document.getElementById("start").innerHTML = "START";
        document.getElementById("start").className = "btn btn-success btn-circle";
        clearInterval(myVar);
    }
}

function myTimer()
{
    document.getElementById("time_spent").innerHTML=pad(parseInt(++sec/3600%60,10))+":"+pad(parseInt(sec/60%60,10))+":"+pad(sec%60);
    document.getElementById("time_left").innerHTML=pad(parseInt((goal_seconds-sec)/3600%60,10))+":"+pad(parseInt((goal_seconds-sec)/60%60,10))+":"+pad((goal_seconds-sec)%60);
    var percentage = (sec/goal_seconds)*100%100 ;
    document.getElementById("progress_c").setAttribute("style", "width: "+percentage+"%;");
}

function endTimer() {
    document.getElementById("start").innerHTML = "START";
    document.getElementById("start").className = "btn btn-success btn-circle";
    clearInterval(myVar);
    document.getElementById("summary").innerHTML = document.getElementById("time_spent").innerHTML;
    document.getElementById("summary_goal").innerHTML = document.getElementById("add_goal").innerHTML;
    document.getElementById("time_spent").innerHTML = "00:00:00";
    sec = 0;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12){
        h -= 12;
        document.getElementById('current_time').innerHTML = "Current time: "+ h + ":" + m + ":" + s + " pm";
    }else{
        document.getElementById('current_time').innerHTML = "Current time: "+ h + ":" + m + ":" + s + " am";
    }
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function set1hr(){
    goal_seconds = 3600 * 1;
    document.getElementById("add_goal").innerHTML = "Current Goal:  1 Hour";
    document.getElementById("time_left").innerHTML=pad(parseInt((goal_seconds-sec)/3600%60,10))+":"+pad(parseInt((goal_seconds-sec)/60%60,10))+":"+pad((goal_seconds-sec)%60);
}

function set2hr(){
    goal_seconds = 3600 * 2;
    document.getElementById("add_goal").innerHTML = "Current Goal:  2 Hours";
    document.getElementById("time_left").innerHTML=pad(parseInt((goal_seconds-sec)/3600%60,10))+":"+pad(parseInt((goal_seconds-sec)/60%60,10))+":"+pad((goal_seconds-sec)%60);
}

function set3hr(){
    goal_seconds = 3600 * 3;
    document.getElementById("add_goal").innerHTML = "Current Goal:  3 Hours";
    document.getElementById("time_left").innerHTML=pad(parseInt((goal_seconds-sec)/3600%60,10))+":"+pad(parseInt((goal_seconds-sec)/60%60,10))+":"+pad((goal_seconds-sec)%60);
}

function setGoal(){
    
}

function goHome(){
    window.location.href = "index.html";
}