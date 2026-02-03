// sum of 100 prime numbers

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
let sum=0;
while(arr.length<100){
    if(isPrime(count)){
        arr.push(count)
        sum+=count;
    }
    count++;
}
console.log(" 100 prime numbers = "+arr)
console.log(`sum of 100 prime numbers = ${sum}`)




document.getElementById("demo").innerHTML=`sum of 100 prime numbers = ${sum}`