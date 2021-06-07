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