// class - oop của js

class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

const mouse = new Mouse('Mickey');
mouse.name();

// class giống như prototype

// class inheritance : có khả năng thừa kế
// eg: người thừa kế từ được

// class Animal {
//     constructor(name){
//         this.name = name; 
//     }

//     eat(){
//         console.log('Eating...');
//     }
// }

// class Bird extends Animal {
//     fly(){
//         console.log('Flying....');
//     }
// }

// class Parrot extends bird {
//     fly(){
//         console.log('Speaking...');
//     }
// }

// const bird = new Bird('Thông');
// console.log(bird.speak);

function Animal(name) {
    this.name = name;
}

Animal.apply.eat