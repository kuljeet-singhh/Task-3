//task - 5

// 43. Extract a column from a 2D array
// Hint: Loop through rows and pick the same column index.
// Array Example:
// [[1,2,3],[4,5,6],[7,8,9]] → column 1 → [2,5,8]
console.log("43. Extract a column from a 2D array");
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let col = 1;

for (let i = 0; i < array.length; i++) {
  console.log(array[i][col]);
}

// 45. Sum of numbers in a jagged array
// Hint: If element is array, go inside it; if number, add it.
// Array Example:
// [1,[2,[3,4]],5] → 15
console.log("Q 45. Sum of numbers in a jagged array");
let sum = 0;
let data1 = [1, [2, [3, 4]], 5];
let flatData = data1.flat(Infinity);
console.log("array = " + flatData);
for (let val of flatData) {
  sum += val;
}
console.log(" Sum of numbers in a jagged array = " + sum);

// 46. Find max number in a jagged array
// Hint: Traverse all nested arrays and compare values.
// Array Example:
// [1,[10,[25,3]],7] → 25
console.log("Q 46. Find max number in a jagged array");
let data = [1, [10, [25, 3]], 7];
let max = 0;
let flatArr = data.flat(Infinity);
console.log("array = " + flatArr);

for (let val of flatArr) {
  if (val > max) {
    max = val;
  }
}
console.log("max number in a jagged array = " + max);

/* 
47. Deep copy a jagged array
Hint: Create new array and copy nested arrays separately.
Array Example:
[1,[2,[3]]] → new independent copy
*/
console.log("47. Deep copy a jagged array");

let data3 = [1, [2, [3]]];
let flatData3 = data3.flat(Infinity);
console.log("jagged array = " + flatData3);
console.log(flatData3);

/* 
49. Shuffle an array of strings
Hint: Swap elements using random index.
Array Example:
["a","b","c","d"] → ["c","a","d","b"]
*/
console.log("49. Shuffle an array of strings");
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}
let array1 = ["a", "b", "c", "d"];

console.log("array = " + array1);
shuffle(array1);
console.log(array1);

/* 
50. Unique random numbers from 1 to n
Hint: Generate random numbers and avoid duplicates.
Array Example:
n = 5 → [3,1,5,2,4]
*/
console.log("50. Unique random numbers from 1 to n")
function unique(n){
let result=[];
    for(let i=1;i<n+1;i++){
    result.push(i)
    }
     for (let i = 0; i < result.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = result[i];
    result[i] = result[j];
    result[j] = t;
  }
  
  return result
}

let n=5;
let result1=unique(n);
console.log(result1)



/* 
52. Fibonacci(500)
Hint: Use BigInt to store large numbers.
Array Example:
0, 1, 1, 2, 3, 5, ...
*/
console.log("52. Fibonacci(500)")

const fibonacci = (n) => {
  const arr = [];
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    arr.push(a);
    // console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return arr ;
};
let result13=fibonacci(500);
console.log(`The 500th Fibonacci number (index 499) is: ${result13[499]}`);


/*
53. Calculate 70!
Hint: Multiply numbers from 1 to 70 using BigInt.
Array Example:
70 × 69 × 68 × ... × 1
*/
