


// printare messaggio relativo

// dichiarare un array con delle e-mails
const mailList = [
    "ver-icabuka90@outlook.com",
    "zatu-yimade77@outlook.com",
    "hufan_ohumo64@outlook.com",
    "jidula_bazo39@mail.com",
    "gowuy_efimi90@hotmail.com",
    "tumu-fusiru99@aol.com",
    "yoli-yujopu46@outlook.com",
    "votul-inula61@outlook.com",
    "haw-usigiyo71@yahoo.com",
    "juz-utekafu36@hotmail.com",
];

// dichiarare una constante con prompt per chiedere la e-mail all'utente
const userInput = prompt("Inserisci la tua e-mail");

// dichiarare un ciclo for per ogni elemento presente nell'array e confrontare il valore dell'elemento con la mail inserita dall'utente
for (i = 0; i < mailList.length; i++) {
    if (mailList[i] === userInput) console.log("La mail è presente!")   
        if (i === (mailList.length -1) && (mailList[i] !== userInput)) console.log("La mail non è presente!")
}
