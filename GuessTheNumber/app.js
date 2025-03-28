const max = Number(prompt("Enter the max number"));
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("User quit.");
        break;
    }

    guess = Number(guess);

    if (guess === random) {
        console.log(`You are right! Congrats, the random number was ${random}`);
        break;
    } else if (guess < random) {
        guess = prompt("Hint: Your guess was too small. Please try again.");
    } else {
        guess = prompt("Hint: Your guess was too large. Please try again.");
    }
}
