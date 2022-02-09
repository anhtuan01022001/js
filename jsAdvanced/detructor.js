//  Destructuring
// dở bỏ cấu trúc

// Array 
const arr = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = arr;
const [f, , , g] = arr;
const [a, ...b] = arr;
console.log(a, e); // => a=10 , e=50
console.log(d); // => d=40 => bỏ qua 2 giá trị
console.log(a, b); // => a = 10, b= [20,30,40,50]

//Object 
const obj = {
    x: 1,
    y: 2,
    z: 3
}

const { x, y, z } = obj;
console.log(x, y, z);
// => lấy các ptu trong Object ra