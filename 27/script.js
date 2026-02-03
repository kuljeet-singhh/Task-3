//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinctEle(arr){
    let ans=[];
for(let i=0;i<arr.length-1;i++){
   ans.push(arr[i+1]-arr[i])
}
return ans;
}
let arr = [1,2,3,4,5]
let ans = distinctEle(arr)
console.log(`array = ${arr}`)
console.log(`distinct elements = ${ans}`)




document.getElementById("demo1").innerHTML=`array = ${arr}`;
document.getElementById("demo2").innerHTML=`distinct elements = ${ans}`;