const startButton = document.querySelector('#startButton'),
  stopButton = document.querySelector('#stopButton');

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioContext.createOscillator();
var contextGain = audioContext.createGain();

function start(){
	startButton.style.display = 'none';
  	stopButton.style.display = 'block';
  	oscillator = audioContext.createOscillator();
	contextGain = audioContext.createGain();
	oscillator.connect(contextGain);
	contextGain.connect(audioContext.destination);
	contextGain.gain.value=(10/1000);
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(500, audioContext.currentTime); // value in hertz
	oscillator.start(audioContext.currentTime);
}

function stop(){
	startButton.style.display = 'block';
  	stopButton.style.display = 'none';
	oscillator.stop(audioContext.currentTime);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

stop();
