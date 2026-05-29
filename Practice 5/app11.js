// let str="I love coding";
// console.log(`${str}`);
// console.log(`${str.indexOf("love")}`);
// console.log(`${str.indexOf("J")}`);
// console.log(`${str.indexOf("o")}`);

let msg="      hello";
let newMsg=msg.trim();
console.log("After trim: ", newMsg);
newMsg =newMsg.toUpperCase();
console.log("After UpperCase ", newMsg);
let newmsg=msg.trim().toUpperCase();
console.log(`${newmsg}`);

let str="I love Coding";
console.log(`${str.slice(5)}`);
console.log(`${str.slice(1,4)}`);
console.log(`${str.slice("love","do")}`);
console.log(`${str.slice("o","x")}`);
