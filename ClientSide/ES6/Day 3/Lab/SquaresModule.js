import { Shape } from "./ShapeModule.js";

class Rectangle extends Shape {
	#width;
	#height;
	constructor(_width, _height, _color) {
		super(_color);
		this.#width = _width;
		this.#height = _height;
	}

	getArea() {
		console.log(`Area = ${this.#width * this.#height}`);
		this.drawShape();
	}
}

class Square extends Rectangle {
	constructor(_width, _height, _color) {
		super(_width, _height, _color);
	}
}

export { Rectangle, Square };
