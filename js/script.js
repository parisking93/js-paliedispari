// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola) {
    var newParola = '';
    for (i = parola.length - 1; i >= 0; i--) {
        newParola += parola[i];
        console.log(newParola);
    }
}

palindroma('otto');