function playerValidate() {
    playerChoice = prompt("pari o dispari?");
    const pari = toString("pari")
    const dispari = toString("dispari")
    if (playerChoice !== pari || playerChoice !== dispari) {
        alert("Scegli tra pari o dispari!")
        return;
    }
    playerValue = prompt("Scegli un numero da 1 a 5");
    if (playerValue < 1 || playerValue > 5) {
        alert("Riprova! Questa volta scegli un numero tra 1 e 5.")
        return;
    }
}
playerValidate();