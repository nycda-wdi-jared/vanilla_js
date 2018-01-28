/*

Create an rps game with vanilla javascript.
1. I want this to be a keypress application, so i have to initiate a keypress function
2. computer randomly chooses rocks paper or scissor
3. we choose r, p, or s, and can only choose r,p, or s or the game won't run
4. we have to calculate wins, ties and losses.

*/

//declaring my variables
//i created these based on the different data that i need to change and store throughout myy
//application

//if something can have multiple values, store it in an array
var compGuess = ['r', 'p', 's'];

//you can declare a variable with no variable and then re-assign it later on
var computerOption;

//these are variables that are set that will change throughout the application
var wins = 0;
var losses = 0;
var ties = 0;

//calling a keydown event, which records every key that is pressed when on the window
//you can use 'e' as an argument in every event
document.addEventListener('keydown', function(e){
	//then console.log 'e' here to see what values you can get out of it
	console.log(e)

	//i saw that e.key is equal to the key that i press on that keyboard
	//i need that to make my game run, so im basing my choice as a user on this key press
	//in this 'if' statement, im making sure the user only presses r,s, or p, or else the 
	//game won't run. The game is wrapped in that statement if true, and if false, just alerts
	//Please enter r, p, or s
	if(e.key === 'r' || e.key === 's' || e.key === 'p'){
		//reassigning the undefined variable above to have a value of....
		//a random value from that compGuess array, which represent the computers choice
		computerOption = compGuess[Math.floor(Math.random() * compGuess.length)];

		//just checking my logs to see what these equal
		console.log(computerOption)
		console.log(e.key)

		//switch statement, a little cleaner than an 'if' statement if you have a lot of
		//operators depending on just one value
		//here i'm saying within the switch, value of computerOption
		switch(computerOption){
			//if computerOption == 'r', which means it randomized one value, which is 'r'
			case 'r':
				if(e.key === 'r'){
					//if i pressed r, print to the console 'you tie' and increment my ties variable
					console.log('you tie')
					ties++;
				} else if(e.key === 's'){
					//if i pressed s, print to the console 'computer wins' and increment my losses variable
					console.log('computer wins')
					losses++;
				} else {
					//if i pressed 'p', print to the console 'you win' and increment my wins variable
					console.log('you win')
					wins++;
				}
				break;
			//if computerOption == 'p', which means it randomized one value, which is 'p'
			case 'p':
				if(e.key === 'r'){
					//if i pressed r, print to the console 'you lose' and increment my losses variable
					console.log('you lose')
					losses++;
				} else if(e.key === 's'){
					//if i pressed 's', print to the console 'you win' and increment my wins variable
					console.log('you win')
					wins++;
				} else {
					//if i pressed 'p', print to the console 'you tie' and increment my ties variable
					console.log('you tie')
					ties++;
				}
				break;
			//if computerOption == 's', which means it randomized one value, which is 's'
			case 's':
				if(e.key === 'r'){
					//if i pressed 'r', print to the console 'you win' and increment my wins variable
					console.log('you win')
					wins++;
				} else if(e.key === 's'){
					//if i pressed 's', print to the console 'you tie' and increment my ties variable
					console.log('you tie')
					ties++;
				} else {
					//if i pressed p, print to the console 'you lose' and increment my losses variable
					console.log('you lose')
					losses++;
				}	
				break;
			//any other case besides r,p, or s, in this situation, not going to happen
			default:
				console.log('not going to happen')	
		}

		//appending the current values of wins, losses & ties to the dom based by respective div id's
		document.getElementById('wins').innerText = wins;
		document.getElementById('losses').innerText = losses;
		document.getElementById('ties').innerText = ties;

		//appending the users guess and computers guess to the html
		document.getElementById('user-guess').innerText = "You Guessed: " + e.key;
		document.getElementById('computer-guess').innerText = "Computer Guessed: " + computerOption;


	} else {
		//if you do not press r, p, or s, then this alert will show up
		//the game wont run because the functionality for the game is in the block before this, before the else
		//if it is true that the user press r,p, or s, then do this
		//if that is not true, do what is in the else
		alert('Please enter r, p, or s')
	}

});