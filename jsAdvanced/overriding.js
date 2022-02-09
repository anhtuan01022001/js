// method overriding : ghi đè lại 1 method 

class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee....');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
        console.log('making coffee and do something...');
        cb();
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
console.log(coffeeMachine.makeCoffee(function() {
    console.log('Call the boss');
}));