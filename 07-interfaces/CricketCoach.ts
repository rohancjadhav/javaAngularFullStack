import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyFeedback(): string {
    return "you have done great today"  
    } 
    getDailyWorkout(): string {
       return "practise bowling for 20 mins"
    }

}