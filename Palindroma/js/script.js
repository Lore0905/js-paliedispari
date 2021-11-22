// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const wordRequest = prompt('Dimmi una Parola');

let userWordType = palindroma(wordRequest);
console.log(userWordType);


// creo la funzione 
function palindroma(word){
    let totalWordReverse = '';
    let typeWord = '';
    // suddivido la parola in lettere con il ciclo FOR ed  inverto le lettere 
    

    for( let i = word.length - 1; i >= 0; i--){
    totalWordReverse += word[i];
        console.log(totalWordReverse);
    }

    if(totalWordReverse === word){
        typeWord = 'è una parola palindroma';
    }else{
        typeWord = 'non è una parola palindroma';
    }
    return typeWord;
}