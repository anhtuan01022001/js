// global context
// function context
// bind 

var mouse = {
    name : 'mickey',
    sayHi : function(){
        console.log('Hi, my name is', this.name);
    }
};

// mouse.sayHi(); gọi methods sayHi trên biến mouse
// var say = mouse.sayHi; // say là 1 function - gán function vào biến
// // say = function(){console.log...}
// say();// k có context, this là global context 

var cat = {
    name : 'Tom'
};

var say = mouse.sayHi.bind(mouse);// output : Hi, my name is + mouse(this).name  

console.log(say());


// ứng dụng

// html: <button id="smartBtn">Smart Button</button>
// var button = document.getElementById('smartBtn');

// var mouse1= {
//     name : 'mickey1',
//     sayHello : function(){
//         console.log('Hello, my name is', this.name);
//     }
// };

// button.addEventListener('click', mouse1.sayHello.bind(mouse1));
