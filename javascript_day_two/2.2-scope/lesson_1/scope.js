//global scope
var word = "hello"

function sayWord(){
	console.log(word)
}

sayWord();
console.log(word)
word = "goodbye"
sayWord();

