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
    // console.log(nome)
    let km = parseInt(document.getElementById('km').value);
    // console.log(km)
    let age = document.getElementById('age').value;
    // console.log(age)

    const kmPrice = 0.21;
    let regularPrice = (km * kmPrice);

    if(nome === '' || km === ''){
        alert('Devi inserire dei valori!')
    }

    if(age === 'minorenne'){
        finalPrice = (regularPrice - (regularPrice * 0.2)).toFixed(2);
        // console.log(finalPrice)
    } else if (age === 'over65') {
        finalPrice = (regularPrice - (regularPrice * 0.4)).toFixed(2);
        // console.log(finalPrice)
    } else {
        finalPrice = (regularPrice).toFixed(2)
        // console.log(finalPrice)
    }
})

