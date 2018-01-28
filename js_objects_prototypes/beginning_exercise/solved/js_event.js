/*

change the dolphin to the whale, and make the whale larger

1. Read This: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown_addeventlistener
2. create an on key press function
3. append the keys that are pressed to the dom

*/

// <---------------------------------------------------------> \\


document.getElementsByTagName('img')[0].onclick = function(){
	var img = document.getElementsByTagName('img')[0];
	img.src = "whale.jpeg";
	img.height = "200";
	img.width = "200";
}

// <---------------------------------------------------------> \\

var str = "";
document.addEventListener('keydown', function(e) {
	if(e.key.length == 1){
		str += e.key
	}
	if(e.key === "Backspace"){
		str = str.slice(0, str.length - 1)
	}
    this.getElementById('typed-words').innerHTML = str;
});