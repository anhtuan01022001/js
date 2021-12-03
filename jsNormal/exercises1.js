// 1.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

console.log("The lengths of the three sides of the triangle are :");
let edgeA = 5;
let edgeB = 6;
let edgeC = 7;
console.log("edge A :"+edgeA);
console.log("edge A :"+edgeB);
console.log("edge A :"+edgeC);
console.log("triangle area :"+ edgeA * edgeB * edgeC);

// ------------------------------------------------------------------------------------------------
/* Write a JavaScript program to get the current date.  Go to the editor
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

let  today = new Date();
let  dd = today.getDate();
let mm = today.getMonth() + 1;  
let yyyy = today.getFullYear();

if(dd >= 10){
    dd  =  dd;
}
else{
    dd = "0" + mm;
}

today = mm + "-" + dd + "-" + yyyy;
console.log("mm-dd-yyyy : " +today);
today = mm + "/" + dd + "/" + yyyy;
console.log("mm/dd/yyyy : " +today);
today = dd + "-" + mm + "-" + yyyy;
console.log("mm-dd-yyyy : " +today);
today = dd + "/" + mm + "/" + yyyy;
console.log("mm/dd/yyyy : " +today);


