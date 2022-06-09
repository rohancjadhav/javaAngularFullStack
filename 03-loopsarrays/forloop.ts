for(let i=0;i<5;i++){
    console.log(i);
}

//average
let reviews:number[]=[5,4.5,3,2,1];
let total=0;
for (let i = 0;i< reviews.length; i++){
        console.log(reviews[i]);
        total+=reviews[i];
    }

console.log("average of reviews is "+ total/reviews.length);

//string array
let sportsOne:string[] = ["golf","cricket","tennis","baseball"];
for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);
}

//for of
for (const teamsport of sportsOne) {
    console.log(teamsport)
}

//conditionals
for (let teamsport of sportsOne) {
    if(teamsport == "cricket"){
        console.log(teamsport+" <<<< favorite sport")
    }
    else{
        console.log(teamsport)
    }
}

sportsOne.push("carrom");
sportsOne.push("shuttle");
for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);
}