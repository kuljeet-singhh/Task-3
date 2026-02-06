// 37. Create a function that converts a string into an array of ASCII codes of each character.
// Example:
// Input: "ABC"
// Output: [65,66,67]


function asciiCod(str){
    let arr=[];
    for(let val of str){
        // console.log(val)
        arr.push(val.charCodeAt(val))
    }
    return arr;
}

let str = "ABCA"
console.log("string = "+str)
let result=asciiCod(str)
console.log(result)


document.getElementById("demo1").innerHTML="string = "+str;
document.getElementById("demo2").innerHTML=result;