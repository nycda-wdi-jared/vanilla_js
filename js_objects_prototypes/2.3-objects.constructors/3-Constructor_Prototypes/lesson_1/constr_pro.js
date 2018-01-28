function Cat(name, type, size){
	this.name = name;
	this.type = type;
	this.size = size;
}

Cat.prototype.meow = function(){
	if(this.size === "small"){
		console.log(this.name + ", the " + this.size + " " + this.type + " meowed.")
	} else {
		console.log(this.name + ", the " + this.size + " " + this.type + " roared.")
	}
}

function Dog(name, breed, size){
	this.name = name;
	this.breed = breed;
	this.size = size;
	this.printStats = () => {
		console.log("Dog Size: " + this.size);
	}
}

Dog.prototype.eat = function(){
	return "I had my Iams, so now I am " + (this.size += 20) + " pounds"
}

var tiger = new Cat("Tony", "tiger", "large");
tiger.meow();

var pluto = new Dog("Pluto", "Cocker Spaniel", 60);
pluto.eat();
pluto.printStats();

//what's going to happen when you comment out below?
//tiger.eat();






