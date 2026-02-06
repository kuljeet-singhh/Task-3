// 34. Create a function that returns an array of words from a text.
// Example:
// Input: "I love JS"
// Output: ["I", "love", "JS"]

function worldArr(str) {
  let result = str.split(" ");
  return result;
}
let text = "I love JS";
console.log("text = " + text);
let result = worldArr(text);
console.log(result);

document.getElementById("demo1").innerHTML = text;
document.getElementById("demo2").innerHTML = result;
