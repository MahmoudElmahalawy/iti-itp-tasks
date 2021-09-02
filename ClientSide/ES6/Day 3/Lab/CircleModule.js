import { Shape } from "./ShapeModule.js";

class Circle extends Shape {
	#radius;
	#x;
	#y;
	constructor(_radius, _x, _y, _color) {
		super(_color);
		this.#radius = _radius;
		this.#x = _x;
		this.#y = _y;
	}

	getArea() {
		console.log(`Circle area = ${Math.PI * Math.pow(this.#radius, 2)}`);
		this.drawShape();
	}
}

export { Circle };
