/*
• Declare a function that takes any string as an argument and 
  console logs to the user the text they've entered, try invoking 
  it after it has been declared
*/
//insert code here
//<------------------------------------------------------->

function takeAString(text){
	console.log(text);
}

takeAString("Whats Up");

//<------------------------------------------------------->

/*
• Declare a function that takes no arguments but prints something 
  to the console, try invoking it after it has been declared
*/
//insert code here
//<------------------------------------------------------->

function takeNoParameter(){
	console.log("Remember, no parameters");
}

takeNoParameter();

//<------------------------------------------------------->

/*
• No Whammies!!! Declare a function that receives an input of door 
  1, 2 or 3. Depending upon which virtual "door" was entered, the 
  function will tell the user they've received a different "prize" 
  in an alert. Try running it after it has been declared a few times 
  with each door option.
*/
//insert code here
//<------------------------------------------------------->

function pickADoor(doorNumber){
	if(doorNumber == 1){
		console.log("You win a pony")
	} else if (doorNumber == 2){
		console.log("You win a pete townsend woodstock guitar")
	} else if (doorNumber == 3){
		console.log("You win my last night leftovers")
	} else {
		alert("please choose a door from numbers 1 - 3")
	}
}

//pickADoor(insert a number)
//<------------------------------------------------------->