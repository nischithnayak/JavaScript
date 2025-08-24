let a=5,b=10,c=15
let largest=(a>b)?  (a>c? a:c) :(b>c ? b:c);
console.log(`The Largest of all is ${largest}`);
let num1=2;
let num2=242;
if(num1%10 ==num2%10){
    console.log("Two numbers have same last digits");
}else{
    console.log("Digits are not equal" );
}
let password=prompt("Set your password");
let newPassword=password.trim();
console.log(password);