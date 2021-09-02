// var nInput = prompt("Enter a number (0 or greater than 100 to stop)")
var nInput = parseInt(prompt("How many numbers to enter?"));
var sum = 0;

for (var i = 0; i < nInput; i++) {
	var userNum = parseInt(
		prompt("Enter a number (0 or greater than 100 to stop)")
	);

	if (isNaN(userNum)) {
		alert("Enter a valid integer number");
		break;
	}

	sum += userNum;

	if (userNum === 0 || sum > 100) {
		break;
	}
}

var sumElem = document.createElement("h1");
sumElem.textContent = "Sum of numbers you entered = " + sum;
document.body.appendChild(sumElem);
