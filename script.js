var inputs = document.getElementById("clock");
var counter = document.getElementById("counter");
var timeValue, minutesValue, secondsValue, hoursValue;

function validate(box, max) {
    if (clock.children[box].value < 0)
        clock.children[box].value = 0;
    if (clock.children[box].value > max)
        clock.children[box].value = max;
}

function startTimer() {
    let inputs = document.getElementById("clock");
    let counter = document.getElementById("counter");

    hoursValue = clock.children[0].value;
    if (!hoursValue) hoursValue = 0
    minutesValue = clock.children[1].value;
    if (!minutesValue) minutesValue = 0
    secondsValue = clock.children[2].value;
    if (!secondsValue) secondsValue = 0
    timeValue = hoursValue * 3600 + minutesValue * 60 + (secondsValue - 0);
    console.log(timeValue);
    inputs.classList.add("hidden")
    counter.classList.remove("hidden")


    if (timeValue ==0) reset();

    secondsValue = parseInt(timeValue % 60);
    minutesValue = parseInt((timeValue / 60) % 60);
    hoursValue = parseInt(timeValue / 3600);
    timeValue--;
    let timebox = document.getElementsByClassName("timebox")
        timebox[0].textContent = parseInt(hoursValue/10)
        timebox[1].textContent = hoursValue%10
        timebox[2].textContent = parseInt(minutesValue/10)
        timebox[3].textContent = minutesValue%10
        timebox[4].textContent = parseInt(secondsValue/10)
        timebox[5].textContent = secondsValue%10;
    let play = setInterval(() => {
        secondsValue = parseInt(timeValue % 60);
        minutesValue = parseInt((timeValue / 60) % 60);
        hoursValue = parseInt(timeValue / 3600);
        timeValue--;
        let timebox = document.getElementsByClassName("timebox")
        timebox[0].textContent = parseInt(hoursValue/10)
        timebox[1].textContent = hoursValue%10
        timebox[2].textContent = parseInt(minutesValue/10)
        timebox[3].textContent = minutesValue%10
        timebox[4].textContent = parseInt(secondsValue/10)
        timebox[5].textContent = secondsValue%10;
        if(timeValue < -1) {
            clearInterval(play);
            reset();
        }
    }, 1000);
}

function reset() {
    let inputs = document.getElementById("clock");
    let counter = document.getElementById("counter");
    inputs.classList.remove("hidden");
    counter.classList.add("hidden");
    clock.children[0].value = "";
    clock.children[1].value = "";
    clock.children[2].value = "";

}