// toán tử spread

const a = [1, 2, 3];
const b = [0, ...a, 4];
// rest thì để gom các giá trị thành 1 array
// spread để lồng các ptu array này vào array khác
// spread trải các gtri của 1 array thành các ptu 

console.log(b);

const a = [1, 2, 3];

function sum(...numbers) {

}

sum(...a); // thay thế numbers = các ptu của a rồi tính sum

// spread part 2 

// spread an array
const c = [1, 2, 3];
const d = [1, ...c, 4];
console.log(d); // => d = [1,2,3,4]

// spread an object 
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10 }
};


const obj2 = {};

for (let key in obj1) {
    obj2[key] = obj1[key];
}
obj2.b = 5; // thay đổi gtri ptu trong obj2 nhưng k
// // làm thay đổi obj1
console.log({ obj1, obj2 });
obj2.d.e = 9; // thay đổi gtri ptu trong obj2 vẫn làm 
// thay đổi obj1
// dùng deep clone để giải quyết vấn đề tham chiếu 
console.log({ obj1, obj2 });

// shadow clone
let obj3 = {
    ...obj1,
    z: 100
}

console.log({ obj1, obj3 });