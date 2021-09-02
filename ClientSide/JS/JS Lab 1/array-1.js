var arr = [];
var sumRes = 0,
	mulRes = 1,
	divRes = 1;

for (var i = 0; i < 3; i++) {
	var userInput = parseInt(prompt("Enter a number"));
	arr[i] = userInput;

	sumRes += userInput;
	mulRes *= userInput;
	divRes /= userInput;
}

document.write("<h1>Adding -- Multiplying -- Dividing</p>");
document.write("<hr>");
document.write(
	`Sum of the 3 values ${arr[0]} + ${arr[1]} + ${arr[2]} = ${sumRes}<br>`
);
document.write(
	`Multiplication of the 3 values ${arr[0]} * ${arr[1]} * ${arr[2]} = ${mulRes}<br>`
);
document.write(
	`Division of the 3 values ${arr[0]} / ${arr[1]} / ${arr[2]} = ${divRes}`
);
