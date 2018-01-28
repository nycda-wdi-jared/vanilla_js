//https://www.w3schools.com/jsref/jsref_obj_string.asp
//please view the website above for more built-in javascript methods on strings and arrays
//ive referenced some of the more popular methods

//declaring an array
var farmAnimals = ["cow", "chicken", "sheep", "rooster", "pig", "horse", "goat", "pony", "rabbit", "hog"];

console.log(farmAnimals[0])
//charAt, looks for a letter in the string
//below, looking for all the animals that start with the letter c
//just like arrays, the 0 index of a string is the first letter
for(var i = 0; i < farmAnimals.length; i++){
	if(farmAnimals[i].charAt(0) === "c"){
		console.log(farmAnimals[i])
	}
}

//looking for all of the animals who's third letter is "g"
for(var i = 0; i < farmAnimals.length; i++){
	if(farmAnimals[i].charAt(2) === "g"){
		console.log(farmAnimals[i])
	}
}

//declaring another array
var otherAnimals = ["duck", "goose", "frog"]

//concat combines two arrays
var allAnimals = farmAnimals.concat(otherAnimals);
console.log(allAnimals)

//ends with. Im looking for all animals that end with either g or e
for(var i = 0; i < allAnimals.length; i++){
	if(allAnimals[i].endsWith("g") || allAnimals[i].endsWith("e")){
		console.log(allAnimals[i])
	}
}

//includes, checks to see if a string include the letter or combo of letters
for(var i = 0; i < allAnimals.length; i++){
	if(allAnimals[i].includes("se")){
		console.log(allAnimals[i])
	}
}

//indexOf: 
// > -1 is stating that the letter or combo of letters is in the word, 
// == -1 means it is not in the world
for(var i = 0; i < allAnimals.length; i++){
	if(allAnimals[i].indexOf("bb") > -1){
		console.log(allAnimals[i])
	}
	//the difference between index of an includes, is that you can check the "index" "of" a letter
	//if it returns -1, it means the letter is not in the word,
	//if it returns any other number, that is the index of that letter in the word
	console.log(allAnimals[i].indexOf("e"));
}

//replace:
//string and array manipulation = changing the values of strings in arrays
for(var i = 0; i < allAnimals.length; i++){
	if(allAnimals[i] === "frog"){
		allAnimals[i] = allAnimals[i].replace(allAnimals[i], "komodo dragon")
	}
}
console.log(allAnimals)

//slice
//string.slice(start index, end index)
//this example start at index 0 and ends at index 3, giving you 'chi'
console.log(allAnimals[1].slice(0,3))

//toUpperCase()
//change string or letter in string to uppercase

//string(s)
for(var i = 0; i < allAnimals.length; i++){
	console.log(allAnimals[i].toUpperCase())
}

//letter
//allAnimals[i].length represent the length of the string
//first...console.log(allAnimals[i].charAt(0).toUpperCase())
//second...console.log(allAnimals[i].slice(1, allAnimals[i].length)
//as you can tell, with the +, i am adding them together...concatanating the strings
for(var i = 0; i < allAnimals.length; i++){
	console.log(allAnimals[i].charAt(0).toUpperCase() + allAnimals[i].slice(1, allAnimals[i].length))
}

//toLowerCase() is the opposite



