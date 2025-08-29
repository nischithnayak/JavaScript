// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(getSum(10));
// let ans="";
// let str=["Hi","I","Am", "Nischith"];
// for(let i=0;i<str.length;i++){
//      ans+=str[i];
// }
// console.log(ans);
// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         let a=10;
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();
// let greet = "Hello";

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
// }

// console.log(greet);
// changeGreet();

// setTimeout(function, timeout)   // (not doing anything useful here as written)

// console.log("hi there!");

// setTimeout(()=>{
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome");
// const square =(n)=>n*n;
// console.log(square(4));
// const arrayAverage=(arr)=>{
//     let total=0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total/arr.length;
// }
// let arr=[1,2,3,4,5,6];
// console.log(arrayAverage(arr));

// const isEven(num)=>{
//    if( num%2==0) {
//     "Enven":"odd"
// }

// let nums = [1, 2, 3, 4, 5, 6, 7];

// let finalval = nums.reduce((res, el) => {
//     return res + el;
// });

// console.log(finalval); // ✅ 28
// let  arr=[1,4,2,5,6,7,9,3];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);
// let nums=[10,20,30,40];
// let ans=nums.every((el)=>el%10==0);
// console.log(ans);
// let arr=[1,23,4,5,6];
// console.log(...arr);
// console.log(..."apnaCollege");
// let chars=[..."helllo"];
// console.log(chars);
// let data ={
//     email:"ironman@gmail.com",
//     password:"abcd",
// };
// let dataCopy={...data,id:123};

// let nums=[1,2,3,4,5,6];
// const square=nums.map((num)=>num*num);
// console.log(square);

// let sum=square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/nums.length;
// console.log(avg);

// const mergeObjects=(obj1,obj2)=>({...obj1, ...obj2});
// mergeObjects({a:1,b:2},{c:3,d:4});


// document.querySelector('p');
// document.querySelectorAll("p");
// Object.getAttribute(attr);
// Object.setAttribute(attr, val);

// classList.add();
// classList.remove();
// classList.contains();
// classList.toggle();

// document.createElement('p');
// .appendChild()