
function myFunction() {
	if (document.getElementById("the-button").innerHTML == "Try It") {
		document.getElementById("demo").innerHTML = "Paragraph changed.";
		document.getElementById("the-button").innerHTML = "Put it back";
	}
	else {
		document.getElementById("demo").innerHTML = "a paragraph";
		document.getElementById("the-button").innerHTML = "Try It";
	}
}

function sayWeather() {
	var temp = "72 degrees";
	alert("It's " + temp);
}

// annonymous function -- assign a function to a variable
var x = function(temp) {
	alert("It's " + temp);
}

// these three sections go together
function sayWeather2(functionName) {
	var temp = functionName();
	alert("It's " + temp);
}

function takeTemp() {
	return "60 degrees!";
}

sayWeather2(takeTemp); // pass the function in as an argument




hello = function(name) {
	alert("hello, " + name);
}

goodbye = function(name) {
	alert("goodbye, " + name);
}