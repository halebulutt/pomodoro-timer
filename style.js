let minutes;
let seconds;
var clickSound = new Audio("click.mp3");
var bellSound = new Audio("bell.mp3");

// x dememimizin sebebi içindeki 25 ve 10 u alması içindir.
function studyBreak(x) {
    minutes = x;
    seconds = "00";
    clickSound.play();

    var inter = setInterval(function() {
        var el = document.getElementById("timer");
        if (seconds == 0 && minutes == 0 ) {
            clearInterval(inter);
            el.innerText = "00:00";
            // el.style.background-color = "red";
            bellSound.play();
        }

        else if (seconds == 0) {
            minutes = minutes - 1; 
            seconds = 59;
            el.innerText = `${minutes}:${seconds}`;
        }

        else if (seconds > 0) {
            seconds = seconds - 1; 
            el.innerText = `${minutes}:${seconds}`;
        }

    }, 1000)
}
