/* array reduce
    reduce() được sử dụng khi bạn muốn thực thi một callback lên từng phần tử (từ trái qua phải) với một biến được “tích lũy” để trả về một giá trị duy nhất.
    syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

let orders  = [
    {name : 'A', quantity: 2, unitPrice : 100},
    {name : 'B', quantity:1, unitPrice:400},
    {name : 'C', quantity:5, unitPrice:15}
  ];
  let sumOders = orders.reduce(function(a,b){
    return a + b.quantity * b.unitPrice;
  },0);
  console.log(sumOders);
  