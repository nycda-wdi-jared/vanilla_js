/*
Write a pseudo-code algorithm (a list of steps in comments) 
that goes through a list of numbers, in reverse, 
and if the number is greater than 10 it should display 
a message that says "more is better" and if not it should say 
"less is more"

Break the problem down into as many steps as possible\

Begin researching the code behind each of the steps
*/


/*
pseudo-code:
1. create an array of numbers
2. figure out how to reverse the array
3. loop through the array
4. write an if that prints if a number is greater or less than 10
*/

var numbers = [3,4,6,5,1,12,13]

for(var i = numbers.length - 1; i > -1; i--){
	if(numbers[i] > 10){
		console.log(numbers[i] + " more is better")
	} else {
		console.log(numbers[i] + " less is more")
	}
}