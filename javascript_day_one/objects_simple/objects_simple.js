var student_one = {
	name: "jared",
	gender: "male",
	age: 29
}

//to access an item in the object
console.log("line 8 " + student_one['name']);
console.log("line 9 " + student_one['age']);
//or
console.log("line 11 " + student_one.gender)


//a for loop for objects, to get all of the values in an object
for(var i in student_one){
	console.log("line 16 " + student_one[i])
}

//get all of the properties in an object
var properties = Object.getOwnPropertyNames(student_one);
console.log(properties)

//add similar objects to an array
var student_array = [];
var student_two = {
	name: "joey",
	gender: "female",
	age: 23
}

student_array.push(student_one);
student_array.push(student_two);
console.log(student_array)

//if you just want the students name, create a new array and loop through
//look how im accessings the name property on line 35
var student_names = [];
for(var i = 0; i < student_array.length; i++){
	student_names.push(student_array[i].name)
}
console.log(student_names)

