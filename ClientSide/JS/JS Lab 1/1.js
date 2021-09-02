for (var i = 1; i <= 6; i++) {
	var userMsg = prompt("Enter header " + i);
	var heading = document.createElement(`h${i}`);

	heading.textContent = userMsg;
	document.body.appendChild(heading);
}
