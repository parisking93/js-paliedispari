// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

// funzione palindroma 
function palindroma(parola) {
    parola = parola.toLowerCase();
    var newParola = '';
    for (i = parola.length - 1; i >= 0; i--) {
        newParola += parola[i]
    }
    if (newParola == parola ) {
        return [newParola, true];
    } else {
        return [newParola, false];
    }
}
// input 
var pali = prompt('inserisci una parola');

// output 
var check = palindroma(pali);
if (check[1]) {
    document.getElementById('parola').innerHTML = 'La parola inserita è palindroma : ' + check[0];
} else {
    document.getElementById('parola').innerHTML = 'La parola inserita non è palindroma : ' + check[0];
}



// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rand(min,max) {
    var nRandom = Math.floor((Math.random() * ((max + 1) - min) + min))
    return nRandom
}
var pcRandom = rand(1,5);


// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var checkCampi = true;

while (checkCampi) {
    var parOdisp = prompt('scegli pari o dispari');
    var numero = parseInt(prompt('scegli un numero da 1 a 5'));
    checkCampi = false;
    // controllo che i valori inseriti siano correti 
    if (!(isNaN(parOdisp)) || isNaN(numero)){
        alert('inserisci i valori corretti nei giusti campi');
        checkCampi = true;
    }
    if (parOdisp !== 'pari' && parOdisp !== 'dispari') {
        alert('puoi scegliere solo pari o dispari');
        checkCampi = true;
    }
    if (numero < 1 || numero > 5) {
        alert('il numero deve essere compreso tra 1  e 5');
        checkCampi = true;
    }
}


// Sommiamo i due numeri.
var somma = pcRandom + numero;


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

function checkPoD(number) {
    if(number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

var risult = checkPoD(somma);
    document.getElementById('somma').innerHTML = 'il tuo numero è ' + numero + '  e hai scelto ' + parOdisp + '<br>' + 'il numero del pc è ' + pcRandom + '<br>' + 'la loro somma è ' + somma ;

if (risult == parOdisp) {
    document.getElementById('par-disp').innerHTML = 'il numero è ' + risult + ' HAI VINTO';
    // console.log(pcRandom, numero);
} else {
    document.getElementById('par-disp').innerHTML = 'il numero è ' + risult + ' HAI PERSO';
    // console.log(pcRandom, numero);
}