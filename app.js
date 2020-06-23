function randomRBG() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rbg(${r}, ${g}, ${b})`;
}

const letters = document.querySelector('.letters');
const intervalId = setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRBG();
	}
}, 2000);
