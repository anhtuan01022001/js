// npm - node package manager 
// developer

// moduce được phát triển bởi cộng đồng

// npm init để  khởi tạo moduce bên ngoài 
//  sau đó nó sẽ tạo ra 1 file .json
// npm install + tên moduce trên npmjs.com  --save => moduce được tạo thêm vào
// muốn check thì lệnh ls 
// ls -al thì hiện thỉ các thư mục 
// sau khi tạo thì chỉ cần require thôi 
// ex : var readLineSync = require('readline-sync');

// cách dùng thì đọc trong phần sd của npm trên npmjs.com



// JSON methods

// JSON object
//  1. stringify - Convert an object into a JSON string
// 2. parse - Convert a JSON string to an object

let myDog = { name: 'Milu', age:1, dead: false};
let myDogString = JSON.stringify(myDog);
console.log(myDog);
console.log(myDogString); // chuyển object thành 1 String 

let myCatString = '{"name": "Tom", "age": 1, "dead": true}';
console.log(myCatString);
let myCat = JSON.parse(myCatString); // chuyển từ String sang object
console.log(myCat);



// Exercise
// 1. Show all students 
// 2. Create a new student
// 3. Save & exit
// >  1.  -> show all students trong file 
// Save to ./data.json -> dùng fs.readFileSync , JSON parse
// > 2. -> hỏi 3 câu hỏi  : your name? Your age? Your class? Your
// > 3.chọn 3 thì nó lưu vào fikle và thoát ct 


// npm init
// npm install readline-sync --s

// => package.json

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./students.json');
    students = JSON.parse(fileContent);
}
function showMenu() {
    console.log('1. Show all student.');
    console.log('2. Create a new student.');
    console.log('3. Save & Exit.');

    var option = readlineSync.question('> ');
    switch (option) {
        case '1': 
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            breaks;
        case '3':
            saveAndExit();
            showMenu();
            break;
        default:
            console.log('wrong option!');
            showMenu();
            break;
    }
}

function showStudents() {
    for ( var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name : ');
    var age = readlineSync.question('age : ');
    var student = {
        name: name,
        age: parseInt(age),
    };
    students.push(student);
}

function saveAndExit() {
    var newContent = JSON.stringify(students);
    console.log(newContent);
    fs.writeFileSync('./students.json',newContent, {encoding: 'utf8'});
}

function main() {
    loadData();
    showMenu();
}
main();
