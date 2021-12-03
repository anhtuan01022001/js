// Sync vs Async (Synchoromous vs. Asynchromous)

let fs = require('fs');

// Sync
// console.log('Start');
// var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});
// console.log('song1');
// var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
// console.log('song2');
// console.log('End') 
// run theo thu tu

// Make coffee -> 5 minutes
// Wear clothes
// Making bed 

// Sync
// |--------------------|-------------------------|--------------------|----->
// Make coffee          Coffee done               Wear done            Done
//                      Wear clothes              Make bed done     

// Async
// |-------------|---------------|----------|-------|-------------------|----->
// Make coffee   Wear  Clothes  Make bed    Done

//Async
console.log('Start');

fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, song1) {
   console.log(song1);
});
console.log('END'); // run  console.log ben ngoai trc, run // fs....

// Read/Write to FS
// Network
