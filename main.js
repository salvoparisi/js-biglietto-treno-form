let generation = document.getElementById('generation');
let yourTicket = document.getElementById('your-ticket');

generation.addEventListener('click', function() {
    let nameSurname = document.getElementById('name-surname').value;
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    age = +age; 
    km = +km

    if(nameSurname==''){
        alert("Metti il tuo nome e cognome")
        throw new Error("Nome non dato");
    }
    if(isNaN(km)){
        alert("Inserire il numero di km")
        throw new Error("km non dati");
    }
    if(age==1){
        alert("Scegliere la tua fascia d'eta")
        throw new Error("fascia d'eta non data");
    }

    const price_km = 0.21;
    const sale_minor = 0.20;
    const sale_over = 0.40;

    let price_nosale = km * price_km;

    let final_price;

    if (age == 2) {  
        final_price = price_nosale - (price_nosale * sale_minor);
    } else if (age == 4) {  
        final_price = price_nosale - (price_nosale * sale_over);
    } else {  
        final_price = price_nosale;
    }

    let final_price_fixed = final_price.toFixed(2); 

    let sale;
    if (age == 2) {
        sale = '20% Minori';
    } else if (age == 4) {
        sale = '40% Over65';
    } else {
        sale = 'Nessun Offerta';
    }

    let carrozza = Math.floor(Math.random() * 10) + 1;
    let CP = Math.floor(Math.random() * 10000) + 1;

    yourTicket.innerHTML = `
        <h1 class="text-white">Il tuo biglietto</h1>
        <div class="container bg-white rounded shadow d-flex justify-content-between">
            <div class="d-flex justify-content-start">
                <div class="m-3">
                    <strong>Nome e Cognome:</strong> <br>
                    <strong>${nameSurname}</strong>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-end">
                <div class="m-3">
                    <span>Offerta:</span> <br>
                    <span>${sale}</span>
                </div>
                <div class="m-3">
                    <span>Carrozza:</span> <br>
                    <span>${carrozza}</span>
                </div>
                <div class="m-3">
                    <span>Codice CP:</span> <br>
                    <span>${CP}</span>
                </div>
                <div class="m-3">
                    <span>Costo biglietto:</span> <br>
                    <span>$${final_price_fixed}</span>
                </div>
            </div>
        </div>
    `;
});
