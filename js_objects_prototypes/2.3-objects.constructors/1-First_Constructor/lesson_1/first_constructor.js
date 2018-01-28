function Character(name, species, hp, attack){
	this.name = name;
	this.species = species;
	this.hp = hp;
	this.attach = attack;
}

var roger = new Character("Roger", "Rabbit", 50, 60);
console.log(roger);
var bob = new Character("Bob", "Sponge", 60, 50);
console.log(bob.name);


//A different way to create and access an object
function Movie(){
	this.title = "Movie Title: ";
	this.actor = "Movie Actors: "	
}

var scarface = new Movie();

scarface.title += "Scarface";
scarface.actor += "Al Pacino";
scarface.genre = "thriller"

console.log(scarface.genre);
