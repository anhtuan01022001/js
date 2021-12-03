// Promise.all 

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8'}, function(err, data) {
            if (err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}


// resolve k cần biết thứ tự

readFilePromise('./song1.txt')
    .then(function(song1){
        console.log(song1);
        return readFilePromise('./song1.txt');
    })
    .then(function(song2){
        console.log(song2);
        return readFilePromise('./song2.txt');
    })
    .then(function(song3){
        console.log(song3);
        return readFilePromise('./song3.txt');
    });


// Promise.all resolve all , rút gọn các method khi gọi promise

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song4.txt')
]).then(function(values){
    console.log(values); // khi đúng file thì nó sẽ đọc về file đó
}).catch.apply(function(error){
    console.log(error);// nếu file k tồn tại thì nó sẽ trả về
});

