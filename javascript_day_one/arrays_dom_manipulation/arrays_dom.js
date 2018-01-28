var iceCreamFlavors = ["vanilla", "chocolate", "strawberry"];

function addToArray(){
	var inputValue = document.getElementById('input-to-add').value;
	//push adds to the end of an array
	iceCreamFlavors.push(inputValue);

	//html is text
	//you can use html items as text in your javascript
	//when appending to html, it will recognize the html items
	var str = "<ul>";

	for(var i = 0; i < iceCreamFlavors.length; i++){
		str += "<li>" + iceCreamFlavors[i] + "</li>"
	}

	document.getElementById("ul-to-add-to").innerHTML = str + "</ul>";
}

var str = "<ul>";

for(var i = 0; i < iceCreamFlavors.length; i++){
	str += "<li>" + iceCreamFlavors[i] + "</li>"
}

document.getElementById("ul-to-add-to").innerHTML = str + "</ul>";