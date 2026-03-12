let is24Hour = false;

function updateClock(){

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";

    if(!is24Hour){

        ampm = hours >= 12 ? "PM" : "AM";

        if(hours > 12){
            hours = hours - 12;
        }

        if(hours == 0){
            hours = 12;
        }
    }

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    let timeString =
        hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("time").textContent = timeString;


    const days = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
    ];

    const months = [
        "January","February","March","April","May",
        "June","July","August","September",
        "October","November","December"
    ];

    document.getElementById("day").textContent =
        days[now.getDay()];

    document.getElementById("date").textContent =
        now.getDate() + " " +
        months[now.getMonth()] + " " +
        now.getFullYear();
}

document.getElementById("toggleFormat")
.addEventListener("click",function(){

    is24Hour = !is24Hour;

    updateClock();
});

updateClock();

setInterval(updateClock,1000);

