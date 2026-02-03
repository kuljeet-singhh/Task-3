//26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
let arr1=[1,2,3,3,6,7];
let arr2=[4,5,6,1,2,4,6];
function mergeArray(arr1,arr2){
    let arr=[];
    for(let val of arr1){
        arr2.includes(arr1)
    arr.push(val)
    }
    return arr;
}
console.log("array1= "+arr1)
console.log("array1= "+arr1)
const sol=mergeArray(arr1,arr2);
console.log("result = "+sol)



document.getElementById("demo1").innerHTML="array1= "+arr1;
document.getElementById("demo2").innerHTML="array2= "+arr2;
document.getElementById("demo3").innerHTML="result = "+sol;

