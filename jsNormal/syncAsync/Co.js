// Node co
// npm init -> npm install co --save 

var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8'}, function(err, data){
            if(err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}

// co(function*(){ // gererator function
//     // let song1 = yield readFilePromise('./song1.txt');
//     // let song2 = yield readFilePromise('./song2.txt');
//     // let song3 = yield readFilePromise('./song3.txt');
// let values = yield {
//         readFilePromise('./song1.txt');
//         readFilePromise('./song2.txt');
//         readFilePromise('./song3.txt')
//     };
//     return[song1, song2, song3];
// }).then(function(values){
//     console.log(values);
// }).catch(function(error){
//     console.error(error);
// });

let readFiles = co.wrap(function*(files){ // k trả về promise mà trả về hàm, hàm đó trả về promise
    // [string] -> [promise]
    let values = yield files.map(function(file){
        return readFilePromise(file); // biến cái array file thành 1 array chứa các promise 
    });
    return values; // những giá trị nào đc return ở đây 
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(function(values){ // nó sẽ truyền vào thằng then phía sau này 
        console.log(values);
    });

