//storing an array in a variable named basketballTeams
var basketballTeams = ["bulls", "hawks", "rockets", "knicks", "celtics", "warriors", "hornets", "cavs", "spurs"];
var basketballTeamsWithRs = [];


console.log("line 4 = " + basketballTeams.length)
//access items in array
//starts with 0 index i.e. basketballTeams[0] === ?
//you can access items just like this below
console.log("line 6 = " + basketballTeams[0]);
console.log("line 7 = " + basketballTeams[3]);

//however, if you want to access all the items in the array and do checks, you loop
//start with for
//define var i, which starts at 0, meaning it is starting at the beginning of the array
//i < basketballTeams.length, meaning how long I want the loop to go before stopping
//i++, to keep incrementing i until it goes from 0 to basketballTeams.length
for(var i = 0; i < 6; i++){
	console.log("line 17 = " + basketballTeams[i])
}

for(var i = 0; i < basketballTeams.length; i++){
	if(basketballTeams[i].indexOf("rs") > -1){
		basketballTeamsWithRs.push(basketballTeams[i])
	}
}

console.log(basketballTeamsWithRs)

