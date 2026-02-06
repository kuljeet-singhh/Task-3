//Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function addStrings(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1;
  let carry = 0,
    res = "";

  while (i >= 0 || j >= 0 || carry) {
    const n1 = i >= 0 ? +num1[i] : 0;
    const n2 = j >= 0 ? +num2[j] : 0;
    const sum = n1 + n2 + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return res;
}
let s1 = "123456789";
let s2 = "987654321";
console.log("strins1 = " + s1)
console.log("strins2 = " + s2)
ans = addStrings(s1, s2);

console.log("add two strins = " + ans);
console.log(typeof ans);



document.getElementById("demo1").innerHTML = "strins1 = " + s1;
document.getElementById("demo2").innerHTML = "strins2 = " + s2;
document.getElementById("demo3").innerHTML = "add two strins = " + ans;
"123456789", "987654321"