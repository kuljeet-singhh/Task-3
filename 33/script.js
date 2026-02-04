// 33. Calculate the sum of numbers received in a comma-delimited string.
// Example:
// Input: "10,20,30,40"
// Output: 100

let str="10,20,30,40"
let count=0;
str.split(",").map((c)=>{
count+=Number(c)
  
})
console.log(str)
console.log("count of comma-delimited string = "+count)

document.getElementById("demo").innerHTML="count of comma-delimited string = "+count;