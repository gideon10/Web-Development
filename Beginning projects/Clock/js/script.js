
function showTime() {

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var am_pm = 'AM';

    if(hours > 12) {
        hours -= 12;
        am_pm = 'PM';
    }
    if(hours == 0) {
        hours = 12;
    }

    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    var time_str = hours + ":" + minutes + ":" + seconds + ' ' + am_pm;
    document.getElementById("clock").innerHTML = time_str;

    setTimeout(showTime, 1000); // 1000 ms (run every second).
}

showTime();