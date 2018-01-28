function outsideFunction() {
	function insideFunction() {
		console.log("hi")
	}
	insideFunction();
}

//what happens when you call outside function?
//outsideFunction()

//what happens when you call inside function?
//insideFunction()

// <!------------------------------------!>

var grapefruit = 1;

function outerFunction(){
	var apple = 2;

	function innerFunction(){
		var orange = 3;

		// here we have access to variables 'grapefruit', 'apple', and 'orange'
		console.log(grapefruit + " " + apple + " " + orange); // prints "1 2 3"
	}
	// here we have access to variables 'grapefruit' and 'apple', but not 'orange'
}
// here we have access to only the variable grapefruit

//what happens if you comment out outerFunction()
//outerFunction();

//what happens if you comment out innerFunction()
//innerFunction();