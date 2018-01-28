function TvShow(name, actor, genre){
	this.name = name;
	this.actor = actor;
	this.genre = genre;
}

var theOffice = new TvShow("The Office", "Steve Carrell", "Comedy");

//you can also create a method outside of the constructor
theOffice.printStats = function(){
	console.log(this.name);
}

//and then call it, as you can tell, name can be accessed through this.name
theOffice.printStats();