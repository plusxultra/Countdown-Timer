var home__clock__timer;

function clock() {
    home__clock__timer = setInterval(clock__timer, 1000);
}

function clock__timer() {
    var date = new Date();
    var day = date.toDateString();
    var time = date.toString().split(" ");
    var hour = time[4].split(':')[0];
    var minute = time[4].split(":")[1];

    document.querySelector(".day").innerHTML = day;

    if (hour > 12) {
        hour %= 12;
        document.querySelector(".clock").innerHTML = hour+":"+minute;
    }else {
        document.querySelector(".clock").innerHTML = hour+":"+minute;
    }

}
//display countdown
function displayCountdown() {
    document.querySelector('.home').style.display = "none";
    document.querySelector('.countdown').style.display = "block";
    document.querySelector('.stopwatch__container').style.display = "none";
    document.querySelector('.event__timer__container').style.display = "none";
}

//display home
function displayHome() {
    document.querySelector('.home').style.display = "block";
    document.querySelector('.countdown').style.display = "none";
    document.querySelector('.stopwatch__container').style.display = "none";
    document.querySelector('.event__timer__container').style.display = "none";
}

//display stopwatch
function displayStopwatch() {
    document.querySelector('.home').style.display = "none";
    document.querySelector('.countdown').style.display = "none";
    document.querySelector('.stopwatch__container').style.display = "block";
    document.querySelector('.event__timer__container').style.display = "none";
}

//display event timer
function displayEvent() {
    document.querySelector('.home').style.display = "none";
    document.querySelector('.countdown').style.display = "none";
    document.querySelector('.stopwatch__container').style.display = "none";
    document.querySelector('.event__timer__container').style.display = "block";
}

//countdown timer
var result_hour = document.querySelector('.result-hour');
var result_minute = document.querySelector('.result-minute');
var result_second = document.querySelector('.result-second');
var audio = document.querySelector('audio');
var timer = "";

function time(){
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var second = document.getElementById("second").value;

    function calcTime(){
        second = second - 1;

        if (second < 0){
            if (minute <= 0){
                if (hour <= 0){
                    hour = 0;
                    minute = 0;
                    second = 0;
                }else {
                    hour -= 1;
                    minute = 59;
                    second = 59;
                }
            }else{
                minute -= 1;
                second = 59;
            }
        }

        result_hour.innerHTML = hour;
        result_minute.innerHTML = minute;
        result_second.innerHTML = second;

        if (hour == 0 && minute == 0 && second == 0){
            document.querySelector(".result-text").innerHTML = "Time up!";
            audio.play();
        }
    }
    if (hour == 0 && minute == 0 && second == 0){
        timer = setTimeout(calcTime);
    }else{
        timer = setInterval(calcTime, 1000);
    }
}

//stopwatch timer
var hour = parseInt(document.querySelector('.stopwatch__hour').textContent);
var minute = parseInt(document.querySelector('.stopwatch__minute').textContent);
var second = parseInt(document.querySelector('.stopwatch__second').textContent);
var stop__timer = '';

function starttimer() {
    stop__timer = setInterval(updatetimer, 1000);
}

function updatetimer() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        minute =0;
        hour++;
    }

    document.querySelector('.stopwatch__hour').innerHTML = hour;
    
    if (minute < 10) {
        document.querySelector('.stopwatch__minute').innerHTML = "0"+minute;
    }else {
        document.querySelector('.stopwatch__minute').innerHTML = minute;
    }

    if (second < 10) {
        document.querySelector('.stopwatch__second').innerHTML = "0"+second;
    }else {
        document.querySelector('.stopwatch__second').innerHTML = second;
    }
}

function stoptimer() {
    clearInterval(stop__timer);
}

function end() {
    document.querySelector('.stopwatch__hour').innerHTML = "00";
    document.querySelector('.stopwatch__minute').innerHTML = "00";
    document.querySelector('.stopwatch__second').innerHTML = "00";
    hour = 0;
    minute = 0;
    second = 0;
    stoptimer();
}

//event timer
function event__timer() {
    var event__date = document.querySelector('#event__date').value;
    var result = document.querySelector('.event__result__day');
    var today = new Date();
    var ed = new Date(event__date);

    var std = today.toString().slice(8,10);
    var sed = ed.toString().slice(8,10);

    if (parseInt(sed) == parseInt(std)) {
        result.innerHTML = "You have an event today.";
    }else if (parseInt(sed) > parseInt(std)) {
        result.innerHTML = (parseInt(sed) - parseInt(std))+" days remaining.";
    }else {
        result.innerHTML = "Event is finished.";
    }

    document.querySelector('.event__result__name').innerHTML = "Event - "+document.querySelector('#event__name').value;
    document.querySelector('.event__des').innerHTML = "Note - "+document.querySelector('#des').value;
}
