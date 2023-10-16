function scegliRegalo(budget, consegnaPrime, piaceLampada, piaceStilografica, piaceLibro) {
    if (consegnaPrime && piaceLampada && budget >= 50) {
        return "Opta per la lampada da tavolo!";
    } else if (budget >= 30 && piaceStilografica) {
        return "Opta per la penna stilografica!";
    } else {
        return "Opta per un buon libro classico!";
    }
}


const budgetUtente = 40;
const consegnaPrimeUtente = true;
const piaceLampadaUtente = true;
const piaceStilograficaUtente = false;
const piaceLibroUtente = true;

const regaloSuggerito = scegliRegalo(budgetUtente, consegnaPrimeUtente, piaceLampadaUtente, piaceStilograficaUtente, piaceLibroUtente);

console.log(regaloSuggerito);
