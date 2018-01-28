/*

JS Basics Mini Challenges
Goal:

Demonstrate basic programming and JavaScript skills and understanding of objectives. Build familiarity with JavaScript syntax and conventions of basic programming.

Assignment:

1. Create a script with two variables, each assigned to a number. 
   Add them together and output the result to the console. 
   Now do the same with two strings.
2. Create a multidimensional array related to a subject that interests you. 
   Output two of the items in sub-arrays to the console.
3. Write a script that checks if a variable is less than 100. 
   If it is, alert the user that their variable is less than 100. 
   If it is not alert the user of what the value was and that it was greater than 100.
4. Declare a function that takes a name as an argument and tells the user what name they've entered. 
   Try running it after it has been declared.
5. Declare a function that depending upon which virtual 'door' was entered tells the user 
   they've received a different 'prize' in an alert. After declaring the function, 
   try running it with different options. There must be at least 3 doors.

*/

//1.
var numOne = 3;
var numTwo = 4987;

var added = numOne + numTwo;
console.log(added);

var stringOne = "Wassap";
var stringTwo = "World";

console.log(stringOne + " " + stringTwo);

//2. This one was not taught in class, so dont stress it, but it could've been researched ;)
var multiDimensional = [['korn', 'system of a down'],['tom petty', 'chris cornell']];
console.log(multiDimensional[1][1]);

//3. 

//lets randomize the number as well
var oneToHundred = [];
for(var i = 0; i <= 250; i++){
	oneToHundred.push(i);
}
console.log(oneToHundred);
var random = oneToHundred[Math.floor(Math.random() * oneToHundred.length)]
console.log(random)

if(random <= 100){
	alert("The variable is less than 100")
} else {
	alert(random + " is greater than 100")
}

//4.

var promptThis = prompt("What is your name?")

function promptSomething(promptArg){
	alert("You have entered " + promptArg);
}

promptSomething(promptThis)

//5.

function chooseADoor(door){
	if(door == 1){
		alert("You picked Door " + door + ", you have won.......A set of steak knives")
	} else if(door == 2){
		alert("You picked Door " + door + ", you have won.......A cadillac")
	} else if(door == 3){
		alert("You picked Door " + door + ", you have won.......You're fired")
	} else {
		alert("Please enter 1, 2, or 3")
	}
}

var promptDoor = prompt("Enter 1, 2, or 3 to see what's behind that door")

chooseADoor(promptDoor)





