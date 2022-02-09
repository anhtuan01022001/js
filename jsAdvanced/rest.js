// toán tử rest

/*
function log(a){
    console.log(a);
}

log(1,2,3,4); // nó chỉ log ra 1 mà k có 2 3 4
*/

// function log(a, ...number) {
//     console.log(a);
//     console.log(number); // in ra phần còn lại sau a
//     console.log (arguments); // arguments chứa all biến truyền vào
// }

// log(1, 2, 3, 4);

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5);

function concat(separation, ...strings) {
    return strings.join(separation);
};
concat('.', 'a', 'b', 'c');

// rest hay dùng cho trường hợp k biết số lượng tham số
// đầu  vào là bao nhiêu

// concat có thể dùng để ghép 2 hay nhiều mảng
// có thể dùng rest để giải quyết bài toán ghép mảng