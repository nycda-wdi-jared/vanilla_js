/*

1. Lets get some question and answers

*/

//telling my application that i want these html to not be displayed when the page first loads
//these lines represent how to access css with vanilla javascript
document.getElementById('your-answer-form').style.display = 'none';
document.getElementById('options-list').style.display = 'none';

//setting up my variables for the application
var index = 0;
var correct = 0;
var incorrect = 0;

//setting up my array with objects, which represents my trivia game
var trivia = [
	{
		question: 'Who was the first person to land on the moon',
		options: ['neil armstrong', 'john smith', 'bob saget'],
		answer: 'neil armstrong'
	},
	{
		question: 'Who framed roger rabbit',
		options: ['joe', 'john', 'who cares'],
		answer: 'who cares'
	},
	{
		question: 'Who shot Biggie',
		options: ['tupac', 'suge knight', 'eazy e'],
		answer: 'suge knight'
	}
]

//wrote this function that displays the question and options for each question
//the reason i wrote this function is because i use this block of code a few times
//the reason why I have 'index' as an argument is because the value that I want for index changes
//as I contiue to run this method
function nextQuestion(index){
	document.getElementById('question').innerHTML = "Question " + (index + 1) + ": " + trivia[index].question;
	var options = "<ol>";
	for(var i = 0; i < trivia[index].options.length; i++){
		options += "<li>" + trivia[index].options[i] + "</li>"
	}
	document.getElementById('options-list').innerHTML = options + "</ol>"
}

//telling my application that I want it to start on a 'keydown' event
//and when the spacebar is pressed --- e.key === " " is spacebar, check the console.log
//in here, im only saying what i want to happen when a key is pressed on the window
document.addEventListener('keydown', function(e){
	if(e.key === " "){
		//saying that once the spacebar is pressed, i want html elements
		//to be displayed and some to be hidden
		document.getElementById('your-answer-form').style.display = 'block';
		document.getElementById('options-list').style.display = 'block';
		document.getElementById('trivia').style.display = 'none';

		//calling my nextQuestion function here, and inserting 0 as my param because
		//i only want the first question and options displayed on keypress, if I insert 0,
		//then '0' acts as 'index', which is the argument in the function: nextQuestion(index)
		//look at what index does throughout the function, and that is how the 0 will act
		nextQuestion(0);
	}
})

//onsubmit event listener, only fired when the form is submitted
//in here, im saying exactly what i want after the form is submitted
document.getElementById('your-answer-form').onsubmit = function(e){
	//prevents the form from redirecting to another page after onsubmit
	e.preventDefault();

	//getting the value from the input after you submit
	var answer = document.getElementById('your-answer').value

	//remember our index variable from above, which is 0,
	//im saying here, if trivia[0].answer, which is 'neil armstrong',
	//equals what we entered, the correct goes up, otherwise incorrect goes up
	if(answer === trivia[index].answer){
		correct++;
	} else {
		incorrect++;
	}
	/*
	if your 'if' statement just has one clause after the if and after the else,
	then you can write a cool if statement like this:
	
	answer === trivia[index].answer ? correct++ : incorrect++;
	
	*/

	//whether correct or incorrect, index needs to go up, because it represents
	//the next part of our object...remember after you press submit, you want the next question
	//to appear, the next question is the next index in our 'trivia' array
	//so, im incrementing index after the onsubmit is clicked
	index++;

	//now index is 1, and when i plug it into nextQuestion(index), it represents the second item
	//in the array, which is the 1 index. That is why the switch happens
	nextQuestion(index);

	//this is stating that i want the input box to be cleared after i press on submit
	document.getElementById('your-answer').value = "";
}





