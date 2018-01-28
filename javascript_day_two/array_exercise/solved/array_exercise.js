/*

From the array here, loop through, console.log all of the "Jareds" and replace the name "Jared" with the h2 tag
console.log all of the names that start with the letter "J"

*/

var classNames = ["Bianca", "Jared", "Jasmaine", "Jarvis", "Joel", "Nathan", "George", "Akintunde", "Tymel", "David", "PJ", "Mikael", "Jared"];

// ----------- Code Below -------------------

for(var i = 0; i < classNames.length; i++){
	if(classNames[i] === "Jared"){
		document.getElementById("h2-tag").innerHTML = classNames[i];
	}

	if(classNames[i].charAt(0) === "J"){
		console.log(classNames[i])
	}
}