/*

• Take one of the objects you created in the last exercise and extend it using its prototype
• Add one more attribute and one more method to it
• Try to access these attributes and methods on both 
  an already created instance and a brand new instance of the object

*/

function Animal(species, call, fly){
	this.species = species;
	this.call = call;
	this.fly = fly;
	this.move = function(){
		if(this.species === "bird"){
			console.log("Fly baby fly")
		} else {
			console.log("I'm not a bird...so....I guess im walking")
		}
	}
}

Animal.prototype.speak = function(){
	return "I am a " + this.species + " and I " + this.call;
}

var parrot = new Animal("Bird", "Cacaw", true);
var sonic = new Animal("Hedgehog", "chizzity chitt chitt", false); 

console.log(parrot.speak())
sonic.move();
console.log(sonic.speak())