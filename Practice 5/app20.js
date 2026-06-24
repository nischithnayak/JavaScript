function sum(a,b){
    return a+b;
}
console.log(sum(sum(1,2),3));

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(getSum(10));

let str=["hi","hello","bye","!"];
function concat(str){
    let result;
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(concat(str));