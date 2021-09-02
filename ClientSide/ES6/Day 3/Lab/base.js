import { Rectangle, Square } from "./SquaresModule.js";
import { Circle } from "./CircleModule.js";

let rect1 = new Rectangle(5, 6, "red");
let rect2 = new Rectangle(10, 12, "yellow");

let sq1 = new Square(7, 8, "green");
let sq2 = new Square(9, 10, "blue");

let c1 = new Circle(4, 50, 50, "black");
let c2 = new Circle(5, 60, 50, "orange");

rect1.getArea();
rect2.getArea();

sq1.getArea();
sq2.getArea();

c1.getArea();
c2.getArea();
