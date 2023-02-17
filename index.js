// The timer class
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        // Event Listeners
        this.startButton.addEventListener('click', this.start);
    }

    // Methods
    start() {
        console.log('Time to start the timer!');
    }
}