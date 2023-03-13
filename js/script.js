// Controllo mail

// Controllare userMail
// Verificare presenza in lista email autorizzate
// Stampa controllo

// array email autorizzate
const email = ['paolo@gmail.com', 'giovanna@hotmail.com', 'luigi@yahoo.com', 'mario@hmail.com'];
console.log(email);

// istruzione inserimento email da utente
const userMail = prompt('Inserisci la tua email');

// fase di controllo
let result = false;

for (let i = 0; i < email.length; i++) {
    const verifiedEmail = email[i];
    if (userMail === verifiedEmail) {
        result = true;
    }
}

// stampa in html il controllo
const resultElement = document.getElementById("text");
if (result) {
    resultElement.innerHTML = "Accesso autorizzato";
} else {
    resultElement.innerHTML = "Accesso negato";
}


// Dadi

// User e PC avranno un numero random
// Il punto più alto vince la mano

// randomizzare un numero per ogni giocatore
const userNumber = Math.floor((Math.random() * 6) + 1);
const pcNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber, pcNumber);

// stampa i numeri
let numbersElement = document.getElementById("numbers");
numbersElement.innerHTML = `Giocatore: ${userNumber} Computer: ${pcNumber}`;

// definire il vincitore
let player = ''

if (userNumber > pcNumber) {
    player = 'Hai vinto questa mano'
} else if (userNumber < pcNumber) {
    player = 'Hai perso questa mano'
} else {
    player = 'Hai chiuso in pari questa mano'
}

// stampare il risultato
const resultGameElement = document.getElementById("textGame");
resultGameElement.innerHTML = player;
