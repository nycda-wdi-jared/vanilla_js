/*

Exercise 1.1
• Define an object using a constructor function that 
  has at least one attribute and one method
• Instantiate a new instance of that object and try 
  to access its attributes and methods
*/

//code here 
//<--------------------------------------------------------

function Whatever(arg1, arg2) {
	this.arg1 = arg1;
	this.arg2 = arg2;
	this.func = function(){
		console.log("I think " + arg1 + " is a " + arg2);
	}
}

var hmmmm = new Whatever("Bobby", "Panther")
hmmmm.func();
//<--------------------------------------------------------

/*

Exercise 1.2
• Define a math object using a constructor function
• Have the constructor take 2 arguments, preferably numbers
• Create a method that adds the 2 arguments
• Instantiate a new instance of that object and try 
  to access its attributes and methods

*/

//code here 
//<--------------------------------------------------------

function Math(num1, num2){
	this.num1 = num1;
	this.num2 = num2;
	this.multiply = () => {
		return this.num1 * this.num2;
	}
	this.add = function(){
		return this.num1 + this.num2;
	}
}

var first = new Math(5,3);
console.log(first.multiply())
console.log(first.add())


//<--------------------------------------------------------