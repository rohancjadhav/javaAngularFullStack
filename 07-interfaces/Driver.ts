import {CricketCoach} from "./CricketCoach"
import {Coach} from "./Coach"
import {GolfCoach} from "./GolfCoach"

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches:Coach[]=[];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (const coach of theCoaches) {
    
    console.log(coach.getDailyWorkout());
}

