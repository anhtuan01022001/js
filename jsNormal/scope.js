// scope - phạm vi active nào đấy, những biến đc khai báo trong hàm đấy thì gọi là local scope
// 1. Global scope  // rộng
// 2. Local scope   // 1 phần bên trong 
// when a function is executed -> create a new scope 

let a=1;
let b = 2;

function random(x){
    var b = Math.random(); // b of local scope random 
    // a = 3 ; // maybe thay đổi biến biến ở global scope bên trong local scope
    console.log(b * x); // có thể truy cập b trong local scope  của nó 
    // console.log(a);

}

function doSomething() {
    a = 5;
}

var y = random(a); // cần tránh thay đổi đầu vào

// console.log(b);// k thể truy cập b ở bên ngoài 
// doSomething();
// random(); 
// console.log(a);

// k nên giữ pvi active của 1 biến quá to, có nghĩa là nó cần có ghạn ( nguyên tắc )
