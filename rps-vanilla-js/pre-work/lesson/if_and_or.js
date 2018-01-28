/*
---------- AND = &&
*/

//follow the number, we will continue to increment and decrement
var num = 0;

var obj = [{
	name: 'bob',
	age: 20,
	gender: 'male'
},{
	name: 'rick',
	age: 30,
	gender: 'male'
},{
	name: 'zappa',
	age: 25,
	gender: 'female'
},{
	name: 'kathy',
	age: 26,
	gender: 'female'
},{
	name: 'patricia',
	age: 21,
	gender: 'female'
}];


for(var i = 0; i < obj.length; i++){
	if(obj[i].age > 21 && obj[i].gender === "female"){
		console.log(obj[i])
		num++
	}
}
console.log(num)

//es6 - to just check
obj.forEach((person) => {
	if(person.age > 20 && person.gender === "female" && person.name === "kathy"){
		console.log(person)
		num++
	}
})
console.log(num)

/*
---------- OR = ||
*/

//empty array to be used in a moment
var arr = [];

for(var i = 0; i < obj.length; i++){
	if(obj[i].age < 30 || obj[i].gender === "female"){
		console.log(obj[i])
		//if you want a new array of these items
		arr.push(obj[i])
		num--;
	}
}
console.log(arr);
console.log(num);

//a little easier to create an array out of these items
var filteredObj = obj.filter((person) => {
	return person.age < 30 || person.gender == "female"
})

console.log(filteredObj);

