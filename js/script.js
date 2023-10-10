// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const generateBtn = document.querySelector('.btn-outline-light');

generateBtn.addEventListener('click', function(){
    let nome = document.getElementById('nc').value;
    console.log(nome)
    let km = document.getElementById('km').value;
    console.log(km)
    let age = document.getElementById('age').value;
    console.log(age)    
})

