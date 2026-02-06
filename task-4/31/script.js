//31. Create a function that will return the number of words in a text.
// Example:
// Input: "I love JavaScript"
// Output: 3

function worldCount(str) {
  let count = 0;

  let result = str
    .trim()
    .split(" ")
    .map((w) => {
      count++;
    });
  return count;
}
let str = "I love JavaScript";
console.log(str);
let result = worldCount(str);
console.log(`number of words in a text = ${result}`);

document.getElementById("demo1").innerHTML = str;
document.getElementById("demo2").innerHTML =
  `number of words in a text = ${result}`;
