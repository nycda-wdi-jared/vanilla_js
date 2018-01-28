var dogs = [
	{
		name: 'Shayna',
		breed: 'Shih Tzu',
		gender: 'female',
		neutered: true,
		friendly: false
	},
	{
		name: 'Reggie',
		breed: 'Sheltie',
		gender: 'male',
		neutered: true,
		friendly: true		
	},
	{
		name: 'Samson',
		breed: 'Yorkshire Terrier',
		gender: 'male',
		neutered: true,
		friendly: false	
	}
];

console.log(dogs);

//lets loop through it :)
for(var i = 0; i < dogs.length; i++){
	if(dogs[i].friendly){
		console.log(dogs[i])
	}
}

//the for loop is so ES5, lets look at some es6 functions to make for loops easier
//and make it easier to create new arrays that fit our conditionals

//forEach is just like a for loop
dogs.forEach(function(dog){
	console.log(dog)
})
//the arrow function 
dogs.forEach((dog) => {
	console.log(dog.name)
});

//creates a new array for specific property in objects
var mapES6 = dogs.map(function(dog){
	return dog.name
})
console.log(mapES6)

//create a new array to fit conditional
var filterES6 = dogs.filter((dog) => {
	return !dog.friendly;
})
console.log(filterES6);

//<------------------------------------------------------------------------------>

//lets get these items to the DOM
var ulTag = document.getElementById('ul-tag');
var str = "";

//lets loop through the array
for(var i = 0; i < dogs.length; i++){
	str += "<li>" + dogs[i].name + "</li>"
}

//add the html string that i just connected to the innerHTML of the document
ulTag.innerHTML = str;




