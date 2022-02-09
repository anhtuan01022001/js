// closure

// function sum(a,b){
//     const c = a+b;

//     return function(c){
//         console.log (c); // hàm con này có thể truy cập các biến bên ngoài
//     }
// }
// sum(1,2)(); 
// ứng dụng: function factory 

function debug(name) {
    return function(str) {
        console.log(`[${name} ${str}]`);
    }
}

const log = debug('Mouse'); // tên của hàm lúc trước đc truyền vào
log('Error happened'); // string này sẽ được truyền vào {str}