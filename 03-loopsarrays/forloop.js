for (var i = 0; i < 5; i++) {
    console.log(i);
}
//average
var reviews = [5, 4.5, 3, 2, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("average of reviews is " + total / reviews.length);
//string array
var sportsOne = ["golf", "cricket", "tennis", "baseball"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//for of
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var teamsport = sportsOne_1[_i];
    console.log(teamsport);
}
//conditionals
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var teamsport = sportsOne_2[_a];
    if (teamsport == "cricket") {
        console.log(teamsport + " <<<< favorite sport");
    }
    else {
        console.log(teamsport);
    }
}
sportsOne.push("carrom");
sportsOne.push("shuttle");
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
