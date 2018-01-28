//reference site: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

var Employee = function(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

Employee.prototype.sleep = function(){
	if(this.age >= 29){
		console.log("I'm taking a nap on the 12th floor")
	} else {
		console.log("A little too young to fall asleep bub")
	}
}

var Manager = function(title, name, age, gender){
	Employee.call(this, name, age, gender)
	this.title = "Manager";

}

Manager.prototype = new Employee();
var joe = new Employee("Joe", 29, "Male")
var mary = new Manager("CEO", "Mary", 22, "Female")
joe.sleep();
console.log(joe)
console.log(mary)
mary.sleep();

