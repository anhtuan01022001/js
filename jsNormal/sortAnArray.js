// sort an array sk

let  numbers = [1,5,3,2,7,9,6];
//[1,2,3,5,6,7,9] ascending order

let ascendingNumbers = numbers.sort(function(a,b){
  return a-b;
});
console.log(ascendingNumbers);

//[9,7,6,5,3,2,1] descending order
let descendingNumbers = numbers.sort(function(a,b){
  return b-a;
});
console.log(descendingNumbers);

let employees =[
  { name: 'Tuan', age: 19},
  { name: 'Bac', age:20},
  { name: 'Hiep', age: 18}
];

/* [{ name: 'Bac', age:20},
    { name: 'Tuan', age: 19},
    { name: 'Hiep', age: 18}] */
let ascendingEmployees = employees.sort(function(a,b){
  return a.age - b.age;
});
console.log(ascendingEmployees);

  /* [{ name: 'Hiep', age: 18},
      { name: 'Tuan', age: 19},
      { name: 'Bac', age:20}] */
let descendingEmployees = employees.sort(function(a,b){
  return b.age - a.age;
});
console.log(descendingEmployees);

//BTVN
// 1. Define an array of products ( name,price,stock)
// 2. Sort by price from more expensive to less expensive
// 3. Sort by in stock value from expensive to less expensive(sap xep cac hang con ton kho theo thu tu giam dan)

let products =  [
    { name: 'cake', price: 50, stock : 55 },
    { name: 'fruit', price: 120, stock :36},
    { name: 'soft drink', price: 15, stock:150},
    { name: 'computer', price:2000, stock:2}
];
let ascendingProducts = products.sort(function(a,b){
    return a.price - b.price;
});
console.log(ascendingNumbers);

let descendingProducts = products.sort(function(a,b){
    return b.price * b.stock - a.price * a.stock;
});

console.log(descendingProducts);
