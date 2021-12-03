// Promise - lập trình không đồng bộ
// moduce sử dụng Promise là  promise-fs

// npm init -> npm install --save promise-fs

var fs = require('promise-fs');

function onDone(song){
    console.log(song);
}

function onError(error){
    console.log(error);
}

function readFile(path) {
    return fs.readFile(path, { encoding: 'utf8'});
}

readFile('song1.txt')
    .then(onDone) // để nhận vào nd 1 file nào đấy 
    .then(function(){
        return readFile('song2.txt'); // để thằng then tiếp theo chờ then trc đó thì cần trả về 1 promise 
    })
    .then(onDone)
    .catch(onError);

// tạo ra 1 moduce giống như cái trên

var fs = require('fs');

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

readFilePromise('song1.txt')
    .then(function(song1){
        console.log(song1);
    })
    .catch(function(error){
        console.log(error);
    });



