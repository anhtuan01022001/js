// Date
// moment.js 
// khai báo ngày tháng

let now = new Date();  // tạo 1 object 
let yourBirthday = new Date(2001,7,2); // khai báo birthday của bạn 2/8/2001
// trong mỗi date object này nó có 1 gtri bên trong, mỗi date là 1 khoảnh khắc 
// number of miliseconds from 1-1-1970 VN +7   NB +9

console.log(now.getTime());
console.log(yourBirthday.getTime());

// read date javascrips trên mozilla

// gt về npm moment :
// npm init -> npm install moment --save 


let moment =  require('moment');

let nowDay = moment('2021-11-25 07:00'); 
console.log(nowDay.fromNow);// ứng dụng cho so sánh ngày
// dùng format(YYYY/MM/DD) => để định dạng ra hiển thị 