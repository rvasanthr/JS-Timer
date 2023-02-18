// The timer class
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
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
        // Notifies start of timer, if it exists
        if (this.timerStart) { this.timerStart(); }
        // Decided against manual trigger, only setInterval trigger
        this.intervalId = setInterval(this.tick, 50);
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
            this.timeRemaining -= 0.05;
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