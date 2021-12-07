// method Call

function greeting(){
    console.log(`Hi!, ${this.name}.  I am ${this.age}.`);
}

const cat = {
    name: 'Tom',
    age: '100'
};

greeting.call(cat); // null là tham số đầu tiên
// call nhận vào bao nhiêu tham số cũng được
//nhưng tham số đầu tiên là tham số đại diện cho this ..., từ tham số 
// thứ 2 trở đi thì nó sẽ là tham số của hàm
