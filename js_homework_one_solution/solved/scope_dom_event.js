/*

Scope/DOM/Event Mini Challenges - approx 4 hours
Goal:

Demonstrate understanding of DOM manipulation and events. Build familiarity with JS syntax.

Assignment:

Complete and submit the following three exercises to go over JavaScript event binding:

1. Create an HTML page with two buttons that argue with each other. 
   When one button is clicked, the text "I'm right" should be placed next to it. 
   When the other button is clicked, the text is replaced with, "No, I'm right!"
2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
   When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
3. Create an HTML page with javascript that listens for a keypress.
4. When the user presses that key, the text of the H1 should show the value of the key they have pressed.
5. Create an HTML page with a form. 
   The form should include inputs for a username, email, and password as well as a submit button.
6. In a Javascript file, write code that does the following things:
	 - checks that the password is 12345678
	 - checks that the username contains at least one number
	 - if anything is wrong, send an alert message saying "incorrect"
7. Your page should also include an H1 tag. 
   If the information in the form is correct, have Javascript change the text in the H1.

*/

//1.

var resultAfterClick = document.getElementsByTagName('h1')[0];

document.getElementsByTagName('button')[0].onclick = function(){
	resultAfterClick.innerText = "I'm Right"
}

document.getElementsByTagName('button')[1].onclick = function(){
	resultAfterClick.innerText = "No, I'm Right"
}

//2.

document.getElementsByTagName('p')[0].addEventListener('mouseover', function(){
	alert('Don\'t Hover Over Me')
});

//3 & 4

document.addEventListener('keydown', function(e){
	console.log("You pressed the " + e.key + " key.")
	document.getElementsByTagName('h1')[1].innerText = e.key;
});

//5, 6, 7
document.getElementsByTagName('form')[0].onsubmit = function(e){
	e.preventDefault();
	var username = document.getElementsByName('username')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;

	if(password !== '12345678' || !username.match(/\d/)){
		alert("Please enter info correctly")
	} else {
		document.getElementById('form-submitted-result').innerText = "Form Submitted Correctly";
	}
}

