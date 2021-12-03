//Node built-in module các module có trong nodejs

let fs = require('fs');

let text = fs.readFileSync('./hello.txt',{encoding: 'utf8'}); // đọc file txt cùng folder
console.log(text);

fs.writeFileSync('./alo.txt','I am Tuan'); // viết và tạo file mới