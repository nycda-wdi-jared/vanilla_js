/*

1. create an animal constructor
2. create an outside method that represents the animals call (i.e. a cow moo's)
3. Make that function print the call to the console

*/

function Animal(species, call){
	this.species = species;
	this.call = call;
}

var cow = new Animal("cow", "moo");

cow.moo = function(){
	console.log("I am a " + this.species + " and I " + this.call)
}

cow.moo();