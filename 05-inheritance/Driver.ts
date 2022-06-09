import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle} from "./Rectangle";



let myShape = new Shape(10,30);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,15);
console.log(myCircle.getInfo())

let myRectangle = new Rectangle(10,20,30,40);
console.log(myRectangle.getInfo())