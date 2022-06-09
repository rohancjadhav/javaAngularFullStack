"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 15);
var myRectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
//declare an array of shapes
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log();
    console.log(tempShape.getInfo());
    console.log("Area is " + tempShape.calculateArea());
    console.log();
}
