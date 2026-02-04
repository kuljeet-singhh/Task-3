// 36. Create a function that converts a string into an array of characters.
// Example:
// Input: "hello"
// Output: ["h","e","l","l","o"]

function convert(str) {
  let result = [];
  for (let val of str) {
    result.push(val);
  }
  return result;
}

let str = "hello";
console.log("string = " + str);
let result = convert(str);
console.log(result);

document.getElementById("demo1").innerHTML = "string = " + str;
document.getElementById("demo2").innerHTML = "string = " + str;
