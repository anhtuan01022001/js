/* Array filter
    filter() được sử dụng để lọc các phần tử trong mảng theo một điều kiện mà bạn đặt ra. 
    Phương thức này sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.
    Syntax: array.filter(function(currentValue, index, arr), thisValue). */

    let numbers2 = [1,2,3,4,5];
    let number2 = numbers2.filter(function(x){
        return x % 2 === 0;  
    });
    console.log(number2); // => [2,4]