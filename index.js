// The timer class
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // Event Listeners
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    // Methods
    start = () => {
        // Decided against manual trigger, only setInterval trigger
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        // console.log('tick');
        // const timeRemaining = this.durationInput.value;
        // this.durationInput.value = this.timeValue - 1;
        this.timeRemaining -= 1;
    }

    // Applying getter and setter for tick
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

// HTML dom access
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// Timer Object
const timer = new Timer(durationInput, startButton, pauseButton);