//  SCRIPT PER CREAZIONE CALCOLATORE DI PREZZO PER BIGLIETTO DEL TRENO


//  PARAMETRI INIZIALI RELATIVI ALL'ETA' ED AI KM DA EFFETTUARE

const km = parseInt(prompt("Inserisci qui i Kilometri che intendi percorrere"));
const eta = parseInt(prompt("Inserisci qui la tua età"));

//  FINE PARAMETRI INIZIALI RELATIVI ALL'ETA' ED AI KM DA EFFETTUARE

const prezzoKm = "0.21";

document.getElementById("n-km").innerHTML = `I km che vuoi percorrere sono: ${km} km`;
document.getElementById("age").innerHTML = `La tua età è: ${eta} Anni`;


let prezzoDistanzaPercorsa = km * prezzoKm;

const prezzo_Over65 = prezzoDistanzaPercorsa / 100 * 60;

const prezzo_Under18 = prezzoDistanzaPercorsa / 100 * 80;

console.log("Prezzo per Km: " + prezzoDistanzaPercorsa);

if (eta >= 65) {
    prezzo_Over65;
    console.log ("Prezzo per over 65: " + prezzo_Over65.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è:  ${prezzo_Over65.toFixed(2)} €`;

} else if (eta < 18) {
    prezzo_Under20;
    console.log ("Prezzo per under 18 " + prezzo_Under18.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è: ${prezzo_Under18.toFixed(2)} €`;
} else {
    prezzoDistanzaPercorsa;
    console.log (prezzoDistanzaPercorsa.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è: ${prezzoDistanzaPercorsa.toFixed(2)} €`;
};



