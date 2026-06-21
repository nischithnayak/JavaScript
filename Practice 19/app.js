const max=Number(prompt("Enter the max number:"));
const random=Math.floor(Math.random()*max)+1;
let guess =prompt("Guess the number");
while(true){
    if(guess.toLowerCase()=="quit"){
        console.log("User Quit");
        break;
    }
    guess=Number(guess);
    if(guess==random){
        console.log(`You are right! the random number was ${random}`);
        break;
    }
    else if(guess<random){
        guess=prompt("Hint: your guess was too samll");
    }else{
        guess=prompt("Hint: your guess was too large");
    }
}