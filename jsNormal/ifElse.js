// if .... else
// 
// syntax: 
// 
/* if (condition){ // nếu cái gì đó xảy ra 
    statement when true;  // thì cái gì ....
}else { // nếu không thì 
    statement when false;// .....
}

*/

// Example 1: toss a coin : tung đồng xu

function tossCoin() {
    let value = Math.random(); // math.random
    if(value < 0.5 ){
        console.log("mặt sấp");
    }else{
        console.log("Mặt ngửa");
    }
}
tossCoin();


// shouDateHer

function shoulDateHer() {
    let value = Math.random();
    if(value < 0.5 ){
        console.log("Yes, of course");
    }else{
        console.log("No, she has a boy friend");
    }
}

shoulDateHer();

// money

function countBills(){
    let total = 0;

    for (let bill of bills){
        if(!bill.fake){
        total += bill.value;
        }else{
            console.log("fake bill: ",  bill);
        }
    }
    return total;
}

let bills = [
    {value: 10000},
    {value: 20000},
    {value: 50000, fake: true},
    {value: 20000},
    {value: 500000},
    {value: 200000, fake: true},
    {value: 10000}
];

let total = countBills(bills);
console.log(total);


// Ternary operator  thỉnh thoảng được dùng để thay thế if hoặc else
//  
// Syntax:
// condition ? expression when true : expression when false

 
function tossCoin1() {
    let value = Math.random(); // math.random
    let result = (value < 0.5) ? 'mặt sấp' : 'mặt ngửa';
    console.log(result);
}
tossCoin1();


// if .... else if ... else
// Syntax: 
/* if(condition1){
    statement1;
}else if(condition2){
    statement2;
}else{
    statement3;
}

*/

/* Example: calculate bus ticket fee
    - if age < 15 , discount 20%
    - else if age >60 , discount 10%
    - otherwise  10000/ticket
*/

function getTicketFee(person) {
    const basePrice = 10000;
    if(person.age < 15){
        return basePrice * 0.8;
    }else if(person.age > 60){
        return basePrice * 0.9;
    }else {
        return basePrice;
    }
}

let person = { 
    age: 16
};

let fee = getTicketFee(person);
console.log(fee);




