// node module: biến file dài thành các phần mô tả sang các module riêng biệt cùng 1 thư mục


var Mouse = require('./mouse'); // liên kết các file cùng thư mục 
var Cat = require('./cat');


let mickey = new Mouse('black');
let jerry = new Mouse('orange');
console.log(mickey);
console.log(jerry);

let tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);