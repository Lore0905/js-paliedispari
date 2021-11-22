// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const wordRequest = prompt('Dimmi una Parola');

let userWordType = palindroma(wordRequest);
console.log(userWordType);


// creo la funzione 
function palindroma(word){

    // suddivido la parola in lettere con il ciclo FOR ed  inverto le lettere 
    for( let i = wordRequest.length; i >= 0; i--){
    let totalWordReverse = wordRequest[i];

    let typeWord;

    if(totalWordReverse === wordRequest){
        typeWord = 'è una parola palindroma';
    }else{
        typeWord = 'non è una parola palindroma';
    }
}
return typeWord;
}