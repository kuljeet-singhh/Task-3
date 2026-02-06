//Create a function that will merge two arrays and return the result as a new array
const array1 = [1,2,3,4,5];
const arrar2 = [6,7,8,9,10];
console.log("array 1 = "+array1)
console.log("array 2 = "+arrar2)
let arr=[]
function mergeArray(arr1,arr2){
    arr=[...arr1,...arr2]
}
mergeArray(array1,arrar2)
console.log("merge two arrays = "+arr)


document.getElementById("demo1").innerHTML="array 1 = "+array1
document.getElementById("demo2").innerHTML="array 2 = "+arrar2
document.getElementById("demo").innerHTML=`merge two arrays = ${arr}`