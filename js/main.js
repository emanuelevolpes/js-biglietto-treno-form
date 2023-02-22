'use strict';

const numeroChilometri = Number (document.getElementById('numero-chilometri').value);
const etaPasseggero = Number (document.getElementById('eta-passeggero').value);
let genera = document.getElementById('genera');

// console.log(numeroChilometri);
// console.log(etaPasseggero);

let prezzoBiglietto = (0.21 * numeroChilometri);

genera.addEventListener('click',
 function() {

    if (etaPasseggero < 18){
        prezzoBiglietto -= prezzoBiglietto * 0.2;
    
    } else if (etaPasseggero > 65){
        prezzoBiglietto -= prezzoBiglietto * 0.4;

    } else {
        prezzoBiglietto = prezzoBiglietto;
    };

    console.log(parseFloat(prezzoBiglietto).toFixed(2));
 });


