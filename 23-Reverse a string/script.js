
let str="kuljeet";
console.log("string = "+str)
let n=str.length-1;
let sol="";
for(let i=n; i>=0;i--){
  sol+=str[i]
}
console.log("Reverse string = "+sol)



document.getElementById("demo").innerHTML="string = "+str;
document.getElementById("demo1").innerHTML="Reverse string = "+sol;