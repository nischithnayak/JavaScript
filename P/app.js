function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("colling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done, bye!");