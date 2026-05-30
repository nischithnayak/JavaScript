let cars=["Audi", "BMW", "XUV", "Tata"];
console.log(`${cars.slice()}`);
console.log(`${cars.slice(2)}`);
console.log(`${cars.slice(2,3)}`);
console.log(`${cars.slice(-2)}`);
console.log(`${cars.sort()}`);

let arr=['a','b', 'c'];
let arrCopy=arr;
arr=arrCopy;
console.log(arr);

const arr1=[1,2,3];
arr1.push(4)
console.log(arr1);
arr1.pop();
console.log(arr1);
