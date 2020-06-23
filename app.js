function randomRBG() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rbg(${r}, ${g}, ${b})`;
}
const h1 = document.querySelector('h1');

const letters = document.querySelectorAll('.letters');
const intervalId = setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRBG();
		h1.style.color = randomRBG;
		// console.log(randomRBG());
	}
}, 1000);
