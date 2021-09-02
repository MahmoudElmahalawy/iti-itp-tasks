var arr = [];

// function sortArr(order){
//     if (order = "a"){

//     }
// }

for (var i = 0; i < 5; i++) {
	var userInput = parseInt(prompt("Enter a number"));
	arr[i] = userInput;
}

document.write("<h1>Sorting</p>");
document.write("<hr>");

document.write("You've Entered the values of &nbsp;");
for (var i = 0; i < 5; i++) {
	document.write(`${arr[i]} `);
}
document.write("<br>");

arr.sort(function (a, b) {
	return a - b;
});
document.write("Values in Ascending order &nbsp;");
for (var i = 0; i < 5; i++) {
	document.write(`${arr[i]} `);
}
document.write("<br>");

arr.sort(function (a, b) {
	return b - a;
});
document.write("Values in Descending order &nbsp;");
for (var i = 0; i < 5; i++) {
	document.write(`${arr[i]} `);
}

// document.write(
// 	`Multiplication of the 3 values ${arr[0]} * ${arr[1]} * ${arr[2]} = ${mulRes}<br>`
// );
// document.write(
// 	`Division of the 3 values ${arr[0]} / ${arr[1]} / ${arr[2]} = ${divRes}`
// );
