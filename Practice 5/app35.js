let id=setInterval(()=>{
   console.log("Hello World"); 
},2000);
setInterval(()=>{
    clearInterval(id);
},1000);
