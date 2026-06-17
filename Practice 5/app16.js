let num=234567;
let sum=0;
let lastDig=0;
let cal=num;
while(cal!=0){
    lastDig =cal%10;
    sum+=lastDig;
    cal=Math.floor(cal/10);
}
console.log(sum);