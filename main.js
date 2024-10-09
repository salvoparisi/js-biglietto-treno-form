const price_km = 0.21;
const sale_minor = 0.20;
const sale_over = 0.40;
var price_nosale;
var final_price;
let generation=document.getElementById('generation')
let yourTicket=document.getElementById('your-ticket')

generation.addEventListener('click', function(){
    let nameSurname = document.getElementById('name-surname').value
    let km = document.getElementById('km').value
    let age = document.getElementById('age').value
    age=+age
    age2=''
    switch (age){
        case 1: 
            age2='Selezionare la fascia d eta'
            break;
        case 2: 
            age2='Minorenne'
            break;
        case 3: 
            age2='Maggiorenne'
            break; 
        case 4: 
            age2='Over 65'
            break;
    }

    price_nosale = km * price_km;

    if(age2=='Minorenne'){
        final_price = price_nosale - (price_nosale * sale_minor);
        console.log(final_price.toFixed(2));
    }else if(age=='Over 65'){
        final_price = price_nosale - (price_nosale * sale_over);
        console.log(final_price.toFixed(2));
    }else{
        console.log(price_nosale.toFixed(2));
    }

    yourTicket.innerHTML=`
        Nome: ${nameSurname} <br>
        km da percorrere: ${km} <br>
        fascia d'eta: ${age2}  <br>
        Costo: ${final_price.toFixed(2)} <br>
    `
})