const max=Number(prompt("Enter the max number:"));
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess.toLocaleLowerCase()=='quit'){
        console.log("User quit");
        break;
    }
    guess=Number(guess);
    if(guess==random){
        console.log("You are right! congrats ");
        break;
    }else if(guess<random){
            guess=prompt("Hint your was was too small");
    }else{
        guess=prompt("Hint your guess is too high");
    }
}