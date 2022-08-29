var inputs = document.getElementById("clock");
var counter = document.getElementById("counter");
var timeValue, minutesValue, secondsValue, hoursValue;
var play;
function validate(box, max) {
    if (clock.children[box].value < 0)
        clock.children[box].value = 0;
    if (clock.children[box].value > max)
        clock.children[box].value = max;
}
let resetBotton = document.getElementById("resetBotton")
resetBotton.addEventListener("keydown", function (event) {
    if(event.key == "Enter")
        startTimer();
})
let submit = document.getElementById("submit")
submit.addEventListener("keydown", function (event) {
    if(event.key == "Enter")
        startTimer();
})
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

    clock.children[0].value = "";
    clock.children[1].value = "";
    clock.children[2].value = "";

    inputs.classList.add("hidden")
    counter.classList.remove("hidden")
    if (timeValue == 0) reset();
    changefunc();
    play = setInterval(() => {
        changefunc();
        if (timeValue < -1)
            reset();
    }, 1000);
}

function changefunc() {
    secondsValue = parseInt(timeValue % 60);
    minutesValue = parseInt((timeValue / 60) % 60);
    hoursValue = parseInt(timeValue / 3600);
    timeValue--;
    let timebox = document.getElementsByClassName("timebox")
    timebox[0].textContent = hoursValue
    timebox[1].textContent = minutesValue
    timebox[2].textContent = secondsValue;
    timebox[0].textContent = timebox[0].textContent.padStart(2,'0')
    timebox[1].textContent = timebox[1].textContent.padStart(2,'0')
    timebox[2].textContent = timebox[2].textContent.padStart(2,'0')
}

function reset() {
    clearInterval(play);
    let inputs = document.getElementById("clock");
    let counter = document.getElementById("counter");
    inputs.classList.remove("hidden");
    counter.classList.add("hidden");
    

}