let word = prompt("inserisci una parola")
const letters = word.split("")
const reverseCheck = []

for (let i = (letters.length -1); i >= 0; i--) {
    reverseCheck.push(letters[i])
}

const reverseWord = reverseCheck.join('')
console.log(letters);
console.log(reverseCheck);

if (reverseWord === word) {
    alert("La parola inserita è palindroma")
} else {
    alert("La parola inserita non è palindroma")
}