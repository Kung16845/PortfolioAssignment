window.onload = pageLoad;

function pageLoad() {
	// Initialize variables and set up event listeners here
}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var seconds = min * 60;
	var x = document.getElementById('clock');
	var remainingTime = seconds;

	function updateTimeDisplay() {
		x.textContent = remainingTime + 's';
	}

	updateTimeDisplay();

	// Setting timer using setInterval function
	timer = setInterval(function () {
		remainingTime--;
		updateTimeDisplay();

		if (remainingTime == 0) {
			clearInterval(timer);
			clearScreen();
			alert('Game Over');
		} else if (document.querySelectorAll('#layer div').length === 0) {
			clearInterval(timer);
			x.textContent = 'You Win!';
			alert('You Win!');
		}
	}, TIMER_TICK);
}

function addBox() {
	clearScreen();
	var numbox = parseInt(document.getElementById('numbox').value);
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;

	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement('div');
		tempbox.className = 'square ' + colorDrop;
		tempbox.id = 'box' + i;
		tempbox.style.left = Math.random() * (500 - 25) + 'px';
		tempbox.style.top = Math.random() * (500 - 25) + 'px';
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box) {
	box.onclick = function () {
		box.parentNode.removeChild(box);
	};
}

function clearScreen() {
	var allbox = document.querySelectorAll('#layer div');
	for (var i = 0; i < allbox.length; i++) {
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}



