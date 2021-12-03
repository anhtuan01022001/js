
// aray methods

let a = [1,2,3,4,5];
let b = [6,7];
let c = 8;

// a.concat(b);  a = [a,b] =[1,2,3,4,5,6,7];

// a.push(c);  a.lenght = a.lenght + lenght c

// a.pop();  return on the end of the componented (at end a) 

// a.shift();  Returns the first element out of the array, returns the value that was just ejected 

// a.unshift();  nhét vào vị trí đầu tiên, các ptu còn lại lùi lại 



//----------------------------------------------------------------

/* 
    - const là tín hiệu cho biết số nhận dạng sẽ không được chỉ định lại.

    - let, là một tín hiệu cho thấy biến có thể được gán lại, chẳng hạn như bộ đếm trong vòng lặp hoặc hoán đổi giá trị trong một thuật toán.
      Nó cũng báo hiệu rằng biến sẽ chỉ được sử dụng trong khối mà nó được định nghĩa, không phải lúc nào cũng là toàn bộ hàm chứa.

    - var hiện là tín hiệu yếu nhất có sẵn khi bạn xác định một biến trong JavaScript.
      Biến có thể được gán lại hoặc không, và biến có thể được hoặc không được sử dụng cho toàn bộ một hàm, hoặc chỉ cho mục đích của một khối hoặc vòng lặp.

  let= có thể được gán lại
  const= không thể được gán lại (const xuất phát từ hằng số, dạng viết tắt 'const')

  Phạm vi của biến var là hàm và phạm vi globle nhưng phạm vi biến let là phạm vi khối (dấu ngoặc nhọn {})

  Chỉ sử dụng từ khóa var khi bạn muốn đặt biến là toàn cục trong tập lệnh của mình hoặc bạn muốn khai báo lại cùng một biến trong cùng phạm vi.
  Hãy sử dụng từ khóa let khi bạn muốn đặt biến làm phạm vi hàm, phạm vi khối, phạm vi vòng lặp hoặc không muốn khai báo lại biến trong cùng phạm vi.

  */

const myFun=()=> {
      var str1 = "hello";
      let str2 = "program";
    
      console.log(str1, str2); // hello program
    
      {
        var myvar1 = "hiii"
        let myvar2 = "ooo";
        console.log(myvar1, myvar2); // hiii ooo
      }
    
      console.log(myvar1); // hiii
      console.log(myvar2); // ReferenceError
    }
    console.log(myvar1); // not defined
    myFun();

// ------------------------------------------------------------------------------------------------

/*  Array forEach
   forEach() được sử dụng khi bạn muốn duyệt các phần tử mảng.

  Cú pháp: array.forEach(function(currentValue, index, arr), thisValue)

*/

var users = [
    { id: 1, name: 'Binh' },
    { id: 2, name: 'Trang' },
    { id: 3, name: 'Minh' },
];
 
users.forEach(function (user) {
    console.log(user.name);
});

//------------------------------------------------------------------------------------------------


