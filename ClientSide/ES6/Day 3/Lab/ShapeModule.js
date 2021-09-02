class Shape {
	#color;
	constructor(_color) {
		this.#color = _color;
	}

	drawShape() {
		console.log(`Color => ${this.#color}`);
	}

	set color(newColor) {
		this.#color = newColor;
	}

	get color() {
		return this.#color;
	}
}

export { Shape };
