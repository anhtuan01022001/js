//hoisting

// var x =5;
// function run(){
//     var x = 10;
//     console.log(x);
// }

// run();

// var let const
// 1. declaration (khai báo biến)
// 2. hoisting
// 3. block scope (if, for,)
// 4. redeclaration ( khia báo lại)

var a = 2 ;
console.log(a);
var a = 3;
console.log(a); // var thì có thể khai báo lại 

let b = 4 ;
console.log(b);

const c = 5; // khi khai báo const cho 1 biến thì biến đó phải có gtri và k thay đổi
console.log(c);

// hoisting
function run(){
    console.log(a);
    var a = 1;
}

run(); // => undefined đs vs var , còn dùng let thì sẽ is not defined       

// var thì có function scope
function run1(){
    var x = 1; // x chỉ tồn tại bên trong function
}

// let vs const thì có block scope
// scope : trong dấu {} ngoại trừ khai báo object vs block scope(if, for, )

{
    const y = 2;
    console.log(y);
}
// => output : 2

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log(i);
 // dùng let sẽ bị lỗi   và k dùng const cho vòng lặp for 


for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log(i); // => vòng lặp từ 0 -> 9

// giả sử có 2 vlap for

for(let i = 0; i < 10; i+=2){
    console.log(i);
} // -> 0 2 4  6 8

// muốn ghan số scope  lại


// khai báo lại : var 
// let và const sinh ra để khắc phục sự k tuân thủ block scope 
// và hiệu ứng không mong muốn 
