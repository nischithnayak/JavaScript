let nums=[1,2,3,4,5];
const square=nums.map((nums)=>nums*nums);
console.log(square);

let sum=square.reduce((acc,cur)=>acc+cur,0);
let avg=sum/nums.length;
console.log(avg);

let numbers=[2,4,6,8,-2,-4];
console.log(numbers.map((number)=>number+5));

let strings = ["bob", "adam", "jack"];
console.log(strings.map(str => str.toUpperCase()));

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1, b:2},{c:3,d:4}));
