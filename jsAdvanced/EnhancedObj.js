// constructor function 

// cách1: cách khai báo  object
// function Mouse(name){
//     this.name = name;
// }

// mouse.prototype.run = function(){
//     console.log(`${this.name} is running`);
// }

// const mickey = new Mouse('Mickey');
// mickey.run();

// object literal - cách khai báo object thứ 2
// const jerry = {
//     name: 'jerry',
//     run: function(){
//         console.log(`${this.name} is running`);
//     }
// };
// jerry.run();

// ehanced object literal - tính năng
// giúp khai báo ngắn gọn các thuộc tính và các methods cùng như object 

const name = 'Tom';
const cat = {
    name, // là name: name
    run(){
        console.log(`${this.name} is running`);
    }
};

console.log(cat.run());



