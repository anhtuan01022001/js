// 'new' keyword
// var today = new Date();
// Create a new Object, object literal

var mouse = {
    weight: 0.2,
    getWeight: function() { 
      return this.weight;
      }
  };
  console.log(mouse);
  
  // constructor function
  function Mouse(color,weight){ // các ptu trong object thì có thể thay đổi 
      this.type = 'mouse';
      this.color = color;
      this.weight = weight;
  }
  
  var mouse1 = new Mouse('white',0.2);
  var mouse2 = new Mouse('black',0.5);
  // all function đều gọi new được 
  console.log(mouse1);
  console.log(mouse2);
  
  var tom ={
      name: 'Tom',
      stomach: [],
      eat: function(){
          this.stomach.push(mouse);
          return this;
      } 
  };
  
  var m1 = {name: 'm1', weight:0.3};
  var m2 = {name: 'm2', weight:0.2};
  var m3 = {name: 'm3', weight:0.4};
   
  tom.eat(m1).eat(m2).eat(m3); // methods chaining
  console.log('Tom: '+tom);
  /*
  /* Excercises : create a new object to mouse  m1 m2 m3 and
  
  function mouse(name, weight){
      this.name = name;
      this.weight = weight;
  }
  
  let m1 =  new mouse('m1',0.3);
  let m2 = new mouse('m2',0.2);
  let m3 = new mouse('m3',0.4);
  
  */
  
  /* Normal function :function đã học thì làm 1 cv cụ thể nào đấy
   tên hàm thì thường là động từ, các chữ cái đầu tiên k viết hoa, chữ cái đầu tiên của các từ sau viết hoa 
   các câu lệnh trong hàm nằm trong ngoặc nhọn
  
   Constructor function được sd vs keyword "new" để tạo ra object mới
  bên trong nó k thực hiện gì cả, bên trong nó thường khai báo các thuộc tính
  -> k xác định, chỉ là khuôn mẫu
  
  */
  
  // đến với Prototype thì .prototype đế tham chiếu 
  // trong prototype có 1 cái nhỏ .constructor để tham chiếu ngược lại 
  // => .constructor đó chính là object 
  // Prototype : nó là object và được share giữa all object mà tạo bằng new ( Constructor function ) 
  
  
  Mouse.prototype.sleep = function(){ // prototype của Mouse có các thuộc tính nào
      console.log('Sleeping...');
  };
  
  let jerry = new Mouse('orange', 20);
  jerry.sleep();// thì jerry được tạo từ new thì đều được thừa hưởng thuộc tính của prototype 
  
  let mickey = new Mouse('white', 10);
  mickey.sleep(); 
  
  // cả 2 cái đều giống nhau vì đều trỏ vào prototype
  
  // best practice(thực tế) : thì khai báo bên ngoài hơn 