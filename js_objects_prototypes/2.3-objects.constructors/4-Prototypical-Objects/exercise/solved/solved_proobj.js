/*

Try creating an object, then extend another object from it. Some examples:
Animal -> Mammal 
House -> Room

*/

function House(size,color){
	this.size = size;
	this.color = color;
}

function Room(type,floor,section,size,color){
	House.call(this,size,color)
	this.type = type;
	this.floor = floor;
	this.section = "Room in House";
}

var castle = new House("Large", "Grey");
var basement = new Room("basement", "first", "bottom level", "large", "blue");

console.log(castle);
console.log(basement);
