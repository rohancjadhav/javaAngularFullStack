import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle} from "./Rectangle";



let myShape = new Shape(10,30);


let myCircle = new Circle(5,10,15);


let myRectangle = new Rectangle(10,20,30,40);

//declare an array of shapes
let theShapes: Shape[]=[];

theShapes.push(myCircle);
theShapes.push(myRectangle);
theShapes.push(myShape);


for (let tempShape of theShapes) {
    
    console.log(tempShape.getInfo());
}
