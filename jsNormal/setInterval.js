// setInterval
// clearInterval
// setInterval(fn,ms);  // thực hiện fn liên tục sau mỗi khoảng ms thì sẽ gọi hàm fn ra

// 

let i = 0;
let intervalId = setInterval(function(){
    ++i;
    console.log(i);
    if(i === 10){
        clearInterval(intervalId);
    }
}, 1000);

// exercises : Write a function count from 1 to 10    thử viết 1 hàm đếm từ 1 đến 10
// return a promise    trả về 1 promise

function countFrom(a,b){
    // ?
    
}

countFrom(1,10).then(function(){
    console.log('Done');
});
