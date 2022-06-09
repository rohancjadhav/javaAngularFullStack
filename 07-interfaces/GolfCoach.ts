import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "practise golf ball hitting in the range for one hour";
    }
    
}