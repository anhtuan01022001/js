/*    Array find
    find() được sử dụng khi bạn muốn tìm phần tử mảng đầu tiên thỏa mãn điều kiện mà bạn đặt ra.
    Systax: array.find(function(currentValue, index, arr), thisValue). */

    let numbers3 = [1,2,3,4,5];

    let number3 = numbers3.find(function(x)
        {
            return x % 2 === 0;
    });
    console.log(number3); // => hiện ra giá trị first thõa mãn đk 
    