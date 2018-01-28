var five = 5;
var ten = 10;

if(five < ten){
	console.log("5 is less than 10")
} else {
	console.log("i think 5 is less than 10")
}

if(five <= 4){
	console.log("5 is less than 4? huh?")
} else {
	console.log("yes, of course its false")
}

if(five > ten) {
  console.log("You'll never see this because 5 is not greater than 10");
} else if(five === five) {
  console.log("Yes, 5 really is equal to 5, so this will show up in the console")
} else {
  console.log("We won't get here because our else if evaluates to true");
}

//review over the functionality of prompt("message")
//you can store it in a variable, and the variable holds onto
//the value of that input
var prompt = prompt("Please enter your name")
console.log(prompt)

if(prompt === "Joey".toLowerCase()){
	alert("What's up Joey")
} else {
	alert("You're not Joey")
}

// || is an 'or' in an if statement, you can add another operator, so it can be true for either of the two there
if(five > 10 || five <= 10){
	console.log("This fits the second side of the 'or' statement, which means it can match 1 of the 2 statements to be true")
} else {
	console.log("If it didn't fit either statement, it would be here")
}

//it can be true for either of the 3
if(five > ten || five <= 4 || five <= 5){
	console.log("Will it hit here?")
} else {
	console.log("or will it hit here?")
}


//&& is an 'and' in an if statement
if(five > 4 && five > 6){
	console.log("it fits one side but not the other, so it wont hit here")
} else {
	console.log("it has to be true for both statements or it will end up in the else")
}

if(five > 4 && five >= 5 && typeof "this is a string" === "string" && typeof five === "number"){
	console.log("Will it hit here? which means all of the statements are true")
} else {
	console.log("or will it hit here?, which means at least of the statements is false")
}

