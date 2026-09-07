const startButton = document.getElementById('savebtn');
const stopButton = document.getElementById('stopbtn');
let colorInterval;

function randomColor() {
	const color = Math.floor(Math.random() * 0xffffff);
	return `#${color.toString(16).padStart(6, '0')}`;
}

function changeBackgroundColor() {
	document.body.style.backgroundColor = randomColor();
}

startButton.addEventListener('click', () => {
	if (colorInterval) {
		return;
	}

	changeBackgroundColor();
	colorInterval = setInterval(changeBackgroundColor, 1000);
});

stopButton.addEventListener('click', () => {
	clearInterval(colorInterval);
	colorInterval = undefined;
});
