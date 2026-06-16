let todo = [];

let req = prompt("Please enter your request");

while (true) {
    if (req.toLowerCase() === "quit") {
        console.log("Quitting App");
        break;
    }

    else if (req.toLowerCase() === "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");
    }

    else if (req.toLowerCase() === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }

    else if (req.toLowerCase() === "delete") {
        let idx = parseInt(prompt("Please enter the task index"), 10);

        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task Deleted");
        } else {
            console.log("Invalid Index");
        }
    }
    else {
        console.log("Invalid Command");
    }
    req = prompt("Please enter your request");
}