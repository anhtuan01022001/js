// value types vs. reference types

let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

let obj1 = { a: 1 };
// reference types 
// biến sẽ lưu gtri tham chiếu đến gtri thực tế
// của object đấy 
// obj1 sẽ lưu trữ vị trí chứa ngôi nhà đó 
let obj2 = { a: 1 };
console.log(obj1 === obj2);
// so sánh số của 2 ngôi nhà => khác nhau => false 

// refence types có 3 kiểu: obj, array, function 
// value types là các kiểu còn lại 

let a3 = a2; // copy gtri của a2 sang cho a3 
a3 = 2; // a3 thay đổi
console.log(a2); // a2 vẫn = 1 

let obj3 = obj2; // gán địa chỉ tham chiếu obj2 cho obj2
obj3.a = 2; // khi gtri trong obj3 thay đổi thì obj2 cũng vậy 
console.log(obj2); // obj2 = {a:2};

let a4 = a2;
console.log(a4 === a2); // => true
a4 = 2;
console.log(a4 === a2); // => false do a4 đã thay đổi 

let obj4 = obj2; // địa chỉ tham chiếu cuả a2 cũng sẽ của a4
console.log(obj4 === obj2); // => true
obj4.a = 2;
console.log(obj4 === obj2); // => true 
// vì bản chất của refence này là so sánh địa chỉ tham chiếu
// mà chúng ta đã khai báo từ ngay ban đầu cho obj4 vs obj2 cùng địa chỉ tham chiếu 

// viết hàm thì tránh thay đổi input