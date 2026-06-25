let arr=[8,9,6,2,1,3,5,4,78,9];
let num=5;
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);