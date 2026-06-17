let arr=[10,65,25,83,15];
let largest=0;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log(`Largest ${largest}`);