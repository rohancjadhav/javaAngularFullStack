import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyFeedback(): string {
        return "you are fantabulous";
    }
    getDailyWorkout(): string {
        return "practise golf ball hitting in the range for one hour";
    }
    
}