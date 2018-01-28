function sayWord(){
	var word = "beep";
	console.log(word)
}

sayWord();
//console.log(word)

// -----------------------------------------------

var wordTwo = "boop";

function sayWordTwo(word){
	wordTwo = "beep";
	console.log(wordTwo);
}

sayWordTwo();
console.log(wordTwo);
wordTwo = "goodbye!";
console.log(wordTwo);

