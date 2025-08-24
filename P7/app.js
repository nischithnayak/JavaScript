let todo=[];
let req=prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quiting app... ");
        break;
    }
    if(req=="list"){
        console.log("------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }
    else if(req=="add"){
        let tsk=prompt("please enter the task you wnat to add");
        todo.push(tsk);
        console.log("Task added");
    }
    else if(req=="delete"){
        let idx=parseInt(prompt("Please enter the task index"),10);
        todo.splice(idx,1);
        console.log("Task deleted");
    }else{
        console.log("Incalid index");
    }
    req=prompt("Please enter your request");

}