var partOfTheBody = ["руки", "ножки", "глаза", "волосы", "губы"];
var compliments = ["красивые", "прекрасные", "великолепные", "волшебные", "восхитительные"];
var who = ["богини", "фотомодели", "актрисы", "Клеопатры", "королевы"];

var pickRandomWord = function (words) {
return words[Math.floor(Math.random() * words.length)];
};

var generateRandomInsult = function () {

var btn = document.getElementById('btn');
var show = document.getElementById('show');

var randomString = "У тебя " + pickRandomWord(partOfTheBody) + " " + pickRandomWord(compliments) + " как у " + pickRandomWord(who);
return randomString;
};

btn.addEventListener('click', function () {
	show.innerHTML = generateRandomInsult();
});