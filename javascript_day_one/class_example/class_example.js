var helloWorld = "Hello World";
var iceCream = [];

alert(helloWorld);
document.getElementById('hello').innerHTML = helloWorld;

if(helloWorld !== "Hello This"){
	document.getElementById('header').innerHTML = "Joey Johnny"
	console.log(document.getElementById('header'));
	console.log("this is the true statement")
} else {
	document.getElementById('header').innerHTML = "This wont happen";
	console.log("this is the false statement")
}

if (typeof helloWorld !== "string"){
	alert("helloWorld variable is not a string")
} else {
	alert("helloWorld variable is a string")
}

var num1 = 5;
var num2 = 6;

document.getElementById("number").innerHTML = num1 + num2;

num2 = 12
function addNumbers(num_one, num_two){
	return num_one + num_two;
}

document.getElementById("number").innerHTML = addNumbers(helloWorld, num2);

var favoriteFoods = ["ice cream", "chex mix", "doritos", "burgers", "pizza", "brussel sprouts with salt"]
var str = "<ul>";

for(var i = 0; i < favoriteFoods.length; i++){
	str += "<li>" + favoriteFoods[i] + "</li>"
}

document.getElementById("foods").innerHTML = str + "</ul>";

for(var i = 0; i < iceCream.length; i++){
	document.getElementById("ice-cream").innerHTML = iceCream[i]
}




