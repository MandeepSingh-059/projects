function setDay(time){
    let day = time.getDay();
    console.log(day);
    if(day == 0)
        document.getElementById("sunday").style.color = "#3cd651";
    else if(day == 1)
        document.getElementById("monday").style.color = "#3cd651";
    else if(day == 2)
        document.getElementById("tuesday").style.color = "#3cd651";
    else if(day == 3)
        document.getElementById("wednesday").style.color = "#3cd651";
    else if(day == 4)
        document.getElementById("thursday").style.color = "#3cd651";
    else if(day == 5)
        document.getElementById("friday").style.color = "#3cd651";
    else if(day == 6)
        document.getElementById("saturday").style.color = "#3cd651";
}

var counter = 0;
var Timer12;
var Timer24;
Timer12 = setInterval(hr12Format, 1000);
Timer24 = setInterval(hr24Format, 1000);
set12hrFormat(Timer24);

function setFormat(){
    document.getElementById("hr12").onclick = function(){
        document.getElementById("hr12").style.color = "#3cd651";
        document.getElementById("hr24").style.color = "#79b17c";

        set12hrFormat(Timer24);

    }
    document.getElementById("hr24").onclick = function(){
        document.getElementById("hr24").style.color = "#3cd651";
        document.getElementById("hr12").style.color = "#79b17c";
        
        set24hrFormat(Timer12);
    }
}
setFormat();

function set24hrFormat(Timer12) {
    clearInterval(Timer12);
    Timer24 = setInterval(hr24Format, 1000);
    hr24Format();
}

function set12hrFormat(Timer24) {
    if(counter == 0){
        clearInterval(Timer24);
        hr12Format();
        counter++;
    }

    else{
    clearInterval(Timer24);
    Timer12 = setInterval(hr12Format, 1000);
    hr12Format();
    }
}

function hr12Format() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    setDay(time);
    am_pm = "AM";

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }
    if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }
    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    document.getElementById("clock")
    .innerHTML = currentTime;   
}

function hr24Format() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    setDay(time);

    let currentTime = hour + ":" + min + ":" + sec;
    document.getElementById("clock")
            .innerHTML = currentTime;   
}