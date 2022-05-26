playerChoice = prompt("pari o dispari?");
playerValue = prompt("Scegli un numero da 1 a 5");
playerNumber = parseInt(playerValue)

function generateRandomNumbers(min, max) {
  if (min === undefined || min === null || min < 0) {
    return;
  }

  if (max === undefined || max < min + 1) {
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}

random = generateRandomNumbers(1, 5);

somma = (playerNumber + random)
console.log(somma);

if (somma % 2 === 0) {
    if (playerChoice === "pari") {
        alert("Hai vinto!")
    } else {
        alert("Hai perso!")
    }
} else {
    if (playerChoice === "pari") {
        alert("Hai perso!")
    } else {
        alert("Hai vinto!")
    } 
}