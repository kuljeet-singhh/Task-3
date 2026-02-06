//Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log(`array 1 = ${arr1}`)
console.log(`array 1 = ${arr2}`)
function UniqueArr(arr1, arr2) {
  let res = [];

  for (let val of arr1) {
    if (!arr2.includes(val)) {
      res.push(val);
    }
  }

  for (let val of arr2) {
    if (!arr1.includes(val)) {
      res.push(val);
    }
  }
  return res;
}
// console.log(UniqueArr(arr1,arr2))
let ans = UniqueArr(arr1, arr2);
console.log("Unique Arry = "+ans);

document.getElementById("demo1").innerHTML=`array 1 = ${arr1}`
document.getElementById("demo2").innerHTML=`array 2 = ${arr2}`
document.getElementById("demo3").innerHTML="Unique Arry = "+ans



