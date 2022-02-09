// static method
// khác vs method normal : k được gọi từ instance của class 
// mà được gọi từ chính class đó
// static dùng để viết ngắn gọn hơn

class Foo {
    static someMethod() {
        console.log("some Method");
    }

    anotherMethod() {
        console.log("another Method");
    }
}

Foo.someMethod();

/*
const foo = new Foo(); // instance
Foo.anotherMethod();
*/

/*
function Foo() {

};

Foo.prototype.anotherMethod = function() {

};
*/

/*
Foo.someMethod = function() {

}
*/

// dùng để tạo các biến chỉ truy cập bởi class mà các instance k truy cập đc