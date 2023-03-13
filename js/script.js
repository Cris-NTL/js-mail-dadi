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
        console.log('Accesso autorizzato');
    }

}

console.log(result);

if (result === false) {

    console.log('Accesso negato');

}