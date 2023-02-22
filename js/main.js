const km = parseInt(prompt("Inserisci qui i Kilometri che intendi percorrere"));
const eta = parseInt(prompt("Inserisci qui la tua età"));
const prezzoKm = "0.21";

document.getElementById("n-km").innerHTML = `I km che vuoi percorrere sono: ${km} km`;
document.getElementById("age").innerHTML = `La tua età è: ${eta} Anni`;


let prezzoDistanzaPercorsa = km * prezzoKm;

const prezzo_Over60 = prezzoDistanzaPercorsa / "100" * "60";

const prezzo_Under20 = prezzoDistanzaPercorsa / "100" * "80";

console.log("Prezzo per Km: " + prezzoDistanzaPercorsa);

if (eta >= "60") {
    prezzo_Over60;
    console.log ("Prezzo per over 60: " + prezzo_Over60.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è:  ${prezzo_Over60.toFixed(2)} €`;

} else if (eta < "20") {
    prezzo_Under20;
    console.log ("Prezzo per under 20 " + prezzo_Under20.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è: ${prezzo_Under20.toFixed(2)} €`;
} else {
    prezzoDistanzaPercorsa;
    console.log (prezzoDistanzaPercorsa.toFixed(2));
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto è: ${prezzoDistanzaPercorsa.toFixed(2)} €`;
};



