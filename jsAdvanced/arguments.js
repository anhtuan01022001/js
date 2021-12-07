// Array-like & arguments
// một biến nằm trong all hàm , trừ arrow function ra

// const names = ['Thanh', 'Trang', 'Thủy'];
// for ( let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// const obj = { 
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thủy',
//     length: 3
// };
// for ( let i = 0; i < obj.length; i++){
//     console.log(obj[i]);
// }

// Array-like object là 1 object giống như array , nhưng k có các method như array
// phải có thuộc tính length và có các index giống như array


function sum(){
    let result = 0;
    for(let i = 0; i < arguments.length;i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3));

// cách 2 : 
function sum1(){
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum,num){
        return sum + num;
    }, 0);
}
console.log(sum1(1,2,3,4,5,10,15,20));

// Arguments là 1 biến tồn tại bên trong scop của 1 hàm , hàm đấy là 1 hàm thông thường
// nó có thể đóng vai trò như là array-like object
// đọc thêm trên trang npm

