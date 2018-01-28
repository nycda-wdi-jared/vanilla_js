var word = "beep";

function callMeLater(){
	console.log(word);
}

setTimeout(callMeLater, 2000);

word = "boopie"