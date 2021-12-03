/* switch ... case 1:

Syntax: 
switch (expression) {
    case value1:
        // do something;
        break;
    case value2:
        // do something;
        break;
    ... 
    default:
        // do something:
        break;
}

*/


/* bronze, silver, gold, diamond 
discount:    
bronze: 2%
silver: 5%
gold: 8%
diamond: 10%

*/
// if...else if ... else

let memberCard = { 
    tier: 'silver'
};

function getTotal(price, card){
    let discountRate;

    if(card.tier === 'bronze') {
        discountRate = 0.02;
    }else if(card.tier === 'silver') {
        discountRate = 0.05;
    }else if(card.tier === 'gold'){
        discountRate = 0.08;
    }else{
        discountRate = 0.1;
    }

    return price = (1 - discountRate);
}

let total = getTotal(500000, memberCard);
console.log(total*500000);

// switch ... case
// break;
let memberCard1 = { 
    tier: 'gold'
};

function getTotal1(price, card){
    let discountRate;
    switch(card.tier){
        case 'bronze':
            discountRate = 0.02;
        break;
        case 'silver' :
            discountRate = 0.05;
        break;
        case 'gold' :
            discountRate = 0.08;
        break;
        case 'diamond' :
            discountRate = 0.1;
        break;
    }
    return price = (1 - discountRate);
}

let total1 = getTotal1(50000,memberCard1);
console.log(total1 * 500000);


// red, green,  yellow

let trafficLight = 'green';

function goOrNotInVietNam(lightValue){
    switch(lightValue){
        case 'red' :
            console.log('stop');
        break;
        
        case 'yellow' :
        case 'green':
            console.log('go');
        break;
    }
}

goOrNotInVietNam(trafficLight);


/* while  do....while  loops
 Syntax

 while (condition){
     do something
 }
 for(let i =1; i<=10; i++){
     console.log(i);
 }

*/
//while
let i =1;

while(i <= 10) {
    console.log(i);
    i++;
}

console.log('abc',i);


// do...while : vòng lặp ít nhất 1 lần 

// do{
//     console.log(i);
//     i++;
// }while(i <= 10);





