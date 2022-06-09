import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
       return "practise bowling for 20 mins"
    }

}