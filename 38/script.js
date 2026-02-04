// 38. Create a function that converts an array of ASCII codes into a string.
// Example:
// Input: [65,66,67]
// Output: "ABC"

function string(asi) {
  let str = String.fromCharCode(...asi);

  return str;
}

let asi = [65, 66, 67];
console.log("ASCII codes = " + asi);
let result = string(asi);
console.log(result);

document.getElementById("demo1").innerHTML = "ASCII codes = " + asi;
document.getElementById("demo2").innerHTML = result;
