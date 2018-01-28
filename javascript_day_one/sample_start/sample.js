var name = "jared";
var songname = "blurry";

console.log("line 4 " + name);
console.log("line 5 " + songname);

songname = "madness";

console.log("line 9 " + songname);

function printWords(){
	return "Hello Class"
}

console.log("line 15 " + printWords())

var classRoomStudents = ["joel", "nathan", "jasmaine", "mikael", "david", "pj", "jarvis", "ak", "tymel", "jared", "george"]

for(var i = 0; i < classRoomStudents.length; i++){
	console.log("line 20 " + classRoomStudents[i])
}


var joeys = 0
for(var i = 0; i < classRoomStudents.length; i++){
	if("joey" === classRoomStudents[i]){
		joeys++;
	}
}

if(joeys == 0){
	console.log("line 32: there is no joey in the class");
} else {
	console.log("line 34: there is a joey in the class");
}

var num = 0;
var doThings = ["jump", "skip", "hop"]

do {
	console.log("line 41 " + doThings[num])
	num++
}
while(num < doThings.length)

for(var i = 0; i < classRoomStudents.length; i++){
	if(classRoomStudents[i] !== "jasmaine"){
		console.log("line 48 " + classRoomStudents[i])
	} else {
		break;
	}
}

for(var i = 0; i < 6; i++){
	console.log("line 55 " + classRoomStudents[i])
}


