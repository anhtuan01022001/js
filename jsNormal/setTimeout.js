// setTimeout
// clearTimeout
//setTimeout(fn,ms); // miliseconds  // đặt đồng hồ bấm giờ, với hàm truyền vào và đơn vị đếm ngc, chạy 1 timer đếm ngc về 0
// timer

/*function done(){
    console.log('Finish');
}; 
*/
console.log('Start');
setTimeout(function done(){ // anonymous function // setTimeout(done, 1000);
    console.log('Finish'); 
}, 1000); // sau 1 giây nó hiện Finish
console.log('Done');


// 
 let ok = function(){
     console.log('Finish');
 };

console.log('Start');
let timeoutId  = setTimeout(ok, 1000);
console.log('Ok');
clearTimeout(timeoutId); // muốn hủy timer giữa chừng thì chỉ cần clearTimeout
