// template string

function greeting(name){
    return 'Hello, ' + name + '!';
}

function greeting2(name){
    return `Hello, ${name}!`; // có thể viết tên, hàm, các phép toán,... vào bên trong $()
    // thay thế cách viết string bên trên 
}

let result = greeting('Mậm');
console.log(result);

let result = greeting2('Mậm');
console.log(result);



