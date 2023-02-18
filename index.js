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
// Variables
let newOffset = 0, offset = 0;

// Timer Object
const timer = new Timer(perimeter, durationInput, startButton, pauseButton, {
    // Object argument to notify outside world of timer activity. 
    onStart(dashStep) {
        console.log('Timer Started');
        offset = dashStep;
    },
    onTick() {
        // console.log('Ticking...');
        // newOffset = perimeter * remainingTime / totalTime - perimeter;
        newOffset += offset;
        // User log
        // console.log('Recurring offset:', newOffset);
        circle.setAttribute('stroke-dashoffset', newOffset);

    },
    onPause() {
        console.log('Timer Paused...');
    },
    onComplete() {
        console.log('Timer Complete');
    }
});