// 32. Create a function that will capitalize the first letter of each word in a text.
// Example:
// Input: "i love javascript"
// Output: "I Love Javascript"

function capitalize(str) {

  return str.split(" ").map((f) => {
    return f.charAt(0).toUpperCase() + f.slice(1);
  });
}

let string = "i love javascript";
console.log(string);
document.getElementById("demo1").innerHTML = string;
result = capitalize(string);
console.log("result = " + result);

document.getElementById("demo2").innerHTML = result;
