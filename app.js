function randomRBG() {
	const r = 0;
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRBG();
	}
}, 2000);
