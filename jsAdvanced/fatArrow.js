// arrow function expensive
// fat arrow 
// cách thay thế 1 function

// function sum(a,b){
//     return a+b;
// };
// sum(1,2); //

// let sum2 = function(){
//     return a + b;
// };
// sum2(3,2); 

// let sum = (a,b) => {
//     return a + b;
// };
let sum = (a,b) => a + b;
console.log(sum(1,2));
// let square = (x) => x*x;
let square = x => x*x;
console.log(square(5));

// let doSomething = () => Date.now();
// doSomething();

// let arr = [1,2,3];
// arr.map(function(x){
//     return x*x;
// });

let arr = [1,2,3,4,5];
console.log(arr.map(x => x*x)); 

// part2 

// var a  ={
//     name : 'AAA',
//     run: function() {
//         var run2 = function() {
//             console.log(this.name);
//         }.bind(a); // dòng console.log(this.name ) vẫn ra undefined , nhưng tên của a vẫn được lấy ra
//         run2; // khi chạy hàm run thì nó chạy hàm run2() -> this là lobel context -> k có name nào cả
//         // để khắc phục => dùng bind -> run2.bind(a) -> khi chạy thì a đc truyền vào run2
    
//     }
// }
// a.run(); 

// var a  ={
//     name : 'AAA',
//     run: function() {
//         var run2 = () => { // arrow function expensive k có context  -> biến this  là biến this của cái hàm nó nằm trong 
//             console.log(this.name);
//         };
//         run2();  // dùng fat arrow
//     }
// }
// a.run(); 

// cách 1 
var a  = { 
    foo: 'bar',
    run: function() {
        setTimeout(function() {
            console.log(this.foo);
        }.bind(this),2000);
    }
};
a.run();

// cách 2 : 

var b  = { 
    foo: 'table',
    run: function() {
        setTimeout(function() {
            console.log(this.foo);
        }.bind(a),2000);
    }
};
b.run();




// cách 3 : 

let c  = { 
    foo: 'tennis',
    run: function() {
        var that = this;
        setTimeout(function() {
            console.log(that.foo);
        },2000);
    }
};
c.run();

// cách 4 : 

let d  = { 
    foo: 'tennis',
    run: function() {
        setTimeout(() => {
            console.log(this.foo);
        },2000);
    }
};
d.run();


// xem thêm tài liệu về arrow function trên trang npm

