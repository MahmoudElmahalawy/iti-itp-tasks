var nameReg = /^[A-Za-z]*$/;
var phoneNumReg = /^[0-9]{8}$/;
var mobileNumReg = /^01[0-9]{9}$/;
var emailReg = /^[^\s@]+@[^\s@]+$/;
var colorReg = /^(red|green|blue)$/;

do {
	var userName = prompt("What's your name? (Name must be only characters)");
} while (!nameReg.test(userName) && !(userName == null));

do {
	var phoneNumber = prompt("Enter your phone number (Must be of 8 digits)");
} while (!phoneNumReg.test(phoneNumber) && !(phoneNumber == null));

do {
	var mobileNumber = prompt(
		"Enter your mobile number (Must be of 11 digits and starts with 01)"
	);
} while (!mobileNumReg.test(mobileNumber) && !(mobileNumber == null));

do {
	var email = prompt("Enter your email");
} while (!emailReg.test(email) && !(email == null));

do {
	var userColor = prompt("Enter red, green or blue");
} while (!colorReg.test(userColor) && !(userColor == null));

document.write("<h1>Entering user info</h1><hr>");

document.write(
	userName
		? `<h2 style="display:inline;color:${userColor}">Welcome dear guest</h2> ${userName}<br>`
		: "No name had been entered<br>"
);

document.write(
	phoneNumber
		? `<h2 style="display:inline;color:${userColor}">Your phone number is</h2> ${phoneNumber}<br>`
		: "No phone had been entered<br>"
);

document.write(
	mobileNumber
		? `<h2 style="display:inline;color:${userColor}">Your mobile number is</h2> ${mobileNumber}<br>`
		: "No mobile had been entered<br>"
);

document.write(
	email
		? `<h2 style="display:inline;color:${userColor}">Your email address is</h2> ${email}<br>`
		: "No email had been entered<br>"
);

var today = new Date();
var daylist = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday ",
	"Thursday",
	"Friday",
	"Saturday",
];
var dayOfWeek = daylist[today.getDay()];
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dayOfWeek + " " + dd + "/" + mm + "/" + yyyy;

document.write(
	`<h2 style="display:inline-block;margin-top:5rem;color:${userColor};">Today is</h2> ` +
		today
);
