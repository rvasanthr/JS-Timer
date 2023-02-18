// HTML dom access
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// Timer Object
const timer = new Timer(durationInput, startButton, pauseButton, {
    // Object argument to notify outside world of timer activity. 
    onStart() {
        console.log('Timer Started');
    },
    onTick() {
        console.log('Ticking...');
    },
    onPause() {
        console.log('Timer Paused...');
    },
    onComplete() {
        console.log('Timer Complete');
    }
});