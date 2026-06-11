let i=1;
while(i<=5){
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}
// let fruits=["Mango","Apple", "Bananna","Lithci", "Orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// fruits.push("Grep");
// console.log(fruits);

let heroes =[["ironman","Spiderman","Thor"],["Superman","Wonder Woman","Flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

let fruits=["Mango","Apple","Bananna","Litchi", "Oranges"];
for(fruit of fruits){
    console.log(fruit);
}

for(charr of "apnaCollege"){
    console.log(charr);
}

let heroes=["Superman", "Spiderman", "Batman"];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}