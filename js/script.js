// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const generateBtn = document.querySelector('.btn-outline-light');

generateBtn.addEventListener('click', function () {
    let nome = document.getElementById('nc').value;
    // console.log(nome)
    let km = parseInt(document.getElementById('km').value);
    // console.log(km)
    let age = document.getElementById('age').value;
    // console.log(age)

    const kmPrice = 0.21;
    let regularPrice = (km * kmPrice);

    if (nome === '' || km === '') {
        alert('Devi inserire dei valori!');
    } else {

        const ticket = document.getElementById('ticket')

        const salePrice = document.getElementById('sale');

        if (age === 'minorenne') {
            finalPrice = (regularPrice - (regularPrice * 0.2)).toFixed(2);
            // console.log(finalPrice)
            salePrice.innerHTML = 'Sconto biglietto 20%'
            ticket.classList.remove('d-none')
        } else if (age === 'over65') {
            finalPrice = (regularPrice - (regularPrice * 0.4)).toFixed(2);
            // console.log(finalPrice)
            salePrice.innerHTML = 'Sconto biglietto 40%'
            ticket.classList.remove('d-none')
        } else {
            finalPrice = (regularPrice).toFixed(2);
            // console.log(finalPrice)
            salePrice.innerHTML = 'Biglietto standard'
            ticket.classList.remove('d-none')
        }
    }



    const nomePassenger = document.getElementById('passengername');
    nomePassenger.innerHTML = nome;

    const trainCarriage = document.getElementById('traincarriage');
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    trainCarriage.innerHTML = `${getRndInteger(1, 10)}`

    const codeCp = document.getElementById('codecp');
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    codeCp.innerHTML = `${getRndInteger(10000, 100000)}`

    const ticketPrice = document.getElementById('ticketprice');
    ticketPrice.innerHTML = finalPrice
})

