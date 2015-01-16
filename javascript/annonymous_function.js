// use of annonymous functions - you can chain them together without an object model
hello = function(name, f) {
	alert("hello, " + name);
	f(name);
}

goodbye = function(name) {
	alert("goodbye, " + name);
}

// pass a name, and a function to hello
hello("jeff", goodbye);

//see 'greetings.html'