// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// /////////////////////////////////////////////////////////////////////////////////////////





// chiediamo all'utente di scegliere tra pari e dipari
const userOddOrEven = prompt('pari o dispari');
console.log(userOddOrEven);

// chiediamo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt( prompt('scegli un numero da 1 a 5'));
console.log(userNumber);

// generiamo i numeri random del computer
const computerNumber = cNumber(0, 5);
console.log(computerNumber);

// pari o dipari la somma 
let somma = userNumber + computerNumber;

let sEvenOrOdd = theWinnerIs(somma);
console.log(sEvenOrOdd);

// valuto se l'user ha inserito pari o dispari e lo confronto con il numero e stabilisco chi ha vinto
if( somma % 2 === 0 && userOddOrEven == 'pari' ){
    alert = 'the winner is: USER';
}
else{
    alert = 'the winner is: COMPUTER';
}


// CREIAMO LA FUNZIONE 

// creiamo un numero random per il computer da uno a 5
function cNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function theWinnerIs(number){
    // dichiaro la variabile
    let choice;
    // stabiliamo se la somma dei due numeri è pari o dispari
    if ( number % 2 === 0){
        choice = 'pari';
    } 
    else{
        choice = 'dispari';
    }
return choice;
}



