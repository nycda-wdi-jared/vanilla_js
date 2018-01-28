function Character(name, age, bald){
	this.name = name;
	this.age = age;
	this.bald = bald;
	this.printStats = function(){
		if(this.bald){
			console.log(this.name + " is " + this.age + " years old and is bald");
		} else {
			console.log(this.name + " is " + this.age + " years old and is not bald");
		}
	}
}

var jared = new Character("Jared", 30, true);
jared.printStats();