// BONUS
// in una variabile al posto di assegnare numero randomico, assegnare un prompt di ind con massimo da 1 a 6

let userNum = parseFloat(prompt("Inserisci un numero da 1 a 6!"));
const computerNum = Math.floor(Math.random() * (7 - 1) + 1);


if (!(userNum >= 1 && userNum <= 6)) {
    console.log("Hai inserito un numero sbagliato");
} else {

// dichiarare una condizione che printi il numero più alto o se entrambi uguali un messaggio di pareggio
if (userNum > computerNum) console.log("Hai vinto!");
else if (userNum < computerNum) console.log("Hai perso!");
else console.log("Pareggio!");

console.log(
    `Il tuo numero: ${userNum}
Il numero dell'avversario: ${computerNum}`);

}