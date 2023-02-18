// HTML dom access
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
// Circle Animation Related
const circle = document.querySelector('circle');
// Circumference calculation
const perimeter = 2 * Math.PI * circle.getAttribute('r');
// Setting the circle's circumference
circle.setAttribute('stroke-dasharray', perimeter);
// Create two variables to aid in animation calculation
let newOffset, timeTotal = 0;
// Timer Object
const timer = new Timer(durationInput, startButton, pauseButton, {
    // Object argument to notify outside world of timer activity. 
    onStart(totalDuration) {
        console.log('Timer Started');
        timeTotal = totalDuration;
    },
    onTick(timeLeft) {
        // console.log('Ticking...');
        // BODMAS or PEMDAS applied left to right
        newOffset = (perimeter * timeLeft / timeTotal) - perimeter;
        circle.setAttribute('stroke-dashoffset', newOffset);
        // newOffset -= 2;
    },
    onPause() {
        console.log('Timer Paused...');
    },
    onComplete() {
        console.log('Timer Complete');
    }
});