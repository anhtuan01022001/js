// Higer order functions - hàm có cái thứ tự cao hơn
// là hàm mà nhận vào 1 function làm tham số hoặc trả về 1 function 

function waitAndRun(ms, funct) {
    setTimeOut(funct, ms);
}

function run() {
    console.log('Run');
}

waitAndRun(2000, run); // waiting 2s để chạy function đc truyền vào

// => chia nhỏ ctrinh ra để test và debug