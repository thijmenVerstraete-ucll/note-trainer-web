const values = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const displayElement = document.getElementById("display");
let speed = 1000;
let intervalId;
let currentValueIndex = 0;

function showRandomValue() {
    const randomIndex = Math.floor(Math.random() * values.length);
    if (currentValueIndex == randomIndex) {
        showRandomValue();
        console.log("double!");
        return;
    }
    currentValueIndex = randomIndex;
    displayElement.textContent = values[randomIndex];
}

var slider = document.getElementById("myRange");
var output = document.getElementById("rangeDisplay");
output.innerHTML = `${slider.value} sec`;

function updateInterval() {
    clearInterval(intervalId);
    speed = 1000 * Number(slider.value);
    intervalId = setInterval(showRandomValue, speed);
}

slider.oninput = function () {
    output.innerHTML = `${this.value} sec`;
    updateInterval();
};

updateInterval();
