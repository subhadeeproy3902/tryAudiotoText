const startButton = document.getElementById('start-recording');
const stopButton = document.getElementById('stop-recording');
const transcriptionElement = document.getElementById('transcription');
let recognition;

startButton.addEventListener('click', () => {
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        transcriptionElement.textContent = result;
    };
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    if (recognition) {
        recognition.stop();
        recognition = null;
    }
    startButton.disabled = false;
    stopButton.disabled = true;
});
