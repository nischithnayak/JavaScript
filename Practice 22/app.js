function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not adult");
    }
}

function rollDice(){
    let rand=Math.floor(Math.random()*6);
    console.log(rand);
}

function printInfo(name,age){
    console.log(`${name}'s age is ${age}` );
}
printInfo("Nischith",21);
printInfo("karan");
printInfo(25);