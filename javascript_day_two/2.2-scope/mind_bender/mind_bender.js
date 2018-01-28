var word = "beep";

function outerFunction(){
	var myWord = word;

	function innerFunction(){
		console.log(myWord)
	}

	setTimeout(innerFunction, 500)

	word = "boop";
}

outerFunction();
outerFunction();
word = "bonk";
outerFunction();