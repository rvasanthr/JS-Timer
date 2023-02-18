// The timer class
class Timer {
    constructor(perimeter, durationInput, startButton, pauseButton, callbacks) {
        this.perimeter = perimeter
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // Event Listeners
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        // Checking whether a fourth argument has been passed
        if (callbacks) {
            this.timerStart = callbacks.onStart;
            this.tickingTimer = callbacks.onTick;
            this.timerPause = callbacks.onPause;
            this.timerStop = callbacks.onComplete;
        }
    }
    // Methods
    start = () => {

        // Stop start from doing too many things. But we only have 1 start
        if (!this.offset) {
            // offset seeding triggers only once
            this.offset = this.perimeter / this.timeRemaining;
            // User log
            // console.log('Seed Offset:', this.offset);
        }
        // Notifies start of timer, if it exists
        if (this.timerStart) { this.timerStart(this.offset); }
        // Decided against manual trigger, only setInterval trigger
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalId);
        // If exists, notifies Pause to user only when timer > 0
        if (this.timerPause && this.timeRemaining > 0) {
            this.timerPause();
        }
    }

    tick = () => {
        // Stops timer counting down from 0 and lower
        if (this.timeRemaining <= 0) {
            if (this.timerStop) { this.timerStop(); }
            this.pause();
        } else {
            if (this.tickingTimer) { this.tickingTimer(); }
            this.timeRemaining -= 1;
        }
    }

    // Applying getter and setter for tick
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}