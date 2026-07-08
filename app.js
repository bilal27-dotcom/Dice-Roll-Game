var diceContainer = document.getElementById("dice-container");

function game() {
  var randomNumber = Math.random() * 6;
  var convertIntoInteger = Math.ceil(randomNumber);
  if (convertIntoInteger === 1) {
    diceContainer.innerHTML = `<div class="dice dice-1 animate__animated animate__flip">
        <span class="dot center"></span>
      </div>`;
  } else if (convertIntoInteger === 2) {
    diceContainer.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (convertIntoInteger === 3) {
    diceContainer.innerHTML = `<div class="dice dice-3 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot center"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (convertIntoInteger === 4) {
    diceContainer.innerHTML = `<div class="dice dice-4 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (convertIntoInteger === 5) {
    diceContainer.innerHTML = `<div class="dice dice-5 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot center"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (convertIntoInteger === 6) {
    diceContainer.innerHTML = `<div class="dice dice-6 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot middle-left"></span>
        <span class="dot middle-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  }
}

// var number = 10.656565
// console.log(Math.round(number));

console.log(Number(true));
console.log(parseFloat(true));


