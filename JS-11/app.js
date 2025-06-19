let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`${color} color changed!`);
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("Red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange color was completed");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("Yellow color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("Green color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue color was completed. Color changes complete!");
    });

