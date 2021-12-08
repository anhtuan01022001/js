// apply
// call: func.call(this, param1,param2, ...); 
// apply: func.apply(this, [param1,param2, ...]);

function sum(){
    const numbers =  Array.from(arguments);
    return numbers.reduce((sum,num) => sum + num,0);
}

function average(){
    //sum 
    const x = sum.apply(null,arguments);
    // sum / arguments.length;
    return x / arguments.length;
}

console.log(average(1,2,3,6)); // (sum = 12 )/(arguments.length =4) = 3