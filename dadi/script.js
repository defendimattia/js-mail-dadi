// dichiarare 2 variabili e assegnargli un numero randomico da 1 a 6 ad ognuno
const userNum = Math.floor(Math.random() * 6) + 1;
const computerNum = Math.floor(Math.random() * 6) + 1;

// dichiarare una condizione che printi il numero più alto o se entrambi uguali un messaggio di pareggio
if (userNum > computerNum) console.log("Hai vinto!");
else if (userNum < computerNum) console.log("Hai perso!");
else console.log("Pareggio!");
   
console.log(
    `Il tuo numero: ${userNum}
Il numero dell'avversario: ${computerNum}`);