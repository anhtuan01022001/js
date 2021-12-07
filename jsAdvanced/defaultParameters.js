// default Parameters 

function greeting(name = 'friend', language){ // nếu mà các bạn k truyền gtri nào vào hàm này
    // thì name = friend
    // if (name == undefined){ // nếu tên k tồn tại
    //    name = 'Friend';  // trả về name = 'Friend' ->  -> Hello Friend
    // }
    if (language == 'en'){ 
        return `Hello, ${name}`;
    }
    if (language == 'ja'){ 
        return `Konichiwa, ${name}`;
    }
    return'chào bạn';
} 

console.log(greeting('Minh',language = 'ja'));


// nghĩa là cái quyết định là truyền giá trị vào greeting()