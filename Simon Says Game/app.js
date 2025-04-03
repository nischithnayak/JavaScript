let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash() {
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
    }, 150);
}

function levelUp() {
    userSeq = []; // Reset user sequence on new level
    level++;
    h2.innerText = `Level ${level}`;

    // Random button selection
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Game Sequence:", gameSeq);

    btnFlash(randbtn);
}

function checkAns() {
    let idx = userSeq.length - 1;
    
    if (userSeq[idx] === gameSeq[idx]) {
        console.log("Correct Press");
        
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000); // Move to the next level after a delay
        }
    } else {
        h2.innerText = "Game Over! Press any key to restart";
        console.log("Wrong Press");
        userFlash(); // Flash the screen red
        resetGame();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let color = btn.getAttribute("id"); // Get the ID of the clicked button
    userSeq.push(color);
    
    checkAns();
}

function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
