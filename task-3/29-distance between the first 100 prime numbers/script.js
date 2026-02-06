//Print the distance between the first 100 prime numbers


function isPrime(n){
    if(n<=1)return false;
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
let count=2;
let arr=[];
index=0;
while(arr.length<100){
    if(isPrime(count)){
        arr.push(count)
        
    }
    count++;
}
let distance=[];
for(let i =0;i<arr.length-1;i++){
    
    distance.push(arr[i+1]-arr[i])
}
console.log(" 100 prime numbers = "+arr)
console.log(` distance between the first 100 prime numbers = ${distance}`)



document.getElementById("demo").innerHTML=` distance between the first 100 prime numbers = ${distance}`